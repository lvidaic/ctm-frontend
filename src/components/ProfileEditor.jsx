
import { useState } from 'react';
import Input from './Input';

// The "Dumb" Editor Component
// Its only job is to render the UI based on props.
function ProfileEditor({ initialData, onSave }) {
  // This state is initialized ONCE when this component is first mounted.
  // The `key` prop on the parent will control when it re-mounts.
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveClick = async () => {
    setIsSaving(true);
    // Call the save function passed down from the parent.
    await onSave({ name, email });
    setIsSaving(false);
  };

  return (
    // Using a div instead of a <form> element
    <div>
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button 
        onClick={handleSaveClick} 
        disabled={isSaving}
        style={{ marginTop: '1rem', width: '100%', padding: '0.75rem' }}
      >
        {isSaving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );
}

export default ProfileEditor;
