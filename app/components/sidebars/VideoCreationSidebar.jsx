"use client";

import React, { useState } from "react";
import styles from "@/styles/VideoCreation/VideoCreationSidebar.module.css";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { RiFolderShield2Line } from "react-icons/ri";
import { SlMenu } from "react-icons/sl"; // Menu Icon
import { AiOutlineAppstoreAdd } from "react-icons/ai"; // Add Plugin Icon
import { TbLayoutGridAdd } from "react-icons/tb";
import { AiOutlineFileImage } from "react-icons/ai"; // Media Library Icon
import { BiHistory } from "react-icons/bi"; // History Icon
import { MdKeyboardVoice } from "react-icons/md";
import { RiVipCrown2Line } from "react-icons/ri";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage the toggle

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <ul className={styles.sidebarMenu}>
          <Link href={"/tools"}>
            <li>
              <AiOutlineHome className={styles.menuIcon} />
              {isOpen && <span>Home</span>}
            </li>
          </Link>
          <Link href={"/tools/media-library"}>
            <li>
              <RiFolderShield2Line className={styles.menuIcon} />
              {isOpen && <span>My Creations</span>}
            </li>
          </Link>
          {/* <li className={styles.plugins}>{isOpen && <span>Plugins</span>}</li> */}
          <ul className={styles.subMenu}>
            <Link href={"/tools/voices"}>
              <li>
                <RiFolderShield2Line className={styles.menuIcon} />
                {isOpen && <span>Inspirations</span>}
              </li>
            </Link>
          </ul>
        </ul>

        <div className={styles.upgradeSection}>
          <div className={styles.upgradeContent}>
            <RiVipCrown2Line className={styles.upgradeIcon} />
            <p className={styles.upgradeText}>
              Unlock the full power of <br />
              Generative AI
            </p>
            <p className={styles.upgradeSubText}>Go limitless with Searchpad</p>
            <button className={styles.upgradeButton}>Upgrade Plan</button>
          </div>
        </div>
        </div>
       <div className={styles.userProfile}>
          <Image
            src="/Images/VideoCreation/User.png" // Replace with the actual image path
            alt="User Profile"
            width={40}
            height={40}
            // layout="responsive"
            className={styles.profileImage}
          />
          {isOpen && <span>Sanusilamide</span>} {/* Add the user name */}
        </div> 
      
    </aside>
  );
};

export default Sidebar;
