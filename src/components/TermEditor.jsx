
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Selectbox from "./Selectbox";
import TextArea from "./TextArea";
import { NumericFormat } from "react-number-format";
import { usePersonnel } from "../stores/personnel-store";

export default function TermEditor({ term, onSave, onClose, onRemove }) {

    const [newTerm, setNewTerm] = useState({ ...term });

    const { personnel, isLoading, isError } = usePersonnel();

    if (isLoading) {
        return <div>Loading data</div>
    }

    if (isError) {
        return <div>Error while loading data</div>
    }

    return (
        <div className="border p-4 my-4 rounded-md border-gray-300">
            <Input labelText="Starts At" inputType="time" value={newTerm.startsAt} onChange={e => setNewTerm({ ...newTerm, startsAt: e.target.value })} />
            <Input labelText="Ends At" inputType="time" value={newTerm.endsAt} onChange={e => setNewTerm({ ...newTerm, endsAt: e.target.value })} />
            <Selectbox
                labelText="Required Personnel"
                elements={personnel}
                value={newTerm.requiredPersonnel}
                onChange={e => setNewTerm({ ...newTerm, requiredPersonnel: e.target.value })}
            />
            <TextArea labelText="Description" value={newTerm.description} onChange={e => setNewTerm({ ...newTerm, description: e.target.value })} />
            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Compensation
                </label>
                <div className="mt-2">

                    <NumericFormat
                        value={newTerm.compensation}
                        onValueChange={e => setNewTerm({ ...newTerm, compensation: e.value })}
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
                <Button onClick={() => onSave(newTerm)}>Add term</Button>
                <Button onClick={onClose}>Close</Button>
            </div>
        </div >
    );
}
