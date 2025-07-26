import Button from "./Button";

export default function ProviderEditor({ image, provider, onSave }) {

    return (
        <>
            <h1>Provider Editor</h1>
            <div>
                <Button onClick={onSave}>Save</Button >
            </div>
        </>)
}
