import { useState } from 'react';
import Input from '../components/Input.jsx';
import Selectbox from '../components/Selectbox.jsx';
import TextArea from '../components/TextArea';
import ImageUpload from './ImageUpload.jsx';
import Autocomplete from './Autocomplete.jsx';

export default function ClientEditor({ client, onSave }) {

    const [savedClient, setSavedClient] = useState({ ...client });

    return (
        <div className="container mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col">
                <div>
                    <Input value={savedClient.name} labelText="Name" onChange={e => setSavedClient({ ...savedClient, name: e.target.value })} />
                </div>
                <div>
                    <TextArea value={savedClient.description} labelText="Description" onChange={e => setSavedClient({ ...savedClient, description: e.target.value })} />
                </div>
                <div>
                    <Selectbox value={savedClient.sport} onChange={e => setSavedClient({ ...savedClient, sport: e.target.value })} elements={["One", "Two"]} />
                </div>
                <div>
                    <Input value={savedClient?.address?.address} labelText="Address" onChange={e => { const changedAddr = { ...savedClient.address, address: e.target.value }; setSavedClient({ ...savedClient, address: changedAddr }) }} />
                </div>
                <div>
                    <ImageUpload />
                </div>
                <div>
                    {/* <Autocomplete /> */}
                </div>
                {/* <div>{savedClient.createdAt}</div> */}
                {/* <div>{savedClient.updatedAt}</div> */}
                <button onClick={() => onSave(savedClient)}>Save</button>
            </div>
        </div>
    )
}
