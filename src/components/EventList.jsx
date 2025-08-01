import useSWR from "swr";
import EventItem from "./EventItem";
import { useCurrentClient } from "../stores/user-store";
import { fetcher } from "../utils/fetchers";

export default function EventList() {

    const { client } = useCurrentClient();
    const { data: events, error: isError, isLoading } = useSWR(() => "http://localhost:8080/api/events/client/" + client.id, fetcher);

    if (isLoading) {
        return <div>Loading data</div>
    }

    if (isError) {
        return <div>Error while loadign data</div>
    }

    function handleRemoveEvent(event) {
        console.log("Removing event: ", event);
    }

    return (

        <ul role="list" className="divide-y divide-gray-100">
            {events.map((event) => (
                <EventItem key={event.id} event={event} onRemoveEvent={handleRemoveEvent} />
            ))}
        </ul>
    )
}
