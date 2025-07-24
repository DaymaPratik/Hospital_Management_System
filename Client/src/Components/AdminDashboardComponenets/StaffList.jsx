import React from 'react';
import styles from './StaffList.module.css';

const StaffList = () => {
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
  return (
    <div className={styles.staffContainer}>
      <h2 className={styles.heading}>🏥 Hospital Staff Overview</h2>
      <p className={styles.subHeading}>Here’s a list of active staff members with their roles and details.</p>
      
      <div className={styles.cardGrid}>
        {staffList.map((staff, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.avatar}>
              <img src={`https://ui-avatars.com/api/?name=${staff.fullName}&background=2563eb&color=fff`} alt="avatar" />
            </div>
            <div className={styles.cardContent}>
              <h3>{staff.fullName}</h3>
              <span className={`${styles.roleTag} ${styles[staff.role.replace(/\s/g, '')]}`}>{staff.role}</span>
              <p><strong>Phone:</strong> {staff.phone}</p>
              <p><strong>Shift:</strong> {staff.shift}</p>
              <p><strong>Salary:</strong> ₹{staff.salary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffList;
