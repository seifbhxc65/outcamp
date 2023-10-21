import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from "./Loading/Loading"
import Signup from './Pages/Signup';
import VerifyEmail from './auxPages/VerifyEmail';
import UserEdit from './Pages/UserEdit';
import SignupRole from './Pages/SignupRole'
import CreateEvent from './Pages/CreateEvent';
import ResetPassword from './auxPages/ResetPassword'
import NotFound from './auxPages/NotFound'
import Login from './Pages/Login'
import OrganizerDash from './Pages/OrganizerDash'
import ParticipantDash from './Pages/ParticipantDash'
import ParticipationForm from './Pages/ParticipationForm'
import LearnMorePage from './Pages/LearnMore'
import ManageEvents from './Pages/ManageEvents'

/*import Login from './Pages/Login'
import Login from './Pages/Login'*/
import Dashboard from './AdminInterface/Dashboard';
import Users from './AdminInterface/Organizers';

const UserDashboard = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./user/UserDashboard')), 1000)));



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div><Loading /></div>}>
          <Routes>
        
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/VerifyEmail" element={<VerifyEmail />} />
            <Route path="/SignupRole" element={<SignupRole />} />
            <Route path="/UserEdit" element={<UserEdit />} />
            <Route path="/UserDashboard" element={<UserDashboard />} />
            <Route path="/CreateEvent" element={<CreateEvent />} />
            <Route path="/" element={<UserDashboard />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Admin/Dashboard" element={<Dashboard />} />
            <Route path="/Admin/Organizers" element={<Users />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/OrganizerDash" element={<OrganizerDash />} />
            <Route path="/ParticipantDash" element={<ParticipantDash />} />
            <Route path="/ParticipationForm" element={<ParticipationForm />} />
            <Route path="/LearnMore" element={<LearnMorePage />} />
            <Route path="/ManageEvents" element={<ManageEvents />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;