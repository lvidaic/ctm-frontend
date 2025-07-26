import ClientEditor from '../components/ClientEditor.jsx';
import { useClient } from '../stores/user-store.js';
import { useSports } from '../stores/sports-store.js';
import { useParams } from 'react-router';
import { createClient } from '../utils/fetchers.js';
import useSWRMutation from 'swr/mutation';
import { useImage } from '../stores/image-store.js';

export default function Client() {

    const { trigger } = useSWRMutation('http://localhost:8080/api/clients', createClient);

    function save({ savedClient, savedImage }) {
        trigger({ savedClient, savedImage })
    }

    const { clientId } = useParams();
    const { client } = useClient(clientId);
    const { sports, isError: isSportsError, isLoading: isSportsLoading } = useSports();

    const { image, isError, isLoading } = useImage(client);

    if (isError || isSportsError) { return <div>Error while loading data</div> }

    if (isLoading || isSportsLoading) {
        return <div>Loading data</div>
    }

    return (
        <div>
            <ClientEditor client={client} sports={sports.sort()} onSave={save} image={image} />
        </div>
    )
}
