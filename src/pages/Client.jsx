import useSWR from "swr"
import ClientEditor from '../components/ClientEditor.jsx';
import { fetcher } from '../utils/fetchers.js';

export default function Client() {

    function save(createdClient) {
        console.log(createdClient);
    }

    const { data: client, error, isLoading } = useSWR("http://localhost:8080/api/clients/ff3f05dc-305e-4040-a6b1-5697bcc8c08f", fetcher);

    if (error) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <ClientEditor client={client} onSave={save} />
    )
}

