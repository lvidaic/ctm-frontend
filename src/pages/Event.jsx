import { useParams } from "react-router";
import EventEditor from "../components/EventEditor";
import { useEvent } from "../stores/event-store";
import useSWRMutation from "swr/mutation";
import { createEvent } from "../utils/fetchers";
import { useCurrentClient } from "../stores/user-store.js"

export default function Event() {

    function saveEvent(event) {
        triggerSave({ event, client })
    }

    const { trigger: triggerSave } = useSWRMutation("http://localhost:8080/api/events", createEvent);
    const { client } = useCurrentClient();

    const { eventId } = useParams();
    const { event, isError, isLoading } = useEvent(eventId);

    if (isError) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <div className="flex flex-col mt-5">
            <EventEditor event={event} onSave={saveEvent} />
        </div>
    );
}
