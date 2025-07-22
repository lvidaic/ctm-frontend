import ClientEditor from '../components/ClientEditor.jsx';
import { useClient } from '../stores/user-store.js';
import { useParams } from 'react-router';
import { fetchImage } from '../utils/fetchers.js';
import useSWRMutation from 'swr/mutation';

export default function Client() {

    function save(createdClient) {
        console.log(createdClient);
    }

    function getImage() {
        const { data } = trigger("ff3f05dc-305e-4040-a6b1-5697bcc8c08f/SqaureCoding.JPG");
        console.log(data)
    }

    const { clientId } = useParams();
    const { client, isError, isLoading } = useClient(clientId);


    // A useSWR + mutate like API, but it will not start the request automatically.
    const { trigger } = useSWRMutation('http://localhost:8080/api/images/image',
        fetchImage);
    // Trigger `updateUser` with a specific argument.


    if (isError) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <div>
            <button onClick={getImage}>Trigger loading</button>
            <ClientEditor client={client} onSave={save} />
        </div>
    )
}

