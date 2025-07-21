import React, { useContext } from 'react'
import { SideBarContext } from '../Context/SideBarContextProvider'
import Sidebar from '../Components/SideBar'
import styles from "./styles/Doctors.module.css";
import { FaEnvelope } from "react-icons/fa";
import DoctorsMotivation from '../Components/DoctorsPageComponents/DoctorsMotivation';

function Doctors() {
  const {showSideBar}=useContext(SideBarContext)
 const doctors = [
  {
    id: 1,
    name: "Dr. Aarav Mehta",
    specialization: "Cardiologist",
    department: "Cardiology",
    experience: "15+ years",
    availableDays: "Mon - Fri",
    availableTime: "10:00 AM - 2:00 PM",
    email: "aarav.mehta@careplushospital.com",
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Renowned for his precision and patient care, Dr. Mehta brings over 15 years of cardiology excellence."
  },
  {
    id: 2,
    name: "Dr. Nisha Rane",
    specialization: "Gynecologist",
    department: "Gynecology",
    experience: "12+ years",
    availableDays: "Tue - Sat",
    availableTime: "11:00 AM - 4:00 PM",
    email: "nisha.rane@careplushospital.com",
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Expert in women's health, Dr. Rane provides compassionate and advanced care for every stage of life."
  },
  {
    id: 3,
    name: "Dr. Rohit Deshmukh",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    experience: "10+ years",
    availableDays: "Mon - Thu",
    availableTime: "9:00 AM - 1:00 PM",
    email: "rohit.deshmukh@careplushospital.com",
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "With a focus on minimally invasive techniques, Dr. Deshmukh ensures faster recovery and mobility."
  },
  {
    id: 4,
    name: "Dr. Meera Kapoor",
    specialization: "Pediatrician",
    department: "Pediatrics",
    experience: "8+ years",
    availableDays: "Mon - Fri",
    availableTime: "10:30 AM - 3:00 PM",
    email: "meera.kapoor@careplushospital.com",
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A friendly face for little ones, Dr. Kapoor is trusted by hundreds of families for child health care."
  },
  {
    id: 5,
    name: "Dr. Aditya Bansal",
    specialization: "Neurologist",
    department: "Neurology",
    experience: "13+ years",
    availableDays: "Wed - Sat",
    availableTime: "1:00 PM - 5:00 PM",
    email: "aditya.bansal@careplushospital.com",
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Specializing in complex neurological conditions, Dr. Bansal combines technology with human touch."
  },
  {
    id: 6,
    name: "Dr. Kavita Joshi",
    specialization: "Dermatologist",
    department: "Dermatology",
    experience: "9+ years",
    availableDays: "Mon, Wed, Fri",
    availableTime: "12:00 PM - 3:00 PM",
    email: "kavita.joshi@careplushospital.com",
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "From skincare to advanced treatments, Dr. Joshi helps patients achieve healthy and glowing skin."
  },
  {
    id: 7,
    name: "Dr. Arjun Iyer",
    specialization: "General Surgeon",
    department: "Surgery",
    experience: "14+ years",
    availableDays: "Mon - Fri",
    availableTime: "9:00 AM - 12:00 PM",
    email: "arjun.iyer@careplushospital.com",
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Dedicated to safe and successful surgeries, Dr. Iyer is a pillar of our surgical excellence."
  },
  {
    id: 8,
    name: "Dr. Sneha Patil",
    specialization: "Dentist",
    department: "Dentistry",
    experience: "7+ years",
    availableDays: "Tue - Sat",
    availableTime: "11:00 AM - 2:00 PM",
    email: "sneha.patil@careplushospital.com",
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Creating beautiful smiles, Dr. Patil uses modern techniques to ensure painless dental care."
  }
];
  return (
    <div>
           {
            showSideBar
            &&
            <Sidebar/>
        }
       <div className={styles.doctorsPage}>
           <section className={styles.introContentCover}>
                     </section> 
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>👨‍⚕️ Meet Our Doctors</h1>
        <p>
          Our team of expert doctors are committed to providing the highest quality care
          in a compassionate and personalized manner.
        </p>
      </section>




      {/* DoctORs MOtivation */}
      <DoctorsMotivation/>
      {/* Doctors List */}
      <div className={styles.doctorsPage}>
     

      <section className={styles.grid}>
        {doctors.map(doc => (
          <div className={styles.card} key={doc.id}>
            <img src={doc.image} alt={doc.name} className={styles.image} />
            <h3 className={styles.name}>{doc.name}</h3>
            <p className={styles.specialization}>{doc.specialization}</p>
            <p><strong>Department:</strong> {doc.department}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
            <p><strong>Available:</strong> {doc.availableDays}, {doc.availableTime}</p>
            <p className={styles.bio}>{doc.bio}</p>
            <div className={styles.buttons}>
              <a href={`mailto:${doc.email}`} className={styles.emailBtn}><FaEnvelope /> Email</a>
              <button className={styles.bookBtn}>Book Appointment</button>
            </div>
          </div>
        ))}
      </section>
    </div>
    </div>
      </div>
  )
}

export default Doctors