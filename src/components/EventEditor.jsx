import { useState } from "react";
import Autocomplete from "./Autocomplete.jsx";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import TermList from "./TermList.jsx";
import { useEvent } from "../stores/event-store.js";
import { useCurrentClient } from "../stores/user-store.js";
import useSWRMutation from "swr/mutation";
import { createEvent } from "../utils/fetchers.js";
import { useParams } from "react-router";

export default function EventEditor() {

    function saveEvent(event) {
        triggerSave({ event, client })
    }


    function handleTermsChange(terms) {
        setSavedEvent({ ...savedEvent, terms });
    }

    const { trigger: triggerSave } = useSWRMutation("http://localhost:8080/api/events", createEvent);
    const { client } = useCurrentClient();

    const { eventId } = useParams();
    const { event, isError, isLoading } = useEvent(eventId);

    const [savedEvent, setSavedEvent] = useState({ ...event })

    if (isError) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }



    return (
        <div>
            <Input value={savedEvent.title} labelText="Title" onChange={e => setSavedEvent({ ...savedEvent, title: e.target.value })} />
            <TextArea labelText="Description" value={savedEvent.description} onChange={e => setSavedEvent({ ...savedEvent, description: e.target.value })} />

            <Autocomplete textLabel="Address" onAutocompleteSelect={address =>
                setSavedEvent({ ...savedEvent, address: address.formattedAddress, latitude: address.latitude, longitude: address.longitude })
            } />

            <p>{savedEvent?.address}</p>

            <TermList terms={savedEvent.terms || []} onTermsChange={handleTermsChange} />
            <Button className="w-24 mt-3" onClick={() => saveEvent(savedEvent)}>Save</Button>
        </div>
    )
}
