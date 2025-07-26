import { useParams } from "react-router"
import { useProvider } from "../stores/provider-store";

export default function Provider() {

    const { providerId } = useParams();
    const { provider, isError, isLoading } = useProvider(providerId);

    if (isError) {
        return <div>Error while reading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <>
            <h1>Provider</h1>
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
        </>
    )
}

