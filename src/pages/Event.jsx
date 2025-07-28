import { useParams } from "react-router";
import useSWR from "swr";
import { fetcher } from "../utils/fetchers";
import EventEditor from "../components/EventEditor";

export default function Event() {

    const { eventId } = useParams();
    const { data: event, error: isError, isLoading } = useSWR("http://localhost:8080/api/events/" + eventId, fetcher);

    if (isError) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <div>
            <h3 className="text-2xl">
                Event
            </h3>
            <EventEditor />
        </div>
    );
}
