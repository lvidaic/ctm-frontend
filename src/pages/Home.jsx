import { useNavigate } from "react-router";
import Button from "../components/Button.jsx";
import { useCurrentClient } from "../stores/user-store.js";
export default function Home() {

    const { client, isError, isLoading } = useCurrentClient();
    const navigate = useNavigate();

    if (isError) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <div className="mt-3 flex flex-col gap-y-3">
        </div >
    )
}
