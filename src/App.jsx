import Provider from './pages/Provider.jsx';
import Elements from './pages/Elements.jsx';
import Client from './pages/Client.jsx';
import Event from './pages/Event.jsx';
import Home from './pages/Home.jsx';
import { Routes, Route, NavLink } from 'react-router';
import UserProfileLayout from './layouts/UserProfileLayout.jsx';
import EventList from './components/EventList.jsx';

import Login from './pages/Login.jsx';
import StandardLayout from './layouts/StandardLayout.jsx';

export default function App() {

    return (
        <Routes>
            <Route element={<StandardLayout />}>
                <Route index element={<Home />} />
                <Route path="elements" element={<Elements />} />
                <Route path="event/:eventId?" element={<Event />} />
                <Route path="events" element={<EventList />} />
                <Route element={<UserProfileLayout />}>
                    <Route path="client/:clientId?" element={<Client />} />
                    <Route path="provider/:providerId?" element={<Provider />} />
                </Route>
            </Route>

            <Route path="login" element={<Login />} />
        </Routes>

    )
}
