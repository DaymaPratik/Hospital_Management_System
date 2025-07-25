import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaStethoscope,
  FaUserMd,
  FaEnvelope,
  FaSignInAlt,
} from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import styles from "./styles/SideBar.module.css";
import { AdminContext } from "../Context/AdminContextProvider";
import { useContext } from "react";

const Sidebar = () => {
  const { user, handleLogout } = useContext(AdminContext);
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaInfoCircle /> About
        </NavLink>
        <NavLink
          to="/departments"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaStethoscope /> Departments
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FaUserMd /> Doctors
        </NavLink>
        {user.name ? (
          <>
            <NavLink
              to="/login"
              activeclassname={styles.active}
              onClick={handleLogout}
            >
              <IoLogOut />
              Logout
            </NavLink>
            <NavLink to="/dashboard" activeclassname={styles.active}>
              <IoLogOut />
              Dashboard
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/appointment"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaUserMd /> Appointment
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaEnvelope /> Contact
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <FaSignInAlt /> Login / Signup
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
