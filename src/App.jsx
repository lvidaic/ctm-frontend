import Provider from './pages/Provider.jsx';
import Elements from './pages/Elements.jsx';
import Client from './pages/Client.jsx';
import { Routes, Route } from 'react-router';

function App() {

    return (
        <div>
            <Routes>
                <Route index path="provider" element={<Provider />} />
                <Route path="elements" element={<Elements />} />
                <Route path="client/:clientId?" element={<Client />} />
            </Routes>
        </div>
    )
}

export default App
