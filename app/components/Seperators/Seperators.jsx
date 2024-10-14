// components/SeparatorWithText.js
import React from 'react';
import styles from '@/styles/Seperators/Seperator.module.css';

const SeparatorWithText = ({ text }) => {
  return (
    <div className={styles.separatorContainer}>
      <div className={styles.line}></div>
      <span className={styles.text}>{text}</span>
      <div className={styles.line}></div>
    </div>
  );
};

export default SeparatorWithText;
