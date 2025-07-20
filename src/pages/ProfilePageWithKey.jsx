
import useSWR from 'swr';
import ProfileEditor from '../components/ProfileEditor';

// --- SWR Fetcher Function ---
const fetcher = async (url) => {
  await new Promise(res => setTimeout(res, 500));
  if (url === '/api/user') {
    return {
      id: '123',
      name: 'Alex Ray',
      email: 'alex.ray@example.com',
    };
  }
  const error = new Error('User not found.');
  error.status = 404;
  throw error;
};

// --- The Main Page Component (Container) ---
function ProfilePageWithKey() {
  const { data: user, error, isLoading, mutate } = useSWR('/api/user', fetcher);

  const handleSave = async (updatedData) => {
    console.log('Submitting to server:', updatedData);
    await new Promise(res => setTimeout(res, 750));
    
    // Optimistic update
    mutate({ ...user, ...updatedData }, { revalidate: false });
    alert('Profile updated successfully!');
  };

  // --- RENDER LOGIC ---
  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>Error: Failed to load user profile. ({error.message})</div>;
  }

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Edit Your Profile (No-Effect Pattern)</h2>
      {/* 
        The magic is here!
        - We only render ProfileEditor when we have a `user` object.
        - We pass `user.id` as the `key`. If the user ID were to ever change,
          React would destroy the old ProfileEditor and create a brand new one,
          which would re-initialize its state with the new `initialData`.
      */}
      {user && (
        <ProfileEditor
          key={user.id} 
          initialData={user}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default ProfilePageWithKey;
