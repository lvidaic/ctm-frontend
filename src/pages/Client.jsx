import { useClient } from '../stores/user-store.js';
import ClientEditor from '../components/ClientEditor.jsx';
import { useParams } from 'react-router';

export default function Client() {

    function save(createdClient) {
        console.log(createdClient);
    }

    const { clientId } = useParams();
    const { client, isError, isLoading } = useClient(clientId);

    if (isError) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <ClientEditor client={client} onSave={save} />
    )
}

