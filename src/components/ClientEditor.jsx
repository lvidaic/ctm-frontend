import { useState } from 'react';
import Input from '../components/Input.jsx';
import Selectbox from '../components/Selectbox.jsx';
import TextArea from '../components/TextArea';
import ImageUpload from './ImageUpload.jsx';
import Autocomplete from './Autocomplete.jsx';
import useSWRMutation from 'swr/mutation';
import { fetchAutocomplete, fetchPlaceDetails } from '../utils/fetchers.js';

export default function ClientEditor({ client, onSave, image }) {

    const [sessionToken, setSessionToken] = useState('');
    const [savedClient, setSavedClient] = useState({ ...client });
    const [autocompleteItems, setAutocompleteItems] = useState([]);

    const { trigger: triggerAutocomplete } = useSWRMutation('http://localhost:8080/api/places/autocomplete', fetchAutocomplete);
    const { trigger: triggerDetails } = useSWRMutation('http://localhost:8080/api/places', fetchPlaceDetails);

    async function onAutocompleteChange(e) {
        const query = e.target.value;
        if (query.length < 5) {
            return;
        }
        let uuid = sessionToken === '' ? crypto.randomUUID() : sessionToken;

        const result = await triggerAutocomplete({ sessionToken: uuid, query: query })
        setSessionToken(result.sessionToken);
        setAutocompleteItems(result.placeItems);

    }

    async function onItemSelect(item) {
        if (item) {
            const result = await triggerDetails({ sessionToken: sessionToken, placeId: item.placeId })
            setSavedClient({ ...savedClient, address: { address: result.formattedAddress, latitude: result.latitude, longitude: result.longitude } })
            setSessionToken('');
        }
    }

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
                    <Input value={savedClient.address ? savedClient.address.address : ''} labelText="Address" onChange={e => { const changedAddr = { ...savedClient.address, address: e.target.value }; setSavedClient({ ...savedClient, address: changedAddr }) }} />
                </div>
                <div>
                    <ImageUpload image={image} />
                </div>
                <div>
                    <Autocomplete onItemSelect={onItemSelect} displayItemFunction={((item) => item.text)} keyFunction={(item) => item.placeId} items={autocompleteItems} onInputChange={onAutocompleteChange} />
                </div>
                <button onClick={() => onSave(savedClient)}>Save</button>
            </div>
        </div>
    )
}
