"use client";

import React, { useState } from "react";
import styles from "@/styles/VoiceOver/VoiceOverSidebar.module.css";
import Image from "next/image";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { TbPhotoVideo } from "react-icons/tb";
import { RiVoiceprintFill } from "react-icons/ri";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        
        <ul className={styles.sidebarMenu}>
          <Link href={"/tools"}>
            <li>
              <IoImageOutline className={styles.menuIcon} />
              {isOpen && <span>Text-to-Speech</span>}
            </li>
          </Link>
          <Link href={"/tools/media-library"}>
            <li>
              <RiVoiceprintFill className={styles.voiceIcon} />
              {isOpen && <span>Voices</span>}
            </li>
          </Link>
          <Link href={"/tools/media-library"}>
            <li>
              <TbPhotoVideo className={styles.menuIcon} />
              {isOpen && <span>My Creations</span>}
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
