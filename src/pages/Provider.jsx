import { useParams } from "react-router"
import { useProvider } from "../stores/provider-store";
import { useImage } from "../stores/image-store"
import ProviderEditor from "../components/ProviderEditor";

export default function Provider() {

    function save(data) {
        console.log("Save clicked: ", data);
    }

    const { providerId } = useParams();
    const { provider, isLoading: isProviderLoading, isError: isProviderError } = useProvider(providerId);

    const { image, isError, isLoading } = useImage(provider);

    if (isError || isProviderError) {
        return <div>Error while reading data</div>
    }

    if (isLoading || isProviderLoading) {
        return <div>Loading data</div>
    }

    return (
        <>
            <div>
                <p>{provider.firstName}</p>
            </div>
            <div>
                <p>{provider.lastName}</p>
            </div>
            <div>
                <p>{provider.description}</p>
            </div>
            <div>
                <p>{provider.createdAt}</p>
            </div>
            <div>
                <p>{provider.updatedAt}</p>
            </div>
            <div>
                <p>{provider.role}</p>
            </div>
            <ProviderEditor image={image} provider={provider} onSave={save} />
        </>
    )
}

