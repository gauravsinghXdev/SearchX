"use client";
import React from 'react';
import styles from "@/styles/ImageCreation.module.css";
import Image from 'next/image';
import { FaArrowLeftLong } from "react-icons/fa6";
import coins from '../../../public/icon/coins-01.png';
import crown from '../../../public/icon/crown.png';
import logoss from '../../../public/icons/logo.png';

const ImageCreationNavbar = () => {

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
      
        <div className={styles.arrowIcon} onClick={handleBack} style={{ cursor: 'pointer' }}>
          <FaArrowLeftLong />
        </div>
        {/* Logo Image */}
        <Image src={logoss} alt="Logo Spad" width={40} height={40} />
        <h1 className={styles.logoHeading}>SearchX</h1>
      </div>

      {/* Center Heading */}
      <div>
        <h1 className={styles.centerHeading}>Image Generator</h1>
      </div>

      {/* Right Content */}
      <div className={styles.rightcontaint}>
        <Image src={coins} alt="Coins Icon" width={25} height={25} />
        <h1 className={styles.heading}>25 Tokens Left</h1>
        <button className={styles.button}>
          <Image src={crown} alt="Crown Icon" width={25} height={25} />
          <span className={styles.heading}>Upgrade</span>
        </button>
      </div>
    </div>
  );
};

export default ImageCreationNavbar;
