import React, { useEffect } from "react";
import { useContext } from "react";
import Sidebar from "../Components/SideBar";
import { SideBarContext } from "../Context/SideBarContextProvider";
import styles from "./styles/About.module.css";
import {
  FaUserMd,
  FaLeaf,
  FaGraduationCap,
  FaHandsHelping,
} from "react-icons/fa";
import {
  FaHospital,
  FaCheckCircle,
  FaUsers,
  FaRecycle,
  FaHeartbeat,
  FaAmbulance,
  FaMicroscope,
  FaBed,
  FaLaptopMedical,
  FaUserShield,
} from "react-icons/fa";
import {
  FaGlobe,
  FaHospitalAlt,
  FaFlask,
  FaBrain,
  FaClock,
  FaStar,
} from "react-icons/fa";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

import { FaHospitalSymbol } from "react-icons/fa";
function About() {
  const { showSideBar ,handleShowSideBar } = useContext(SideBarContext);
  useEffect(()=>{
    handleShowSideBar();
  },[])
  const leadershipData = [
    {
      name: "Dr. Anil Sharma",
      role: "Founder & Chairman",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Dr. Sharma is the founding visionary behind CarePlus Hospital. With over 30 years of experience in public health and hospital planning, he ensures ethical, accessible, and technologically advanced care for every community.",
      email: "anil@careplus.com",
      linkedin: "#",
    },
    {
      name: "Ms. Priya Mehta",
      role: "Chief Executive Officer (CEO)",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "As CEO, Priya Mehta leads the hospital with a strategic focus on healthcare transformation, digital innovation, and operational excellence, ensuring top-tier patient outcomes and sustainable growth.",
      email: "priya@careplus.com",
      linkedin: "#",
    },
    {
      name: "Mr. Rajeev Nair",
      role: "Trustee & Head of Strategy",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Mr. Nair oversees governance and strategic planning. A former CFO turned healthcare trustee, he drives funding models, patient rights, and compliance initiatives that ensure long-term vision and impact.",
      email: "rajeev@careplus.com",
      linkedin:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr. Kavita Deshmukh",
      role: "Medical Director",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Dr. Kavita leads all clinical departments, ensures quality assurance, medical ethics, and fosters medical research. She is passionate about evidence-based protocols and continuous doctor education.",
      email: "kavita@careplus.com",
      linkedin:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mr. Arjun Bedi",
      role: "Chief Operating Officer (COO)",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Arjun oversees daily hospital operations, patient coordination, infrastructure upgrades, and staff performance. He ensures seamless delivery of services through strong leadership and operational clarity.",
      email: "arjun@careplus.com",
      linkedin: "",
    },
  ];

  return (
    <div>
      {showSideBar && <Sidebar />}
      <div
        className={styles.aboutUs}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1628372095387-017d1099fc19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
)`,
        }}
      >
        {/* ABout US Intro Section */}
        <div className={styles.overlay}>
          <section className={styles.intro}>
            <h1>
              <FaHospitalSymbol className={styles.icon} /> About Our Hospital
            </h1>
            <p>
              Welcome to <strong className="text-[#92b8ff]">CarePlus Multispeciality Hospital</strong>,
              your trusted healthcare destination. With a legacy of excellence
              in medical services, we aim to provide world-class care with
              compassion, technology, and dedication. Our team of experienced
              doctors, nurses, and medical staff is committed to your well-being
              24/7.CarePlus Multispeciality Hospital is a state-of-the-art
              healthcare institution committed to delivering exceptional medical
              care with empathy and integrity. Established with the vision to
              become a center of medical excellence, CarePlus has been a trusted
              name in healthcare, blending cutting-edge technology with
              personalized patient care. Our hospital serves as a healing hub
              where patients receive holistic treatment across multiple
              specialties, all under one roof. We believe in creating a warm and
              patient-centric environment where every individual is treated with
              dignity, compassion, and utmost respect.
            </p>
          </section>

          <section className={styles.sectionVission}>
            <div className={styles.vissionImgBox}>
              <div className={styles.vissionImgOverlay}></div>
              <img
                src="https://plus.unsplash.com/premium_photo-1682308449346-0d68b4e3f3fe?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1588776814546-5cf3f83e2c7b
"
                alt="Mission"
                className={styles.image}
              />
            </div>
            <div className={styles.vissionText}>
              <h2>
                <FaHeartbeat className={styles.icon} /> Our Mission
              </h2>
              <p>
                To deliver patient-centered healthcare with excellence in
                quality, service, and access. We are driven by a passion for
                healing and a commitment to innovation in medical care. Our
                mission is to provide accessible, affordable, and high-quality
                healthcare services to all segments of society. We are committed
                to: Putting patients at the heart of everything we do.
                Continuously upgrading our technology and medical expertise.
                Delivering care with empathy, ethics, and excellence. Promoting
                wellness, not just treating illness.
              </p>
            </div>
          </section>

          <section className={`${styles.sectionVission} ${styles.reverse}`}>
            <div className={styles.vissionImgBox}>
                <div className={styles.vissionImgOverlay}></div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1682308449346-0d68b4e3f3fe?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1588776814546-5cf3f83e2c7b
"
                  alt="Vision"
                  className={styles.image}
                />
              </div>
          
            <div className={styles.vissionText}>
              <h2>
                <FaAmbulance className={styles.icon} /> Our Vision
              </h2>
              <p>
                To be a leading healthcare provider recognized for providing
                safe, quality, and affordable healthcare services across the
                region with integrity and transparency.Our vision is to be a
                leader in the global healthcare landscape by setting benchmarks
                in clinical outcomes, patient safety, and medical innovation. We
                strive to: Be the preferred healthcare provider in the region.
                Foster a research-driven culture for continuous improvement.
                Educate future medical professionals through training and
                development. Inspire trust through transparent and ethical
                practices.
              </p>
            </div>
          </section>
        </div>
      </div>




      {/* Why Choose Us  / InfraStructure /Commnuity & CSR */}

      <div className={styles.container}>
        {/* Infrastructure */}
        <section className={`${styles.infraSection} `}>
          <div className={styles.contentCOntainer}>
            <h2>
              <FaHospital className={styles.icon} /> Our Infrastructure
            </h2>
            <p>
              CarePlus Hospital is equipped with state-of-the-art infrastructure
              designed to meet modern healthcare demands. From emergency
              services to smart patient management, we prioritize safety,
              precision, and comfort.
            </p>
            <ul className={styles.list}>
              <li>
                <FaAmbulance /> 24/7 Emergency and Trauma Center with rapid
                response teams and ambulance network.
              </li>
              <li>
                <FaBed /> Dedicated ICUs and Operation Theatres with modern
                infection control protocols.
              </li>
              <li>
                <FaMicroscope /> Advanced Radiology & Imaging: MRI, CT,
                Ultrasound & Digital X-Ray facilities.
              </li>
              <li>
                <FaLaptopMedical /> NABL-certified Laboratory and 24/7 In-house
                Pharmacy.
              </li>
              <li>
                <FaUserShield /> Private Rooms & Wards ensuring privacy,
                cleanliness, and family support areas.
              </li>
              <li>
                <FaLaptopMedical /> Fully Digital Health Records & Smart Patient
                Management across departments.
              </li>
            </ul>
          </div>
          <div className={styles.imgContainer}>
            <img
              src="https://images.unsplash.com/photo-1625312905513-71971baf0a36?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`${styles.infraSection} ${styles.reverse}`}>
          <div className={styles.contentCOntainer}>
            <h2>
              <FaCheckCircle className={styles.icon} /> Why Choose Us
            </h2>
            <p>
              At CarePlus, we're driven by compassion, transparency, and
              excellence. Our services are designed around patient needs and
              community trust.
            </p>
            <ul className={styles.list}>
              <li>
                <FaHospital /> Comprehensive Multispeciality Services under one
                roof.
              </li>
              <li>
                <FaUsers /> Patient-Centered and Family-Friendly Treatment
                Planning.
              </li>
              <li>
                <FaCheckCircle /> Transparent Billing System with upfront cost
                estimates.
              </li>
              <li>
                <FaUserShield /> NABH Accreditation ensuring top-tier safety and
                care standards.
              </li>
              <li>
                <FaHeartbeat /> Dedicated Preventive & Wellness Care units.
              </li>
            </ul>
          </div>
          <div className={styles.imgContainer}>
            <img
              src="https://images.unsplash.com/photo-1625312905513-71971baf0a36?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </section>

        {/* Community & CSR */}
        <section className={`${styles.infraSection} `}>
          <div className={styles.contentCOntainer}>
            <h2>
              <FaRecycle className={styles.icon} /> Community & CSR
            </h2>
            <p>
              We believe in giving back. CarePlus regularly organizes programs
              to reach and uplift the health of the entire community.
            </p>
            <ul className={styles.list}>
              <li>
                <FaAmbulance /> Free Health Check-up Camps in rural and
                low-income urban areas.
              </li>
              <li>
                <FaHeartbeat /> Awareness Drives for lifestyle diseases, women’s
                health, and mental wellness.
              </li>
              <li>
                <FaLaptopMedical /> Mobile Medical Units & Telemedicine for
                remote healthcare access.
              </li>
              <li>
                <FaUserShield /> Financial Support for underprivileged patients
                via NGO & Govt. tie-ups.
              </li>
              <li>
                <FaRecycle /> Eco-friendly Green Hospital initiatives for a
                sustainable future.
              </li>
            </ul>
          </div>
          <div className={styles.imgContainer}>
            <img
              src="https://images.unsplash.com/photo-1742436599018-27a118d635ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </section>
      </div>

      {/* Meet Our Expert Team */}
      <section className={styles.teamSection}>
        <div className={styles.content}>
          <h2 className={styles.headingTeam}>Meet Our Expert Team</h2>
          <p className={styles.subheading}>
            🌍 Diverse and Inclusive Workforce At CarePlus Hospital, we embrace
            diversity as a strength. Our healthcare professionals come from
            various cultural, ethnic, and professional backgrounds, bringing
            unique perspectives and experiences to patient care. We are
            committed to fostering an inclusive environment where every team
            member feels valued and empowered to contribute to exceptional care.
          </p>
          <p className={styles.quotePara}>
            {" "}
            ~ 🏅 "Diversity drives innovation, and inclusion ensures excellence
            in healthcare delivery."
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <FaUserMd className={styles.icon} />
              <h3>World-Class Medical Experts</h3>
              <p>
                Our team includes board-certified doctors, surgeons, nurses, and
                therapists with international credentials and decades of
                combined experience in patient care, diagnostics, and advanced
                treatments.
              </p>
            </div>

            <div className={styles.card}>
              <FaHeartbeat className={styles.icon} />
              <h3>Heartfelt Compassion & Care</h3>
              <p>
                We believe that healing starts with empathy. Every patient is
                treated as family — with warmth, dignity, and emotional support
                to ease every step of their medical journey.
              </p>
            </div>

            <div className={styles.card}>
              <FaLeaf className={styles.icon} />
              <h3>Holistic & Preventive Wellness</h3>
              <p>
                Our approach looks beyond symptoms. We care for the whole person
                — physically, emotionally, and mentally — with lifestyle
                guidance, stress management, and long-term wellness planning.
              </p>
            </div>

            <div className={styles.card}>
              <FaGraduationCap className={styles.icon} />
              <h3>Commitment to Medical Mastery</h3>
              <p>
                Through ongoing training, certifications, and global research,
                our team continually updates their skills to provide patients
                with the most current, evidence-based care and procedures.
              </p>
            </div>

            <div className={styles.card}>
              <FaHandsHelping className={styles.icon} />
              <h3>Collaborative Patient Partnerships</h3>
              <p>
                We work hand-in-hand with patients and their families, involving
                them in treatment decisions and recovery goals. This inclusive
                approach builds trust, transparency, and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dicover Section */}
      <section className={styles.teamDiscover}>
        <div className={styles.contentDiscover}>
          <h2 className={styles.headingDiscover}>
            👩‍⚕️ Our Dedicated Healthcare Team
          </h2>
          <p className={styles.subheadingDiscover}>
            At CarePlus Hospital, our team is the heart of everything we do. We
            are proud to have a diverse and accomplished group of healthcare
            professionals who are committed to excellence in patient care,
            medical innovation, and compassionate service.
          </p>

          <div className={styles.cardsDiscover}>
            <div className={styles.cardDiscover}>
              <div className={styles.discoverIconAndHeadBox}>
                <FaGlobe className={`${styles.iconDiscover} text-[60px]`} />
                <h3>Diverse & Inclusive Healthcare Team</h3>
              </div>
              <p>
                We are proud of our culturally diverse staff, where inclusion
                drives compassion. Different perspectives strengthen our ability
                to connect with and understand every patient we serve.
              </p>
            </div>

            <div className={styles.cardDiscover}>
              <div className={styles.discoverIconAndHeadBox}>
                <FaHospitalAlt
                  className={`${styles.iconDiscover} text-[60px]`}
                />
                <h3>Comprehensive Multispecialty Care</h3>
              </div>
              <p>
                With experts across cardiology, neurology, orthopedics,
                oncology, pediatrics, and more, we deliver multidisciplinary
                care under one roof — for better coordination and faster
                healing.
              </p>
            </div>

            <div className={styles.cardDiscover}>
              <div className={styles.discoverIconAndHeadBox}>
                <FaFlask className={`${styles.iconDiscover} text-[60px]`} />
                <h3>Pioneering Medical Innovation</h3>
              </div>
              <p>
                Our facilities leverage AI diagnostics, robotic surgeries, and
                real-time health monitoring. We’re at the forefront of
                technology to ensure precise, effective, and minimally invasive
                care.
              </p>
            </div>

            <div className={styles.cardDiscover}>
              <div className={styles.discoverIconAndHeadBox}>
                <FaBrain className={`${styles.iconDiscover} text-[60px]`} />
                <h3>Mental Health & Emotional Wellness</h3>
              </div>
              <p>
                Our in-house psychologists and counselors provide therapy and
                emotional care, helping patients and families cope with stress,
                trauma, and life changes during medical treatments.
              </p>
            </div>

            <div className={styles.cardDiscover}>
              <div className={styles.discoverIconAndHeadBox}>
                <FaGraduationCap
                  className={`${styles.iconDiscover} text-[60px]`}
                />
                <h3>Training Tomorrow’s Healthcare Leaders</h3>
              </div>
              <p>
                Through internships, residency programs, and continuous
                mentoring, we invest in nurturing future doctors, nurses, and
                specialists committed to compassionate and advanced care.
              </p>
            </div>

            <div className={styles.cardDiscover}>
              <div className={styles.discoverIconAndHeadBox}>
                <FaStar className={`${styles.iconDiscover} text-[60px]`} />
                <h3>Proven Track Record & Recognition</h3>
              </div>
              <p>
                Thousands of successful treatments, patient testimonials, and
                awards from healthcare authorities testify to our excellence in
                service, safety, and patient satisfaction.
              </p>
            </div>

            <div className={styles.cardDiscover}>
              <div className={styles.discoverIconAndHeadBox}>
                <FaClock className={`${styles.iconDiscover} text-[60px]`} />
                <h3>Always Ready: 24/7 Emergency Care</h3>
              </div>
              <p>
                From trauma units to ICU specialists, our emergency response
                team operates around the clock — delivering rapid, lifesaving
                care when it’s needed most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className={styles.leadershipSection}>
        <div className={styles.containerLeader}>
          <h2 className={styles.headingLeader}>
            👥 Leadership & Management Team
          </h2>
          <p className={styles.subheadingLeader}>
            Our leadership team brings together decades of experience, visionary
            thinking, and a passion for healthcare excellence.
          </p>

          <div className={styles.teamGrid}>
            {leadershipData.map((leader, index) => (
              <div
                key={index}
                className={`${styles.cardLeader} ${styles.changeBgLeader}`}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className={styles.image}
                />

                {/* Hover Overlay with name and role */}
                <div className={styles.overlayContent}>
                  <h3>{leader.name}</h3>
                  <p>{leader.role}</p>
                </div>

                <h3 className={styles.name}>{leader.name}</h3>
                <p className={styles.role}>{leader.role}</p>
                <p className={styles.bio}>{leader.bio}</p>
                <div className={styles.socialLinks}>
                  <a href={`mailto:${leader.email}`}>
                    <FaEnvelope className="text-[30px]" /> Email
                  </a>
                  <a href={leader.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin className="text-[30px]" /> Linkedin
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
