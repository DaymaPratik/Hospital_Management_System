import React from "react";
import styles from "./DoctorsMotivation.module.css";
import { FaHeartbeat, FaUserMd } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";

function DoctorsMotivation() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        <FaUserMd /> Who Are Doctors?
      </h2>
      <div className={styles.content}>
        <img
          src="https://images.unsplash.com/photo-1576669801615-4e2f69504d58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D"
          alt="Doctor at work"
          className={styles.image}
        />

        <p className={styles.text}>
          Doctors are not just healthcare providers—they are healers,
          life-savers, and the silent warriors of our society. Every day, they
          put on their coats not just with a stethoscope but with courage,
          empathy, and an unshakable commitment to serve others. Whether it’s
          treating a sick child, performing complex surgeries, or calming a
          worried family, doctors step into every moment with purpose and
          precision. They endure long shifts, emotional exhaustion, and critical
          decision-making—all to protect lives and bring relief. In times of
          pandemics, disasters, and global health crises, doctors rise as our
          first line of defense. Their service transcends science—it becomes an
          act of humanity. They are the hope when hope is fading, and the
          strength when families are breaking. Their dedication is not just
          admirable—it’s inspirational. We owe them not only our gratitude but
          our utmost respect for the lives they touch every day.
        </p>
      </div>

      <h2 className={styles.heading}>
        <GiMedicines /> Their Greatest Achievements
      </h2>
      <div className={`${styles.content} ${styles.reverse}`}>
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D"
          alt="Medical achievement"
          className={styles.image}
        />

        <p className={styles.text}>
          The legacy of doctors is engraved in every milestone of modern
          medicine. Through centuries of innovation and sacrifice, they have
          conquered diseases once deemed incurable—transforming global health.
          From eradicating smallpox and controlling polio, to developing
          groundbreaking treatments for cancer, AIDS, and genetic disorders,
          their impact is immeasurable. Doctors have led the way in surgical
          revolutions, organ transplants, and robotic procedures that save
          millions of lives annually. They have pioneered fields like neurology,
          cardiology, and immunotherapy, constantly pushing the boundaries of
          what is possible. During pandemics such as COVID-19, doctors stood
          firm against fear and fatigue to safeguard humanity—working round the
          clock, often at grea t personal risk. Every research trial, clinical
          breakthrough, and patient victory stands as a tribute to their
          relentless pursuit of healing. The achievements of doctors are not
          just scientific—they are deeply human, rooted in care, vision, and a
          passion to make the world healthier and better for generations to
          come.
        </p>
      </div>

      <div className={styles.footerNote}>
        <FaHeartbeat className={styles.heartIcon} />
        Thank you, Doctors, for making the world a healthier place.
      </div>
    </section>
  );
}

export default DoctorsMotivation;
