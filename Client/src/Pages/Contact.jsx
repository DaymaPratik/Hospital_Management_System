import React, { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
import Sidebar from "../Components/SideBar";
import styles from "./styles/Contact.module.css";

function Contact() {
   const { showSideBar ,handleShowSideBar } = useContext(SideBarContext);
   useEffect(()=>{
     handleShowSideBar();
   },[])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate email service or backend API here
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <main>
      {showSideBar && <Sidebar />}


      {/* HEro Section */}
      <section  className={styles.appointmentContainer}>
               <section className={styles.introContentCover}>
                    
              </section>
            <section className={styles.hero}>
              <div className={styles.heroContent}>
                <h1>📞 Nerver Hesisate To Contact ..</h1>
                <p>We’re here to help. Reach out to us anytime!.</p>
              </div>
            </section>
            </section>

      <div className={styles.contactContainer}>
       
        

        {/* Contact Info */}
        <section className={styles.contactInfo}>
          <div>
            <h3>🏥 Hospital Address</h3>
            <p>
             Mahalaxmi Nagar,,
              <br />
              Sai Nath Nagar, Shakuntala Nagar,
              <br />
              Mantha Chaufully  ,Jalna,
              <br />
               Maharashtra - 431203, India
            </p>
          </div>

          <div>
            <div>
            <h3>📞 Phone Support</h3>
             <p>+91 98765 43210 (Main Reception)</p>
            <p>+91 98765 43211 (Emergency 24x7)</p>
           </div>
            <p className={styles.subText}>
              <strong>Working Hours:</strong> Mon-Sat, 8 AM – 8 PM
            </p>
          </div>

          <div>
            <h3>📧 Email Communication</h3>
            <p>
              <strong>General Inquiries:</strong> support@careplushospital.com
            </p>
            <p>
              <strong>Appointments:</strong> appointments@careplushospital.com
            </p>
            <p className={styles.subText}>We aim to respond within 24 hours.</p>
          </div>
        </section>
        {/* Google Map */}
        <section className={styles.mapSection}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.910268127785!2d75.91512307933591!3d19.843749333889804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda592bcdd6a753%3A0x7349605275ca65d0!2sJalna%20Critical%20Care%20-%20Best%20Cardiac%20Hospital%20In%20Jalna%20%7C%20Best%20Neurologist%20In%20Jalna%20%7C%20Best%20Diabetic%20Hospital%20In%20Jalna!5e0!3m2!1sen!2sin!4v1752240163661!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            className={styles.mapEmbed}
          ></iframe>
        </section>

        {/* Contact Form */}
        <section className={styles.contactFormSection}>
          <h2>📬 Send Us a Message</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
export default Contact;
