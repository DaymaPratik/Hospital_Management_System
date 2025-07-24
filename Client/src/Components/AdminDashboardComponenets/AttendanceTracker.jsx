import React, { useState } from 'react';
import styles from './AttendanceTracker.module.css';

const AttendanceTracker = () => {
    const staffList = [
  {
    fullName: 'Nisha Patil',
    role: 'Nurse',
    phone: '9876543210',
    shift: '8am - 4pm',
    salary: 28000,
  },
  {
    fullName: 'Ravi Shinde',
    role: 'Ward Boy',
    phone: '9123456780',
    shift: '4pm - 12am',
    salary: 18000,
  },
  {
    fullName: 'Sneha More',
    role: 'Receptionist',
    phone: '9988776655',
    shift: '9am - 5pm',
    salary: 25000,
  },
  {
    fullName: 'Komal Deshmukh',
    role: 'Nurse',
    phone: '7890456123',
    shift: '12am - 8am',
    salary: 29000,
  },
  {
    fullName: 'Amit Gaikwad',
    role: 'Ward Boy',
    phone: '7012345678',
    shift: '8am - 4pm',
    salary: 18500,
  },
  {
    fullName: 'Pooja Bhosale',
    role: 'Receptionist',
    phone: '9001122334',
    shift: '10am - 6pm',
    salary: 24000,
  },
  {
    fullName: 'Sandhya Naik',
    role: 'Nurse',
    phone: '8669988776',
    shift: '8am - 4pm',
    salary: 27500,
  },
  {
    fullName: 'Yogesh Pawar',
    role: 'Ward Boy',
    phone: '9345678901',
    shift: '4pm - 12am',
    salary: 19000,
  },
  {
    fullName: 'Rutuja Kulkarni',
    role: 'Receptionist',
    phone: '9876541200',
    shift: '9am - 5pm',
    salary: 26000,
  },
  {
    fullName: 'Kiran Jadhav',
    role: 'Nurse',
    phone: '9988012345',
    shift: '12am - 8am',
    salary: 30000,
  }
];


  const [attendance, setAttendance] = useState(
    staffList.reduce((acc, staff) => {
      acc[staff.fullName] = false;
      return acc;
    }, {})
  );

  const toggleAttendance = (name) => {
    setAttendance((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className={styles.container}>
      <h2>🗓️ Daily Attendance</h2>
      <p>Mark attendance for staff members for the current day.</p>
      <ul className={styles.list}>
        {staffList.map((staff, idx) => (
          <li key={idx} className={styles.listItem}>
            <span>{staff.fullName} ({staff.role})</span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={attendance[staff.fullName]}
                onChange={() => toggleAttendance(staff.fullName)}
              />
              <span className={styles.slider}></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceTracker;

