import Provider from './pages/Provider.jsx'
import { Routes, Route } from 'react-router';

function App() {

    return (
        <div>
            <h2>Call The Medic</h2>
            <Routes>
                <Route path="provider" element={<Provider />} />
            </Routes>
        </div>
    )
}

export default App
