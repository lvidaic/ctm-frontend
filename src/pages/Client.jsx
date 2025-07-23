import ClientEditor from '../components/ClientEditor.jsx';
import { useClient } from '../stores/user-store.js';
import { useParams } from 'react-router';
import { fetchImage } from '../utils/fetchers.js';
import useSWR from 'swr';

export default function Client() {

    function save(createdClient) {
        console.log(createdClient);
    }

    const { clientId } = useParams();
    const { client } = useClient(clientId);
    console.log(clientId);

    const { data: image, error: isError, isLoading } = useSWR(() => 'http://localhost:8080/api/images/image', fetchImage('http://localhost:8080/api/images/image', () => client.image.url));

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

