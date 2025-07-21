import React, { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
import Sidebar from "../Components/SideBar";
import styles from "./styles/Department.module.css";
import {
  FaHeartbeat,
  FaBrain,
  FaChild,
  FaLungs,
  FaXRay,
  FaStethoscope,
  FaBone,
  FaFemale,
  FaUserMd,
} from "react-icons/fa";

function Department() {
  const { showSideBar } = useContext(SideBarContext);
 const departments = [
  {
    name: "Cardiology",
    icon: <FaHeartbeat className={styles.icon} />,
    image:
      "https://plus.unsplash.com/premium_photo-1682308449346-0d68b4e3f3fe?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1588776814546-5cf3f83e2c7b",
    description:
      "Cardiology deals with disorders of the heart and circulatory system. Our skilled cardiologists handle everything from routine heart check-ups to complex procedures like angioplasty, pacemaker implants, and cardiac surgeries. With state-of-the-art diagnostics and a patient-first approach, we strive to reduce risks and improve heart health outcomes.",
  },
  {
    name: "Neurology",
    icon: <FaBrain className={styles.icon} />,
    image:
      "https://plus.unsplash.com/premium_photo-1678743317021-4b6110b27507?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Neurology focuses on the brain, spine, and nervous system. Our department offers care for conditions like epilepsy, Parkinson’s disease, multiple sclerosis, and more. We combine clinical experience with the latest advancements in neuroimaging and therapies to diagnose and manage neurological conditions effectively.",
  },
  {
    name: "Pediatrics",
    icon: <FaChild className={styles.icon} />,
    image:
      "https://images.unsplash.com/photo-1632052999447-e542d08d4f7d?q=80&w=937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Our Pediatric department provides holistic care for infants, children, and adolescents. From vaccinations and nutritional guidance to acute illness management and developmental monitoring, we ensure every child receives compassionate, age-appropriate medical attention.",
  },
  {
    name: "Pulmonology",
    icon: <FaLungs className={styles.icon} />,
    image:
      "https://images.unsplash.com/photo-1715529407988-3054ef00335c?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Pulmonology specializes in respiratory health. We diagnose and treat asthma, chronic bronchitis, tuberculosis, and other lung-related conditions. Our team uses advanced tools like bronchoscopy and sleep studies to deliver targeted treatments and improve lung function.",
  },
  {
    name: "Radiology",
    icon: <FaXRay className={styles.icon} />,
    image:
      "https://images.unsplash.com/photo-1631563018856-81be9c118283?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Radiology plays a vital role in diagnosis using technologies like X-rays, MRI, and CT scans. Our experienced radiologists collaborate with every department to provide accurate imaging interpretations, aiding faster and more effective treatment planning.",
  },
  {
    name: "General Medicine",
    icon: <FaStethoscope className={styles.icon} />,
    image:
      "https://images.unsplash.com/photo-1631507623095-c710d184498f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "General Medicine offers comprehensive medical care for adults. We handle common and chronic illnesses such as hypertension, diabetes, infections, and lifestyle-related disorders. Our focus is on preventive health and long-term well-being through regular checkups and personalized care.",
  },
  {
    name: "Orthopedics",
    icon: <FaBone className={styles.icon} />,
    image:
      "https://images.unsplash.com/photo-1582380330092-636f9aff6aaf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Orthopedics department specializes in the diagnosis and treatment of musculoskeletal issues, including fractures, joint pain, arthritis, and spinal disorders. We offer both surgical and non-surgical solutions, including joint replacements, sports injury rehabilitation, and physiotherapy. Our goal is to restore mobility and improve quality of life through advanced orthopedic care.",
  },
  {
    name: "Gynecology",
    icon: <FaFemale className={styles.icon} />,
    image:
      "https://images.unsplash.com/photo-1654931800911-7a9cfb3b7c17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Our Gynecology department is committed to women’s health across all life stages. We provide expert care in areas such as menstrual disorders, infertility, prenatal and postnatal care, menopause management, and gynecological surgeries. Our empathetic specialists ensure a safe and supportive environment for every patient.",
  },
  {
    name: "Dermatology",
    icon: <FaUserMd className={styles.icon} />,
    image:
      "https://images.unsplash.com/photo-1700760934166-4c766d708139?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Dermatology focuses on the diagnosis and treatment of skin, hair, and nail disorders. From acne, eczema, and psoriasis to cosmetic treatments and skin cancer screenings, we provide comprehensive care using clinical expertise and advanced dermatological technology for all age groups.",
  },
];
  return (
    <div>
      {showSideBar && <Sidebar />}

      <section>
        <section className={styles.introContentCover}></section>
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h1>
              Welcome to <span>Our Medical Departments</span>
            </h1>
            <p>
              Discover world-class care across every specialized department—from
              Cardiology and Neurology to Pediatrics, Radiology, and General
              Medicine. Our departments are staffed with top-tier professionals
              dedicated to precise diagnosis, innovative treatments, and
              compassionate patient care. At our hospital, each department
              operates with the goal of not only treating illness but restoring
              hope and well-being. Dive into the core of our healthcare
              excellence.
            </p>
            <button className={styles.exploreBtn}>Explore Departments</button>
          </div>
          <div className={styles.imgContainer}>
            <img
              src="https://images.unsplash.com/photo-1611587266391-2e1605329537?q=80&w=1170&auto=format&fit=crop"
              alt="Modern Medical Facility"
              className={styles.introImage1}
            />
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Doctors at work"
              className={styles.introImage2}
            />
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1168&auto=format&fit=crop"
              alt="Hospital corridor"
              className={styles.introImage3}
            />
          </div>
        </section>
      </section>

      <section className={styles.container}>
        <h2 className={styles.heading}>🏥 Explore Our Departments</h2>
        {departments.map((dept, index) => (
          <div
            key={index}
            className={`${styles.section} ${
              index % 2 === 1 ? styles.reverse : ""
            }`}
          >
            <div className={styles.imgBox}>
              <img src={dept.image} alt={dept.name} className={styles.image} />
              <div className={styles.imgOverlay}></div>
            </div>
            <div className={styles.textBlock}>
             <div className={styles.textBlockOverlay}>
               
             </div>
             <div className={styles.textInfo}>
              <div className={styles.iconTitle}>
                {dept.icon}
                <h3>{dept.name}</h3>
              </div>
              <p>{dept.description}</p>
             </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Department;
