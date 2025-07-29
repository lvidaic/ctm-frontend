export default function TermItem({ terms, onTermsChange }) {


    return (
        <ul role="list" className="space-y-3">
            {terms.map((term) => (
                <li key={term.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
                    <h1>{term.description}</h1>
                    <p>{term.startTime}</p>
                    <p>{term.endTime}</p>
                    <p>{term.requiredPersonel}</p>
                    <p>{term.compensation}</p>
                </li>
            ))}
        </ul>
    )
}

