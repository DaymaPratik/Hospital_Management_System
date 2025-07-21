import React, { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
import Sidebar from "../Components/SideBar";
import styles from "./styles/Home.module.css";
import {
  FaAmbulance,
  FaHeartbeat,
  FaUserInjured,
  FaMicroscope,
  FaBaby,
  FaCapsules,
} from "react-icons/fa";
function Home() {
  const { showSideBar } = useContext(SideBarContext);
  const services = [
    {
      icon: <FaAmbulance />,
      title: "Emergency Care",
      description:
        "24/7 emergency services with immediate response and expert medical staff.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      description:
        "Comprehensive heart care with advanced diagnostic and treatment facilities.",
    },
    {
      icon: <FaUserInjured />,
      title: "Surgery",
      description:
        "Modern operation theaters for complex and routine surgeries by skilled surgeons.",
    },
    {
      icon: <FaMicroscope />,
      title: "Diagnostics",
      description:
        "State-of-the-art laboratory and imaging services for precise diagnosis.",
    },
    {
      icon: <FaBaby />,
      title: "Pediatrics",
      description:
        "Expert pediatricians to ensure the best care for your child’s health.",
    },
    {
      icon: <FaCapsules />,
      title: "Pharmacy",
      description:
        "In-house pharmacy providing all essential and prescribed medicines 24/7.",
    },
  ];

  const doctors = [
    {
      name: "Dr. Aarav Mehta",
      specialization: "Cardiologist",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      bio: "Renowned for his precision and patient care, Dr. Mehta brings over 15 years of cardiology excellence.",
    },
    {
      name: "Dr. Nisha Rane",
      specialization: "Gynecologist",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      bio: "Expert in women's health, Dr. Rane provides compassionate and advanced care for every stage of life.",
    },
    {
      name: "Dr. Rohit Deshmukh",
      specialization: "Orthopedic Surgeon",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      bio: "With a focus on minimally invasive techniques, Dr. Deshmukh ensures faster recovery and mobility.",
    },
    {
      name: "Dr. Meera Kapoor",
      specialization: "Pediatrician",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "A friendly face for little ones, Dr. Kapoor is trusted by hundreds of families for child health care.",
    },
    {
      name: "Dr. Aditya Bansal",
      specialization: "Neurologist",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Specializing in complex neurological conditions, Dr. Bansal combines technology with human touch.",
    },
    {
      name: "Dr. Kavita Joshi",
      specialization: "Dermatologist",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      bio: "From skincare to advanced treatments, Dr. Joshi helps patients achieve healthy and glowing skin.",
    },
    {
      name: "Dr. Arjun Iyer",
      specialization: "General Surgeon",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      bio: "Dedicated to safe and successful surgeries, Dr. Iyer is a pillar of our surgical excellence.",
    },
    {
      name: "Dr. Sneha Patil",
      specialization: "Dentist",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      bio: "Creating beautiful smiles, Dr. Patil uses modern techniques to ensure painless dental care.",
    },
  ];

  const departments = [
    {
      name: "Cardiology",
      description: "Advanced care for heart and vascular conditions.",
      image:
        "https://plus.unsplash.com/premium_photo-1682308449346-0d68b4e3f3fe?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1588776814546-5cf3f83e2c7b",
    },
    {
      name: "Neurology",
      description:
        "Diagnosis and treatment of brain and nervous system disorders.",
      image:
        "https://plus.unsplash.com/premium_photo-1678743317021-4b6110b27507?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Orthopedics",
      description: "Comprehensive bone, joint, and spine care.",
      image:
        "https://images.unsplash.com/photo-1582380330092-636f9aff6aaf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pediatrics",
      description: "Dedicated care for infants, children, and adolescents.",
      image:
        "https://images.unsplash.com/photo-1632052999447-e542d08d4f7d?q=80&w=937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gynecology",
      description: "Complete women’s health solutions at all stages of life.",
      image:
        "https://images.unsplash.com/photo-1654931800911-7a9cfb3b7c17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dermatology",
      description: "Expert care for skin, hair, and nail conditions.",
      image:
        "https://images.unsplash.com/photo-1700760934166-4c766d708139?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Aryan Mehta",
      feedback:
        "Exceptional hospital services! The doctors are professional, and the staff made me feel comfortable throughout the process.",
      designation: "Cardiac Patient",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Neha Sharma",
      feedback:
        "State-of-the-art facilities and a very caring pediatric department. My child recovered quickly under expert guidance.",
      designation: "Mother of a Patient",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Mr. Ravi Kulkarni",
      feedback:
        "The orthopedic department is brilliant. Quick diagnosis and smooth surgery experience.",
      designation: "Orthopedic Patient",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      name: "Dr. Aryan Mehta",
      feedback:
        "Exceptional hospital services! The doctors are professional, and the staff made me feel comfortable throughout the process.",
      designation: "Cardiac Patient",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Neha Sharma",
      feedback:
        "State-of-the-art facilities and a very caring pediatric department. My child recovered quickly under expert guidance.",
      designation: "Mother of a Patient",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Mr. Ravi Kulkarni",
      feedback:
        "The orthopedic department is brilliant. Quick diagnosis and smooth surgery experience.",
      designation: "Orthopedic Patient",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
  ];

  return (
    <main className={styles.mainContainer}>
      {showSideBar && <Sidebar />}
      {/* Introduction Section */}
      <section className={styles.intro}>
        <section className={styles.introContentCover}></section>
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h1>
              Welcome to <span>Healing Touch Hospital</span>
            </h1>
            <p>
              At Healing Touch Hospital, we believe that healthcare is not just
              about curing illness — it’s about creating an environment of
              compassion, innovation, and excellence. For over a decade, we’ve
              been at the forefront of delivering world-class medical services,
              powered by cutting-edge technology and a team of highly skilled
              professionals.
            </p>
            <button className={styles.exploreBtn}>Explore Departments</button>
          </div>
          <div className={styles.imgContainer}>
            <img
              src="https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hospital Building"
              className={styles.introImage1}
            />
            <img
              src="https://images.unsplash.com/photo-1578991624414-276ef23a534f?q=80&w=1327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hospital Building"
              className={styles.introImage2}
            />
            <img
              src="https://images.unsplash.com/photo-1611587266391-2e1605329537?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hospital Building"
              className={styles.introImage3}
            />
          </div>
        </section>
      </section>

      {/* Facilities section */}
      <section className={styles.facilities}>
        <h2 className={styles.title}>Our Facilities & Services</h2>
        <div className={styles.cardGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Section */}
      <section className={styles.doctors}>
        <h2 className={styles.heading}>Meet Our Experts</h2>
        <p className={styles.subHeaderText}>
          Our hospital proudly hosts a team of highly experienced and
          compassionate doctors across all major specialties.
        </p>
        <div className={styles.gridDoctors}>
          {doctors.map((doc, index) => (
            <div key={index} className={styles.cardDoctors}>
              <div className={styles.imgAndNameContainer}>
                <img src={doc.image} alt={doc.name} className={styles.avatar} />
                <div>
                  <div>
                    <h3>{doc.name}</h3>
                    <p className={styles.special}>{doc.specialization}</p>
                  </div>
                </div>
              </div>

              <p className={styles.bio}>{doc.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Department Section */}
      <section className={styles.departments}>
        <h2 className={styles.headingDepartments}>Our Medical Departments</h2>
        <p className={styles.subtext}>
          We offer a wide range of specialties to cater to every patient’s
          needs.
        </p>
        <div className={styles.gridDepartment}>
          {departments.map((dept, index) => (
            <div
              key={index}
              className={styles.cardDepartment}
              style={{ backgroundImage: `url(${dept.image})` }}
            >
              <div className={styles.overlay}>
                <h3>{dept.name}</h3>
                <p>{dept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}

      <section className={styles.testimonialSection}>
        <h2 className={styles.testimonialHeading}>What Our Patients Say</h2>
        <p className={styles.testimonialSubtext}>
          Hear directly from our patients and their families about their
          experience at our hospital.
        </p>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialFeedback}>“{item.feedback}”</p>
                <div className={styles.testimonialProfile}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
