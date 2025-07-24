import React from "react";
import styles from "./NotificationCenter.module.css";


const NotificationCenter = () => {
  const notifications = [
    {
      type: "appointment",
      message: "Dr. Mehta has an appointment with Mr. Khan at 3:00 PM",
      time: "15 mins ago",
      level: "info",
    },
    {
      type: "stock",
      message: "Paracetamol tablets below 10 units!",
      time: "30 mins ago",
      level: "warning",
    },
    {
      type: "emergency",
      message: "Emergency alert from ICU Ward 3",
      time: "5 mins ago",
      level: "critical",
    },
    {
      type: "lab",
      message: "Lab reports for Patient #121 uploaded",
      time: "1 hour ago",
      level: "success",
    },
  ];

  const typeIcon = {
    appointment: "📅",
    stock: "💊",
    emergency: "🚨",
    lab: "🧪",
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🔔 Notifications & Alerts</h2>
      <p className={styles.subText}>
        Real-time alerts for appointments, stock, labs, and emergencies
      </p>

      <div className={styles.grid}>
        {notifications.map((item, idx) => (
          <div className={`${styles.card} ${styles[item.level]}`} key={idx}>
            <div className={styles.icon}>{typeIcon[item.type] || "🔔"}</div>
            <div className={styles.content}>
              <h4 className={styles.title}>{item.message}</h4>
              <span className={styles.time}>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCenter;
