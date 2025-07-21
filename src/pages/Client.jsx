import useSWR from "swr"
import ClientEditor from '../components/ClientEditor.jsx';
import { fetcher, imageFetcher } from '../utils/fetchers.js';

export default function Client() {

    function save(createdClient) {
        console.log(createdClient);
    }

    // const { data: client } = useSWR("http://localhost:8080/api/clients/ff3f05dc-305e-4040-a6b1-5697bcc8c08f", fetcher); const { data: image } = useSWR(() => "http://localhost:8080/api/images/image", imageFetcher, {objectName: ff3f05dc-305e-4040-a6b1-5697bcc8c08f/SqaureCoding.JPG"});
    const { data: image } = useSWR({ url: "http://localhost:8080/api/images/image", data: "ff3f05dc-305e-4040-a6b1-5697bcc8c08f/SqaureCoding.JPG" }, (args) => imageFetcher(args));
    console.log(image);

    if (!image) return 'loading'

    return (
        loaded
        // <ClientEditor client={client} onSave={save} />
    )
}

