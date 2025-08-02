import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import Selectbox from "./Selectbox";
import ImageUpload from "./ImageUpload";
import Autocomplete from "./Autocomplete.jsx"
import { usePersonnel } from "../stores/personnel-store.js";

export default function ProviderEditor({ image, provider, onSave }) {

    function onFileLoad(file) {
        setSavedImage(file);
    }

    const [savedProvider, setSavedProvider] = useState({ ...provider });
    const [savedImage, setSavedImage] = useState(null);

    const { personnel, isLoading, isError } = usePersonnel();

    if (isError) {
        return <div>Error while loading data</div>
    }

    if (isLoading) {
        return <div>Loading data</div>
    }

    return (
        <>
            <Input labelText="First Name" value={savedProvider.firstName} onChange={(e) => setSavedProvider({ ...savedProvider, firstName: e.target.value })} />
            <Input labelText="Last Name" value={savedProvider.lastName} onChange={(e) => setSavedProvider({ ...savedProvider, lastName: e.target.value })} />
            <TextArea labelText="Description" value={savedProvider.description} onChange={e => setSavedProvider({ ...savedProvider, description: e.target.value })} />
            <Selectbox labelText="Role" value={savedProvider.role} elements={personnel} onChange={e => setSavedProvider({ ...savedProvider, role: e.target.value })} />
            <div>
                <ImageUpload image={image} labelText="Image" onFileLoad={onFileLoad} />
                <Autocomplete textLabel="Address" onAutocompleteSelect={address =>
                    setSavedProvider({ ...savedProvider, address: { address: address.formattedAddress, latitude: address.latitude, longitude: address.longitude } })
                } />
                <p>{savedProvider?.address?.address}</p>
            </div>
            <Button onClick={() => onSave({ savedProvider, savedImage })}>Save</Button>
        </>
    )
}
