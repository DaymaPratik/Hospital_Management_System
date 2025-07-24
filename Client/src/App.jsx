import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Department from './Pages/Department';
import Doctors from './Pages/Doctors';
import Contact from './Pages/Contact';
import Auth from './Pages/Auth';
import SideBarContextProvider from './Context/SideBarContextProvider';
import BookAppointment from './Components/AppointmentPageComponents/BookAppointment';
import AdminDashboard from './Pages/AdminDashboard';
import Footer from './Components/Footer';
import AdminContextProvider from './Context/AdminContextProvider';
// import BookAppointment from '../Components/AppointmentPageComponents/BookAppointment'

export default function App() {
  return (
    <BrowserRouter>
     <SideBarContextProvider>
       <AdminContextProvider>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path='/appointment' element={<BookAppointment/>}/>
        <Route path='/dashboard' element={<AdminDashboard/>}/>
      </Routes>
      <Footer/>
       </AdminContextProvider>
     </SideBarContextProvider>
    </BrowserRouter>
  );
}
