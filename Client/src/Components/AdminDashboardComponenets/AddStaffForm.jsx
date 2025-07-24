import React, { useState } from 'react';
import styles from './AddStaffForm.module.css';

const AddStaffForm = ({ onAddStaff }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    phone: '',
    shift: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.role && formData.phone) {
      onAddStaff(formData);
      setFormData({ fullName: '', role: '', phone: '', shift: '', salary: '' });
    } else {
      alert('Please fill all required fields.');
    }
  };

  return (
   <main className={styles.addStaffFormSection}>
    <h1 className={styles.addStaffTitle}>Add a Staff member for your hospital</h1>
     <div className={styles.container}>
      <h2>➕ Add New Staff</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label>Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder="e.g., Sneha Patil"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label>Role*</label>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="Nurse">Nurse</option>
            <option value="Ward Boy">Ward Boy</option>
            <option value="Receptionist">Receptionist</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Phone*</label>
          <input
            type="tel"
            name="phone"
            placeholder="10-digit phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label>Shift Timing</label>
          <input
            type="text"
            name="shift"
            placeholder="e.g., 8am - 4pm"
            value={formData.shift}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label>Salary (INR)</label>
          <input
            type="number"
            name="salary"
            placeholder="e.g., 25000"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.btn}>Add Staff</button>
      </form>
    </div>
   </main>
  );
};

export default AddStaffForm;
