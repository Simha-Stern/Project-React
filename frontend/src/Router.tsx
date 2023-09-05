import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trips from './components/Trips';
import TripsDetail from './components/TripsDetail';
import NewTripForm from './components/NewTripForm';

function Ruoter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Trips" element={<Trips />} />
                    <Route path="/TripsDetail" element={<TripsDetail />} />
                    <Route path="/TripsDetail/:id" element={<TripsDetail />} />
                    <Route path="/NewTripForm" element={<NewTripForm />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Ruoter