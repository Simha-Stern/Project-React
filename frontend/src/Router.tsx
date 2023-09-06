import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trips from './components/Trips';
import TripsDetail from './components/TripsDetail';
import NewTripForm from './components/NewTripForm';
import UpdateTripForm from './components/UpdateTripForm';
import DeleteTrip from './components/DeleteTrip';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import Registered from './components/registered';


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
                    <Route path="/DeleteTrip/:id" element={<DeleteTrip />} />
                    <Route path="/UpdateTripForm/:id" element={<UpdateTripForm />} />
                    <Route path="/UserRegistration" element={<UserRegistration/>} />
                    <Route path="/UserLogin" element={<UserLogin/>} />
                    <Route path="/Registered" element={<Registered/>} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Ruoter