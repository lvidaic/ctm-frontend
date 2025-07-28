import { useNavigate } from "react-router";
import Button from "../components/Button.jsx";
import { useCurrentProvider } from "../stores/provider-store.js";
export default function Home() {

    const { provider, isError, isLoading } = useCurrentProvider();
    const navigate = useNavigate();

    if (isError) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <div>
            <Button onClick={() => navigate("/provider/" + provider.id)}> Profile</Button>
        </div >
    )
}
