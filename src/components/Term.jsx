
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Selectbox from "./Selectbox";
import TextArea from "./TextArea";
import TermItem from "./TermItem";
import { NumericFormat } from "react-number-format";

function Term({ term, onSave, onRemove }) {
    const [savedTerm, setSavedTerm] = useState({ ...term });

    const personnelOptions = [
        "DOCTOR", "NURSE", "TECHNICIAN"
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
            {/* <Input labelText="Compensation per hour" value={savedTerm.compensation} onChange={e => setSavedTerm({ ...savedTerm, compensation: e.target.value })} /> */}
            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Compensation
                </label>
                <div className="mt-2">

                    <NumericFormat
                        value={savedTerm.compensation}
                        onValueChange={e => setSavedTerm({ ...savedTerm, compensation: e.value })}
                        thousandSeparator="."
                        decimalSeparator=","
                        prefix="€ "
                        decimalScale={2}
                        fixedDecimalScale={true}
                        allowNegative={false}
                        placeholder="€ 0,00"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" displayType="input" />
                </div>
            </div>
            <div className="flex mt-2 gap-x-2">
                <Button onClick={() => onSave(savedTerm)}>Save Term</Button>
                <Button onClick={() => onRemove(term)}>Remove Term</Button>
            </div>
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

    {/* <Term key={term.id} term={term} onSave={handleSaveTerm} onRemove={handleRemoveTerm} /> */ }
    return (
        <div>
            <h4 className="text-xl">Terms</h4>

            <ul role="list" className="divide-y divide-gray-100">
                {terms.map((term) => (
                    <TermItem term={term} />
                ))}
            </ul>
            <Button onClick={handleAddTerm}>Add Term</Button>
        </div>
    );
}
