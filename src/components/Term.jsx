
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Selectbox from "./Selectbox";
import TextArea from "./TextArea";

function Term({ term, onSave, onRemove }) {
    const [savedTerm, setSavedTerm] = useState({ ...term });

    const personnelOptions = [
        "DOCTOR", "NURSE", "TECHINTIAN"
    ];

    return (
        <div className="border p-4 my-4 rounded-md border-gray-300">
            <Input labelText="Start Time" inputType="time" value={savedTerm.startTime} onChange={e => setSavedTerm({ ...savedTerm, startTime: e.target.value })} />
            <Input labelText="End Time" inputType="time" value={savedTerm.endTime} onChange={e => setSavedTerm({ ...savedTerm, endTime: e.target.value })} />
            <Selectbox
                labelText="Required Personnel"
                elements={personnelOptions}
                value={savedTerm.requiredPersonnel}
                onChange={e => setSavedTerm({ ...savedTerm, requiredPersonnel: e.target.value })}
            />
            <TextArea labelText="Description" value={savedTerm.description} onChange={e => setSavedTerm({ ...savedTerm, description: e.target.value })} />
            <Input labelText="Compensation per hour" value={savedTerm.compensation} onChange={e => setSavedTerm({ ...savedTerm, compensation: e.target.value })} />
            <Button onClick={() => onSave(savedTerm)}>Save Term</Button>
            <Button onClick={() => onRemove(term)}>Remove Term</Button>
        </div>
    );
}

export default function TermList({ terms, onTermsChange }) {
    function handleSaveTerm(term) {
        const newTerms = [...terms];
        const index = newTerms.findIndex(t => t.id === term.id);
        if (index === -1) {
            newTerms.push(term);
        } else {
            newTerms[index] = term;
        }
        onTermsChange(newTerms);
    }

    function handleRemoveTerm(term) {
        const newTerms = terms.filter(t => t.id !== term.id);
        onTermsChange(newTerms);
    }

    function handleAddTerm() {
        const newTerm = { id: Date.now(), startTime: '', endTime: '', requiredPersonnel: '', description: '' };
        onTermsChange([...terms, newTerm]);
    }

    return (
        <div>
            <h4 className="text-xl">Terms</h4>
            {terms.map(term => (
                <Term key={term.id} term={term} onSave={handleSaveTerm} onRemove={handleRemoveTerm} />
            ))}
            <Button onClick={handleAddTerm}>Add Term</Button>
        </div>
    );
}
