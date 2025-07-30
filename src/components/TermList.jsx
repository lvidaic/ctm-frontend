import Button from "./Button";
import TermEditor from "./TermEditor";
import TermItem from "./TermItem";
import { useState } from "react";


export default function TermList({ terms, onTermsChange }) {


    const [isEditMode, setIsEditMode] = useState(false);

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
        setIsEditMode(true);
    }

    return (
        <div>
            <h4 className="text-xl mb-3">Terms</h4>
            <Button className="w-24" onClick={handleAddTerm}>Add Term</Button>
            {isEditMode && <TermEditor />}
            <ul role="list" className="divide-y divide-gray-100">
                {terms.map((term) => (
                    <TermItem term={term} onRemoveTerm={handleRemoveTerm} />
                ))}
            </ul>
        </div>
    );
}
