import useSWR from "swr";
import EventItem from "./EventItem";
import { useCurrentClient } from "../stores/user-store";
import { deleteEvent, fetcher } from "../utils/fetchers";
import useSWRMutation from "swr/mutation";

export default function EventList() {


    function handleRemoveEvent(event) {
        triggerDelete({ event })
    }

    function onDeleteSuccess() {
        mutate();
    }

    const { client } = useCurrentClient();
    const { data: events, error: isError, isLoading, mutate } = useSWR(() => "http://localhost:8080/api/events/client/" + client.id, fetcher);
    const { trigger: triggerDelete } = useSWRMutation('http://localhost:8080/api/events', deleteEvent, { onSuccess: onDeleteSuccess });

    if (isLoading) {
        return <div>Loading data</div>
    }

    if (isError) {
        return <div>Error while loadign data</div>
    }

    return (

        <ul role="list" className="divide-y divide-gray-100">
            {events.map((event) => (
                <EventItem key={event.id} event={event} onRemoveEvent={handleRemoveEvent} />
            ))}
        </ul>
    )
}
