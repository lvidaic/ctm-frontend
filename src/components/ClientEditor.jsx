import { useState } from 'react';
import Input from '../components/Input.jsx';
import Selectbox from '../components/Selectbox.jsx';
import TextArea from '../components/TextArea';
import ImageUpload from './ImageUpload.jsx';
import Autocomplete from './Autocomplete.jsx';
import Button from './Button.jsx';

export default function ClientEditor({ client, image, sports, onSave }) {

    const [savedClient, setSavedClient] = useState({ ...client });
    const [savedImage, setSavedImage] = useState(null);

    function onFileLoad(file) {
        setSavedImage(file);
    }

    return (
        <div className="flex flex-col">
            <div>
                <Input value={savedClient.name} labelText="Name" onChange={e => setSavedClient({ ...savedClient, name: e.target.value })} />
            </div>
            <div>
                <TextArea value={savedClient.description} labelText="Description" onChange={e => setSavedClient({ ...savedClient, description: e.target.value })} />
            </div>
            <div>
                <Selectbox value={savedClient.sport} textLabel="Sport" onChange={e => setSavedClient({ ...savedClient, sport: e.target.value })} elements={sports} />
            </div>
            <div>
                <Input value={savedClient.address ? savedClient.address.address : ''} labelText="Address" onChange={e => { const changedAddr = { ...savedClient.address, address: e.target.value }; setSavedClient({ ...savedClient, address: changedAddr }) }} />
            </div>
            <div>
                <ImageUpload image={image} labelText="Image" onFileLoad={onFileLoad} />
            </div>
            <div>

                <Autocomplete onAutocompleteSelect={address =>
                    setSavedClient({ ...savedClient, address: { address: address.formattedAddress, latitude: address.latitude, longitude: address.longitude } })
                } />
            </div>
            <Button onClick={() => onSave({ savedClient, savedImage })}>Save</Button>
        </div>
    )
}
