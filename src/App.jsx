import Provider from './pages/Provider.jsx';
import Elements from './pages/Elements.jsx';
import Client from './pages/Client.jsx';
import { Routes, Route } from 'react-router';

function App() {

    return (
        <div>
            <Routes>
                <Route path="elements" element={<Elements />} />
                <Route index path="provider" element={<Provider />} />
                <Route path="client" element={<Client />} />
            </Routes>
        </div>
    )
}

export default App
