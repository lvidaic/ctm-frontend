import { useParams } from "react-router"
import { useProvider } from "../stores/provider-store";
import { useImage } from "../stores/image-store"
import ProviderEditor from "../components/ProviderEditor";
import useSWRMutation from "swr/mutation";
import { createProvider } from "../utils/fetchers";

export default function Provider() {

    function save({ savedProvider, savedImage }) {
        triggerSave({ savedProvider, savedImage })
    }

    const { providerId } = useParams();
    const { provider, isLoading: isProviderLoading, isError: isProviderError } = useProvider(providerId);
    const { trigger: triggerSave } = useSWRMutation("http://localhost:8080/api/providers", createProvider);

    const { image, isError, isLoading } = useImage(provider);

    if (isError || isProviderError) {
        return <div>Error while reading data</div>
    }

    if (isLoading || isProviderLoading) {
        return <div>Loading data</div>
    }

    return (
        <>
            <ProviderEditor image={image} provider={provider} onSave={save} />
        </>
    )
}

