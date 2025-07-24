import { NavLink } from "react-router-dom";
import {
  FaUserMd,
  FaHospitalAlt,
  FaPhoneAlt,
  FaSignInAlt,
  FaHome,
  FaInfoCircle,
  FaUsers,
} from "react-icons/fa";
import styles from "./styles/Navbar.module.css";
import { BiSolidFoodMenu } from "react-icons/bi";
import { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
import { FaRegWindowClose } from "react-icons/fa";
import { AdminContext } from "../Context/AdminContextProvider";
import { IoLogOut } from "react-icons/io5";
export default function Navbar() {
  const { showSideBar, handleShowSideBar } = useContext(SideBarContext);
  const { user, handleLogout } = useContext(AdminContext);

 
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>
        <FaHospitalAlt /> Jalna Critical
      </h2>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" activeclassname={styles.active}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname={styles.active}>
            <FaInfoCircle /> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/departments" activeclassname={styles.active}>
            <FaUsers /> Department
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" activeclassname={styles.active}>
            <FaUserMd /> Doctors
          </NavLink>
        </li>
        {user?.name ? (
          <li>
            <NavLink
              to="/login"
              activeclassname={styles.active}
              onClick={handleLogout}
            >
              <IoLogOut />
              Logout
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/contact" activeclassname={styles.active}>
                <FaPhoneAlt /> Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/appointment" activeclassname={styles.active}>
                <FaSignInAlt /> Appointment
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeclassname={styles.active}>
                <FaSignInAlt /> Login/Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <div className={styles.navMenu} onClick={handleShowSideBar}>
        {showSideBar ? (
          <FaRegWindowClose className="text-[30px] cursor-pointer" />
        ) : (
          <BiSolidFoodMenu className="text-[30px] cursor-pointer" />
        )}
      </div>
    </nav>
  );
}
