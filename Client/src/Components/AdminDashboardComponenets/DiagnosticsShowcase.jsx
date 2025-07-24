import React from 'react';
import styles from './DiagnosticsShowcase.module.css';

const tests = [
  {
    name: 'MRI Scan',
    description: 'A high-resolution imaging technique used for brain, spine, joints, and organs.',
    icon: '🧠',
    dept: 'Radiology',
    doctor: 'Dr. Priya Mehta',
    duration: '45 minutes',
    cost: '₹3500',
  },
  {
    name: 'TMT Test',
    description: 'Evaluates heart function under physical stress using a treadmill and ECG monitor.',
    icon: '🏃‍♂️',
    dept: 'Cardiology',
    doctor: 'Dr. Ramesh Patil',
    duration: '30 minutes',
    cost: '₹1200',
  },
  {
    name: 'Angiography',
    description: 'Visualizes arteries and heart chambers using contrast dye and X-ray.',
    icon: '❤️',
    dept: 'Cardiology',
    doctor: 'Dr. Sanjana Iyer',
    duration: '1 hour',
    cost: '₹8500',
  },
  {
    name: 'Blood Test',
    description: 'Includes CBC, liver, kidney, sugar, thyroid, and more panels.',
    icon: '🩸',
    dept: 'Pathology',
    doctor: 'Dr. Arjun Deshmukh',
    duration: '15 minutes',
    cost: '₹500',
  },
  {
    name: 'X-Ray',
    description: 'Used to view broken bones, chest issues, or infections.',
    icon: '🦴',
    dept: 'Radiology',
    doctor: 'Dr. Sneha Kulkarni',
    duration: '10 minutes',
    cost: '₹400',
  },
  {
    name: 'Urine Test',
    description: 'Checks for UTI, diabetes, protein levels, and kidney function.',
    icon: '💧',
    dept: 'Pathology',
    doctor: 'Dr. Kiran Shah',
    duration: '10 minutes',
    cost: '₹250',
  },
  {
    name: 'CT Scan',
    description: 'Combines X-ray images for detailed 3D internal imaging.',
    icon: '📡',
    dept: 'Radiology',
    doctor: 'Dr. Neha Sinha',
    duration: '25 minutes',
    cost: '₹2800',
  },
  {
    name: 'ECG',
    description: 'Tracks the electrical activity of the heart through electrodes.',
    icon: '📈',
    dept: 'Cardiology',
    doctor: 'Dr. Akshay Menon',
    duration: '10 minutes',
    cost: '₹300',
  }
];

const DiagnosticsShowcase = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🏥 Diagnostic & Pathology Services</h2>
      <p className={styles.subtitle}>
        Explore our cutting-edge medical testing facilities, managed by expert doctors across departments.
      </p>

      <div className={styles.grid}>
        {tests.map((test, index) => (
          <div key={index} className={styles.card}>
           
            <div className={styles.content}>
              <h3 className={styles.testName}>
          <span className={styles.icon}>{test.icon}</span>
                {test.name}
            </h3>
              <p className={styles.description}>{test.description}</p>
              <p className={styles.info}><strong>🧑‍⚕️ Doctor:</strong> {test.doctor}</p>
              <p className={styles.info}><strong>⏱️ Duration:</strong> {test.duration}</p>
              <p className={styles.info}><strong>💰 Cost:</strong> {test.cost}</p>
              <span className={styles.department}>{test.dept} Department</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosticsShowcase;
