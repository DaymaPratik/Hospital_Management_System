import React, { useContext, useState } from "react";
import styles from "./styles/AdminDashboard.module.css";
import AddStaffForm from "../Components/AdminDashboardComponenets/AddStaffForm";
import StaffList from "../Components/AdminDashboardComponenets/StaffList";
import AttendanceTracker from "../Components/AdminDashboardComponenets/AttendanceTracker";
import SalaryReport from "../Components/AdminDashboardComponenets/SalaryReport";
import NotificationCenter from "../Components/AdminDashboardComponenets/NotificationCenter";
import DiagnosticsShowcase from "../Components/AdminDashboardComponenets/DiagnosticsShowcase";
import { ToastContainer } from "react-toastify";
import Sidebar from "../Components/SideBar";
import { SideBarContext } from "../Context/SideBarContextProvider";

const AdminDashboard = () => {
  const {showSideBar}=useContext(SideBarContext)
  const [doctors, setDoctors] = useState([
  {
    fullName: "Dr. Arjun Mehta",
    email: "arjun.mehta@hospital.com",
    phone: "9876543210",
    experience: 12,
    department: "Cardiology",
    qualification: "MBBS, MD (Cardio)",
    specialization: "Heart Surgeon",
    availableTime: "9am - 1pm",
    gender: "Male",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    fullName: "Dr. Sneha Kapoor",
    email: "sneha.kapoor@hospital.com",
    phone: "9823456781",
    experience: 8,
    department: "Gynecology",
    qualification: "MBBS, DGO",
    specialization: "Women Health",
    availableTime: "10am - 4pm",
    gender: "Female",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    fullName: "Dr. Ramesh Nair",
    email: "ramesh.nair@hospital.com",
    phone: "9765432180",
    experience: 15,
    department: "Orthopedics",
    qualification: "MBBS, MS",
    specialization: "Bone & Joint Specialist",
    availableTime: "11am - 3pm",
    gender: "Male",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    fullName: "Dr. Kavita Joshi",
    email: "kavita.joshi@hospital.com",
    phone: "9845671230",
    experience: 10,
    department: "Dermatology",
    qualification: "MBBS, MD (Skin)",
    specialization: "Skin Specialist",
    availableTime: "2pm - 6pm",
    gender: "Female",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    fullName: "Dr. Imran Sheikh",
    email: "imran.sheikh@hospital.com",
    phone: "9890123456",
    experience: 7,
    department: "ENT",
    qualification: "MBBS, MS (ENT)",
    specialization: "Ear, Nose, Throat",
    availableTime: "8am - 12pm",
    gender: "Male",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    fullName: "Dr. Anjali Sharma",
    email: "anjali.sharma@hospital.com",
    phone: "9887788990",
    experience: 6,
    department: "Pediatrics",
    qualification: "MBBS, DCH",
    specialization: "Child Specialist",
    availableTime: "9am - 2pm",
    gender: "Female",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    fullName: "Dr. Rajeev Khanna",
    email: "rajeev.khanna@hospital.com",
    phone: "9778899001",
    experience: 9,
    department: "Neurology",
    qualification: "MBBS, DM (Neuro)",
    specialization: "Brain & Spine",
    availableTime: "10am - 3pm",
    gender: "Male",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    fullName: "Dr. Neha Desai",
    email: "neha.desai@hospital.com",
    phone: "9768123490",
    experience: 5,
    department: "Psychiatry",
    qualification: "MBBS, MD (Psych)",
    specialization: "Mental Health",
    availableTime: "1pm - 5pm",
    gender: "Female",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    fullName: "Dr. Manish Patel",
    email: "manish.patel@hospital.com",
    phone: "9871234560",
    experience: 11,
    department: "General Medicine",
    qualification: "MBBS, MD",
    specialization: "General Physician",
    availableTime: "8am - 12pm",
    gender: "Male",
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  },
]);
//   const dummyDoctors = ;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    department: "",
    qualification: "",
    specialization: "",
    availableTime: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDoctors([...doctors, formData]);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      department: "",
      qualification: "",
      specialization: "",
      availableTime: "",
      gender: "",
    });
  };

  return (
    <div className={styles.dashboardContainer}>
      <ToastContainer position="top-center" autoClose={3000} />
       {showSideBar && <Sidebar />}
      <section className={styles.introContentCover}></section>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>👨‍⚕️ Welcome, Hospital Admin!</h1>
          <p className={styles.subtext}>
            Take control of your hospital's operations — add doctors, manage
            departments, track appointments, and deliver better care
            efficiently.
          </p>
        </div>
      </section>
      <h1 className={styles.title}>🏥 Admin Dashboard - Hospital Management</h1>

      {/* STATISTIC STATUS */}
      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <h2>Total Doctors</h2>
          <p>{doctors.length}</p>
        </div>
        <div className={styles.statCard}>
          <h2>Patients</h2>
          <p>32</p>
        </div>
        <div className={styles.statCard}>
          <h2>Appointments</h2>
          <p>15</p>
        </div>
      </div>


     {/* ADD DOCTOR FORM SECTION */}
     <section className={styles.formContainer}>
        <h1 className={styles.addDoctorTittle}>Add A Doctor To Service</h1>
         <div className={styles.formSection}>
        <h2>Add New Doctor</h2>
        <form className={styles.doctorForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="number"
            name="experience"
            placeholder="Experience (Years)"
            required
            value={formData.experience}
            onChange={handleChange}
          />
          <input
            type="text"
            name="department"
            placeholder="Department (e.g. Cardiology)"
            required
            value={formData.department}
            onChange={handleChange}
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification (e.g. MBBS, MD)"
            required
            value={formData.qualification}
            onChange={handleChange}
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization (e.g. Heart Surgeon)"
            required
            value={formData.specialization}
            onChange={handleChange}
          />
          <input
            type="text"
            name="availableTime"
            placeholder="Available Time (e.g. 9am - 2pm)"
            required
            value={formData.availableTime}
            onChange={handleChange}
          />
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit">Add Doctor</button>
        </form>
      </div>

     </section>



    {/* DOCTORS LIST SECTION */}
     <section>
        <h1 className={styles.doctorsTittle}>Our Doctors</h1>
        <div className={styles.grid}>
      {doctors.map((doc, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={doc.photo} alt={doc.fullName} className={styles.photo} />
          </div>
          <div className={styles.info}>
            <h3>Dr. {doc.fullName}</h3>
            <p><strong>Department:</strong> {doc.department}</p>
            <p><strong>Experience:</strong> {doc.experience} years</p>
            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <p><strong>Qualification:</strong> {doc.qualification}</p>
            <p><strong>Time:</strong> {doc.availableTime}</p>
            <p><strong>Email:</strong> {doc.email}</p>
            <p><strong>Phone:</strong> {doc.phone}</p>
          </div>
        </div>
      ))}
    </div>
     </section>






    <AddStaffForm/>
    <StaffList/>
    <AttendanceTracker/>
    <SalaryReport/>
    <NotificationCenter/>
    <DiagnosticsShowcase/>
     
    </div>
  );
};

export default AdminDashboard;
