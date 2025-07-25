import ClientEditor from '../components/ClientEditor.jsx';
import { useClient } from '../stores/user-store.js';
import { useParams } from 'react-router';
import { fetchImage, createClient, fetcher } from '../utils/fetchers.js';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export default function Client() {

    const { trigger } = useSWRMutation('http://localhost:8080/api/clients', createClient);

    function save({ savedClient, savedImage }) {
        trigger({ savedClient, savedImage })
    }

    const { clientId } = useParams();
    const { client } = useClient(clientId);
    const { data: sports, error: isSportsError, isLoading: isSportsLoading } = useSWR("http://localhost:8080/api/sports", fetcher);

    const { data: image, error: isError, isLoading: isLoading } = useSWR(() => ({ url: 'http://localhost:8080/api/images/image', args: client.image.url }), fetchImage);

    if (isError || isSportsError) { return <div>Error while loading data</div> }

    if (isLoading || isSportsLoading) {
        return <div>Loading data</div>
    }

    return (
        <div>
            <ClientEditor client={client} sports={sports} onSave={save} image={image} />
        </div>
    )
}
