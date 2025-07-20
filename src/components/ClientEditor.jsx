import { useState } from 'react';
import Input from '../components/Input.jsx';
import Selectbox from '../components/Selectbox.jsx';
import TextArea from '../components/TextArea';


export default function ClientEditor({ client, onSave }) {

    const [savedClient, setSavedClient] = useState({ ...client });

    return (
        <div className="container mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col">
                <div>
                    <Input value={client.name} labelText="Name" onChange={e => setSavedClient({ ...savedClient, name: e.target.value })} />
                </div>
                <div>
                    <TextArea value={client.description} labelText="Description" onChange={e => setSavedClient({ ...savedClient, description: e.target.value })} />
                </div>
                <div>
                    <Selectbox value={client.sport} onChange={e => console.log(e.target.value)} elements={["one", "two"]} />
                </div>
                <div>
                    <Input labelText="Address" onChange={e => console.log(e.target.value)} />
                </div>
                <div>{client.createdAt}</div>
                <div>{client.updatedAt}</div>
                <button onClick={() => onSave(savedClient)}>Save</button>
            </div>
        </div>
    )
}
