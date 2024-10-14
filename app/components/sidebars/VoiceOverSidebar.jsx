"use client";

import React, { useState } from "react";
import styles from "@/styles/VoiceOver/VoiceOverSidebar.module.css";
import Image from "next/image";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { TbPhotoVideo } from "react-icons/tb";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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
        <div className={styles.mediaediting}>
          <p>AI Media Editing</p>
          {/* Dropdown for Voiceover */}
          <div className={styles.mediaDropdown} onClick={toggleDropdown}>
            <IoImageOutline className={styles.menuIcon} />
            <span>Voiceover</span>
            {/* Dropdown arrow (changes based on open/close state) */}
            {isDropdownOpen ? (
              <FaChevronUp className={styles.dropdownArrow} />
            ) : (
              <FaChevronDown className={styles.dropdownArrow} />
            )}
          </div>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li>
                <Link href={"/voiceover"}>Voiceover</Link>
              </li>
              <li>
                <Link href={"/video-creation"}>Video Creation</Link>
              </li>
            </ul>
          )}
        </div>
        <ul className={styles.sidebarMenu}>
          <Link href={"/tools"}>
            <li>
              <IoImageOutline className={styles.menuIcon} />
              {isOpen && <span>Text-to-Speech</span>}
            </li>
          </Link>
          <Link href={"/tools/media-library"}>
            <li>
              <TbPhotoVideo className={styles.menuIcon} />
              {isOpen && <span>Voice Changer</span>}
            </li>
          </Link>
          <Link href={"/tools/media-library"}>
            <li>
              <TbPhotoVideo className={styles.menuIcon} />
              {isOpen && <span>My Creations</span>}
            </li>
          </Link>
          {/* <li className={styles.plugins}>{isOpen && <span>Plugins</span>}</li> */}
          <ul className={styles.subMenu}>
            <Link href={"/tools/voices"}>
              <li>
                <MdOutlineKeyboardVoice className={styles.menuIcon} />
                {isOpen && <span>Samples</span>}
              </li>
            </Link>
          </ul>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
