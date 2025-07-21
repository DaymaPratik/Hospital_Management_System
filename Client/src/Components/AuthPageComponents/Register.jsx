import React, { useState } from 'react';
import styles from './Register.module.css';
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from 'react-icons/fa';

const Register = () => {
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
    console.log('Register Data:', formData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Patient Registration</h2>

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

        <button className={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
