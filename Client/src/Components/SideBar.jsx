import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaStethoscope,
  FaUserMd,
  FaEnvelope,
  FaSignInAlt,
} from "react-icons/fa";

import styles from "./styles/SideBar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
          <FaHome /> Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>
          <FaInfoCircle /> About
        </NavLink>
        <NavLink to="/departments" className={({ isActive }) => isActive ? styles.active : ""}>
          <FaStethoscope /> Departments
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => isActive ? styles.active : ""}>
          <FaUserMd /> Doctors
        </NavLink>
         <NavLink to="/appointment" className={({ isActive }) => isActive ? styles.active : ""}>
          <FaUserMd /> Appointment
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>
          <FaEnvelope /> Contact
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ""}>
          <FaSignInAlt /> Login / Signup
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
