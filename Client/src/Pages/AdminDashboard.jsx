import React, { useContext, useState } from "react";
import styles from "./styles/AdminDashboard.module.css";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddStaffForm from "../Components/AdminDashboardComponenets/AddStaffForm";
import StaffList from "../Components/AdminDashboardComponenets/StaffList";
import AttendanceTracker from "../Components/AdminDashboardComponenets/AttendanceTracker";
import SalaryReport from "../Components/AdminDashboardComponenets/SalaryReport";
import NotificationCenter from "../Components/AdminDashboardComponenets/NotificationCenter";
import DiagnosticsShowcase from "../Components/AdminDashboardComponenets/DiagnosticsShowcase";
import Sidebar from "../Components/SideBar";
import { SideBarContext } from "../Context/SideBarContextProvider";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const { showSideBar } = useContext(SideBarContext);
  const [doctors, setDoctors] = useState([]);
  const [staff,setStaff]=useState([]);

  
  useEffect(() => {
    const getDoctorsFunctions = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/admin/getDoctors"
        );
        console.log(data);
        setDoctors(data.doctors);
      } catch (error) {
        console.log("Error in frontend gettings the doctors", error);
      }
    };
    getDoctorsFunctions();
  }, []);
const addANewDoctorFunction = async (e) => {
    e.preventDefault();
    try {
      // ✅ Send the formData to backend
      const { data } = await axios.post(
        "http://localhost:5000/api/admin/addDoctor",
        formData
      );

      if (data.success) {
        setDoctors((prev) => [...prev, data.doctor]);
        console.log("Doctor added successfully:", data);
        toast.success("Doctor added successfully")
        return;
      }
      console.log(data);
      toast.error(data.message);
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
    } catch (error) {
      console.error("Error adding doctor from frontend:", error);
      toast.error("Error Adding Doctors");
    }
  };


const deleteDoctorFunction = async (id, e) => {
  e.preventDefault();
  try {
    const { data } = await axios.delete(`http://localhost:5000/api/admin/deleteDoctor/${id}`);
    console.log(data);

    if (data.success) {
      const updatedDoctors = doctors.filter((item) => item._id !== id);
      setDoctors(updatedDoctors);
      toast.success("Doctor deleted successfully");
    } else {
      toast.error(data.message || "Failed to delete doctor");
    }
  } catch (error) {
    console.log("Error in frontend deleting doctors", error);
    toast.error("Error deleting doctor");
  }
};


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
    photo: "https://randomuser.me/api/portraits/men/31.jpg",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          <form className={styles.doctorForm} onSubmit={addANewDoctorFunction}>
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
              <div className={styles.deleteBtn} 
              onClick={(e) => deleteDoctorFunction(doc._id, e)}
              >
                <RiDeleteBin6Fill />
              </div>
              <div className={styles.imageWrapper}>
                <img
                  src="https://randomuser.me/api/portraits/men/31.jpg"
                  alt={doc.fullName}
                  className={styles.photo}
                />
              </div>
              <div className={styles.info}>
                <h3>Dr. {doc.fullName}</h3>
                <p>
                  <strong>Department:</strong> {doc.department}
                </p>
                <p>
                  <strong>Experience:</strong> {doc.experience} years
                </p>
                <p>
                  <strong>Specialization:</strong> {doc.specialization}
                </p>
                <p>
                  <strong>Qualification:</strong> {doc.qualification}
                </p>
                <p>
                  <strong>Time:</strong> {doc.availableTime}
                </p>
                <p>
                  <strong>Email:</strong> {doc.email}
                </p>
                <p>
                  <strong>Phone:</strong> {doc.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AddStaffForm staff={staff} setStaff={setStaff} />
      <StaffList staff={staff} setStaff={setStaff}/>
      <AttendanceTracker />
      <SalaryReport />
      <NotificationCenter />
      <DiagnosticsShowcase />
    </div>
  );
};

export default AdminDashboard;
