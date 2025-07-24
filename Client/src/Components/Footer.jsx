import styles from "./styles/Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
          <h2>🏥 Jalna Critcal Care+</h2>
          <p>Caring for Life. Every Day.</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/doctors">Doctors</a>
            </li>
            <li>
              <a href="/departments">Departments</a>
            </li>
            <li>
              <a href="/appointments">Appointments</a>
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>📍 123 Health St, Pune, MH 411001</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 contact@medicareplus.com</p>
        </div>

        <div className={styles.social}>
          <h4>Follow Us</h4>
          <ul className={styles.socialList}>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className={styles.icon} />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className={styles.icon} />
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.icon} />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className={styles.icon} />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          © {new Date().getFullYear()} MediCare+ Hospital Management System. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
