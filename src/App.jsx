import Provider from './pages/Provider.jsx';
import Elements from './pages/Elements.jsx';
import Client from './pages/Client.jsx';
import { Routes, Route } from 'react-router';

function App() {

    return (

        <div className="container mx-auto px-4 lg:px-8">
            <Routes>
                <Route index path="provider/:providerId?" element={<Provider />} />
                <Route path="elements" element={<Elements />} />
                <Route path="client/:clientId?" element={<Client />} />
                <Route path="provider/:providerId?" element={<Provider />} />
            </Routes>
        </div>
    )
}

export default App
