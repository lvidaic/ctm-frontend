import AutocompleteInput from './AutocompleteInput.jsx';

import useSWRMutation from 'swr/mutation';
import { fetchAutocomplete, fetchPlaceDetails } from '../utils/fetchers.js';
import { useState } from 'react';

export default function Autocomplete({ selectedLabel, onAutocompleteSelect, textLabel }) {


    const [autocompleteItems, setAutocompleteItems] = useState([]);

    const [sessionToken, setSessionToken] = useState('');
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
            setSessionToken('');
            onAutocompleteSelect(result);
        }
    }

    return (
        <div>
            <h3>{textLabel}</h3>
            <AutocompleteInput items={autocompleteItems} selectedLabel={selectedLabel} onInputChange={onAutocompleteChange} onItemSelect={onItemSelect} />
        </div>

    )
}
