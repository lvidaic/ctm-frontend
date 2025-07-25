import ClientEditor from '../components/ClientEditor.jsx';
import { useClient } from '../stores/user-store.js';
import { useParams } from 'react-router';
import { fetchImage, createClient } from '../utils/fetchers.js';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export default function Client() {

    const { trigger } = useSWRMutation('http://localhost:8080/api/clients', createClient);

    function save({ savedClient, savedImage }) {
        trigger({ savedClient, savedImage })
    }

    const { clientId } = useParams();
    const { client } = useClient(clientId);

    const { data: image, error: isError, isLoading: isLoading } = useSWR(() => ({ url: 'http://localhost:8080/api/images/image', args: client.image.url }), fetchImage);

    if (isError) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <div>
            <ClientEditor client={client} onSave={save} image={image} />
        </div>
    )
}
