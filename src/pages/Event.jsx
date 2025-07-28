import { useParams } from "react-router";
import EventEditor from "../components/EventEditor";
import { useEvent } from "../stores/event-store";

export default function Event() {

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
            <h3 className="text-2xl mb-2">
                Event
            </h3>
            <EventEditor event={event} />
        </div>
    );
}
