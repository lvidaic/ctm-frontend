import useSWR from "swr";
import EventItem from "./EventItem";
import { useCurrentClient } from "../stores/user-store";
import { deleteEvent, fetcher } from "../utils/fetchers";
import useSWRMutation from "swr/mutation";
import { useNavigate } from "react-router";

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
    const navigate = useNavigate();

    if (isLoading) {
        return <div>Loading data</div>
    }

    if (isError) {
        return <div>Error while loadign data</div>
    }

    return (
        <div>
            <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                        <h3 className="text-base font-semibold text-gray-900">Events</h3>
                    </div>
                    <div className="ml-4 mt-2 shrink-0">
                        <button
                            onClick={() => navigate("/event/")}
                            type="button"
                            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create Event
                        </button>
                    </div>
                </div>
            </div>

            <ul role="list" className="divide-y divide-gray-100">
                {events.map((event) => (
                    <EventItem key={event.id} event={event} onRemoveEvent={handleRemoveEvent} />
                ))}
            </ul>
        </div>
    )

}
