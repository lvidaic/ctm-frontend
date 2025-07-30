import { useState } from "react";
import Autocomplete from "./Autocomplete.jsx";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import TermList from "./TermList.jsx";
import TermEditor from "./TermEditor.jsx";


export default function EventEditor({ event, onSave }) {
    const terms = [
        {
            description: "Football Match Little guys",
            startTime: "10:30",
            endTime: "11:30",
            compensation: 100.00,
            requiredPersonnel: "TECHNICIAN"
        },
        {
            description: "Bit older Guys",
            startTime: "12:00",
            endTime: "13:30",
            compensation: 120.00,
            requiredPersonnel: "DOCTOR"
        }
    ]

    const [savedEvent, setSavedEvent] = useState({ ...event, terms })
    const [editTerm, setEditTerm] = useState(false);

    function handleTermsChange(terms) {
        setSavedEvent({ ...savedEvent, terms: terms });
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
            <Button className="w-24" onClick={() => onSave(savedEvent)}>Save</Button>
        </div>
    )
}
