import Provider from './pages/Provider.jsx';
import Elements from './pages/Elements.jsx';
import Client from './pages/Client.jsx';
import Event from './pages/Event.jsx';
import { Routes, Route } from 'react-router';
import UserProfileLayout from './layouts/UserProfileLayout.jsx';

function App() {

    return (
        <div className="container mx-auto px-4 lg:px-8">
            <Routes>
                <Route path="elements" element={<Elements />} />
                <Route path="event/:eventId?" element={<Event />} />
                <Route element={<UserProfileLayout />}>
                    <Route index path="provider/:providerId?" element={<Provider />} />
                    <Route path="client/:clientId?" element={<Client />} />
                    <Route path="provider/:providerId?" element={<Provider />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
