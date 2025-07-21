import React, { useContext, useEffect, useState } from 'react'
import { SideBarContext } from '../Context/SideBarContextProvider'
import Sidebar from '../Components/SideBar'
import styles from "./styles/Auth.module.css";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from 'react-icons/fa';
function Auth() {
   const { showSideBar ,handleShowSideBar } = useContext(SideBarContext);
   useEffect(()=>{
     handleShowSideBar();
   },[])
    const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(isLogin ? 'Login Data:' : 'Register Data:', formData);
  };
  return (
    <div>
           {
            showSideBar
            &&
            <Sidebar/>
        }
       {/* Hero Section */}
            <section  className={styles.appointmentContainer}>
               <section className={styles.introContentCover}>
                    
              </section>
            <section className={styles.hero}>
              <div className={styles.heroContent}>
                <h1>Admin Login</h1>
                {/* <p>Schedule a visit with our expert doctors in just a few clicks.</p> */}
              </div>
            </section>
            </section>












 <div className={styles.container}>
  <div className={styles.containerOverlay}></div>
      <div className={styles.card}>
        <div className={styles.toggleTabs}>
          <button
            className={`${styles.toggleButton} ${isLogin ? styles.active : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`${styles.toggleButton} ${!isLogin ? styles.active : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>{isLogin ? 'Patient Login' : 'Patient Registration'}</h2>

          {!isLogin && (
            <div className={styles.inputGroup}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {!isLogin && (
            <div className={styles.inputGroup}>
              <FaPhoneAlt className={styles.icon} />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          )}

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>



            {/* <Login/>
            <Register/> */}
      
      
      </div>
  )
}

export default Auth