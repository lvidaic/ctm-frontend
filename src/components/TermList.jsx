import Button from "./Button";
import TermEditor from "./TermEditor";
import TermItem from "./TermItem";
import { useState } from "react";


export default function TermList({ terms, onTermsChange }) {


    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedTerm, setSelectedTerm] = useState(null);

    function handleSaveTerm(term) {
        term.id = crypto.randomUUID();
        const newTerms = [...terms];
        newTerms.push(term);
        onTermsChange(newTerms);
        toggleEditor()
    }

    function handleRemoveTerm(term) {
        const newTerms = terms.filter(t => t.id !== term.id);
        onTermsChange(newTerms);
    }

    function toggleEditor() {
        setIsEditMode(!isEditMode);
    }

    return (
        <div>
            <h4 className="text-xl mb-3">Terms</h4>
            <Button className="w-24" onClick={toggleEditor}>{isEditMode ? 'Close' : 'Add'}</Button>
            {isEditMode && <TermEditor term={selectedTerm} onSave={handleSaveTerm} onClose={toggleEditor} />}
            <ul role="list" className="divide-y divide-gray-100">
                {terms.map((term) => (
                    <TermItem key={term.id} term={term} onRemoveTerm={handleRemoveTerm} />
                ))}
            </ul>
        </div>
    );
}
