"use client";
import styles from "@/styles/VideoCreation/VideoCreatioNavbar.module.css";
import { RiVipCrownLine } from "react-icons/ri";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Image from "next/image";
import { BsDatabaseFill } from "react-icons/bs";

const Navbar = ({ title }) => {

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back(); 
    } else {
      window.location.href = '/'; 
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navItems}>
        <div className={styles.arrowIcon} onClick={handleBack} style={{ cursor: 'pointer' }}>
          <FaLongArrowAltLeft />
          <Image
            src={'/Images/logos/Searchpad.png'}
            alt="Logo"
            className={styles.logoImage}
            width={120}
            height={70}
            layout="responsive"
          />
        </div>
        <div>{title}</div>
        <div className={styles.rightSection}>
          <div className={styles.upgradeSection}>
            <BsDatabaseFill className={styles.token} />
            <button className={styles.tokensbtn}>25 tokens left</button>
          </div>
          <div className={styles.upgradeSection}>
            <RiVipCrownLine className={styles.upgradeIcon} />
            <Link href="/pricing">
              <button className={styles.upgradeButton}>Upgrade</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
