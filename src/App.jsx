import Provider from './pages/Provider.jsx';
import Elements from './pages/Elements.jsx';
import Client from './pages/Client.jsx';
import Event from './pages/Event.jsx';
import Home from './pages/Home.jsx';
import { Routes, Route, useNavigate } from 'react-router';
import UserProfileLayout from './layouts/UserProfileLayout.jsx';
import { HomeIcon, UserIcon, CalendarIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router';
import { useCurrentClient } from './stores/user-store.js';

function App() {

    const { client, isLoading, isError } = useCurrentClient();
    const navigate = useNavigate();

    if (isLoading) {
        return (<div>Loading data</div>)
    }

    if (isError) {
        return (<div>Error loading data</div>)
    }

    return (
        <div className="container mx-auto px-4 lg:px-8">
            <nav className='flex flex-row justify-between gap-x-3 mt-3'>
                <div className='rounded-lg border-gray-300 border-2 py-2 px-3'>
                    <NavLink onClick={() => navigate(-1)}><ArrowUturnLeftIcon className='text-gray-900 size-8' /></NavLink>
                </div>
                <div className='flex flex-row gap-x-3'>
                    <NavLink to="/" className='rounded-lg border-2 border-gray-300 py-2 px-3'><HomeIcon className='text-gray-900 size-8' /></NavLink>
                    <NavLink to={"/client/" + client.id} className='rounded-lg border-2 border-gray-300 py-2 px-3'><UserIcon className='text-gray-900 size-8' /></NavLink>
                    <NavLink to="/event" className='rounded-lg border-2  border-gray-300 py-2 px-3'><CalendarIcon className='text-gray-900 size-8' /></NavLink>
                </div>
            </nav >
            <Routes>
                <Route index element={<Home />} />
                <Route path="elements" element={<Elements />} />
                <Route path="event/:eventId?" element={<Event />} />
                <Route element={<UserProfileLayout />}>
                    <Route path="client/:clientId?" element={<Client />} />
                    <Route path="provider/:providerId?" element={<Provider />} />
                </Route>
            </Routes>
        </div >
    )
}

export default App
