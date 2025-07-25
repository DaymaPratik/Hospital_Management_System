import React from 'react';
import styles from './StaffList.module.css';
import { useEffect } from 'react';
import axios from 'axios';

const StaffList = ({staff,setStaff}) => {
    useEffect(() => {
       const getStaffMembersFunction = async () => {
         try {
           const { data } = await axios.get(
             "http://localhost:5000/api/admin/getStaffMembers"
           );
           console.log(data);
           setStaff(data.members);
         } catch (error) {
           console.log("Error in frontend gettings the doctors", error);
         }
       };
       getStaffMembersFunction();
     }, []);
     
  return (
    <div className={styles.staffContainer}>
      <h2 className={styles.heading}>🏥 Hospital Staff Overview</h2>
      <p className={styles.subHeading}>Here’s a list of active staff members with their roles and details.</p>
      
      <div className={styles.cardGrid}>
        {staff?.map((staffs, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.avatar}>
              <img src={`https://ui-avatars.com/api/?name=${staffs.fullName}&background=2563eb&color=fff`} alt="avatar" />
            </div>
            <div className={styles.cardContent}>
              <h3>{staffs.fullName}</h3>
              <span className={`${styles.roleTag} ${styles[staffs.role.replace(/\s/g, '')]}`}>{staffs.role}</span>
              <p><strong>Phone:</strong> {staffs.phone}</p>
              <p><strong>Shift:</strong> {staffs.shift}</p>
              <p><strong>Salary:</strong> ₹{staffs.salary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffList;
