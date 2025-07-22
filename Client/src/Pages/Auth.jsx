import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Components/SideBar";
import { SideBarContext } from "../Context/SideBarContextProvider";
import styles from "./styles/Auth.module.css";

function Auth() {
  const { showSideBar, handleShowSideBar } = useContext(SideBarContext);

  useEffect(() => {
    handleShowSideBar();
  }, []);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/signup";

    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // localStorage.setItem("jwtToken", data.token);
        toast.success(
          isLogin ? "Login successful!" : "Registered successfully!"
        );

        isLogin &&
          setTimeout(() => {
            navigate("/");
          }, 1000);

        setFormData({
          name: "",
          email: "",
          password: "",
          phonenumber: "",
        });
      } else {
        toast.error(
          data.message || (isLogin ? "Login failed." : "Registration failed.")
        );
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {showSideBar && <Sidebar />}

      <section className={styles.appointmentContainer}>
        <section className={styles.introContentCover}></section>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>{isLogin ? "Admin Login" : "Admin Register"}</h1>
          </div>
        </section>
      </section>

      <div className={styles.container}>
        <div className={styles.containerOverlay}></div>
        <div className={styles.card}>
          <div className={styles.toggleTabs}>
            <button
              className={`${styles.toggleButton} ${
                isLogin ? styles.active : ""
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`${styles.toggleButton} ${
                !isLogin ? styles.active : ""
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.title}>
              {isLogin ? "Patient Login" : "Patient Registration"}
            </h2>

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
                  name="phonenumber"
                  placeholder="Phone Number"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  value={formData.phonenumber}
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

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading
                ? isLogin
                  ? "Logging in..."
                  : "Registering..."
                : isLogin
                ? "Login"
                : "Register"}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Auth;
