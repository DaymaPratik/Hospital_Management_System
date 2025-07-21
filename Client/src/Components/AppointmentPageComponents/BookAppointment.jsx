import React, { useContext, useEffect, useState } from 'react';
import styles from './BookAppointment.module.css';
import { SideBarContext } from '../../Context/SideBarContextProvider';
import Sidebar from '../SideBar';

const BookAppointment = () => {
    const { showSideBar ,handleShowSideBar } = useContext(SideBarContext);
    useEffect(()=>{
      handleShowSideBar();
    },[])
  const [formData, setFormData] = useState({
    patientName: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Booked:', formData);
    alert("Appointment booked successfully!");
    // Add form submission logic here (e.g., API call)
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
          <h1>Book Your Appointment</h1>
          <p>Schedule a visit with our expert doctors in just a few clicks.</p>
        </div>
      </section>
      </section>

      {/* Form Section */}
      <section className={styles.formMainBox}>
        <section className={styles.formImgBox}>
            <img src="https://images.unsplash.com/vector-1750437268137-03a14b2f95ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </section>
          <section className={styles.formSection}>
        <h2>Appointment Form</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formFlexBox}>
            <div className={styles.formGroup}>
            <label>Department</label>
            <select name="department" value={formData.department} onChange={handleChange} required>
              <option value="" className={styles.formOption}>Select Department</option>
              <option value="Cardiology" className={styles.formOption}>Cardiology</option>
              <option value="Neurology" className={styles.formOption}>Neurology</option>
              <option value="Orthopedics" className={styles.formOption}>Orthopedics</option>
              <option value="Dermatology" className={styles.formOption}>Dermatology</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Doctor</label>
            <select name="doctor" value={formData.doctor} onChange={handleChange} required>
              <option value="" className={styles.formOption}>Select Doctor</option>
              <option value="Dr. Smith" className={styles.formOption}>Dr. Smith</option>
              <option value="Dr. Mehta" className={styles.formOption}>Dr. Mehta</option>
              <option value="Dr. Rao" className={styles.formOption}>Dr. Rao</option>
              <option value="Dr. Kapoor" className={styles.formOption}>Dr. Kapoor</option>
            </select>
          </div>
          </div>

          <div className={styles.formFlexBox}>
            <div className={styles.formGroup}>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Symptoms or comments..."
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Book Appointment
          </button>
        </form>
      </section>
      </section>
    
    </div>
  );
};

export default BookAppointment;
