import { useState } from "react";
import Autocomplete from "./Autocomplete.jsx";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";


export default function EventEditor({ event, onSave }) {

    const [savedEvent, setSavedEvent] = useState({ ...event })

    return (
        <div>
            <Input labelText="Title" value={savedEvent.title} onChange={e => setSavedEvent({ ...savedEvent, title: e.target.value })} />
            <TextArea labelText="Description" value={savedEvent.description} onChange={e => setSavedEvent({ ...savedEvent, description: e.target.value })} />

            <Autocomplete textLabel="Address" onAutocompleteSelect={address =>
                setSavedEvent({ ...savedEvent, address: { address: address.formattedAddress, latitude: address.latitude, longitude: address.longitude } })
            } />
            <p>{savedEvent?.address}</p>
            <Button onClick={onSave}>Save</Button>

        </div>
    )
}
