"use client"
import React, { useState } from 'react';
import styles from '@/styles/ImageCreation.module.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import crownn from '../../../public/icon/crownn.png';
import Image from 'next/image';

const Inspirationsidebar = () => {
  const [numImages, setNumImages] = useState(4);

  return (
    <div className={styles.sidebar}>
      <input 
        type="text" 
        placeholder="Type a prompt" 
        className={styles.promptInput} 
      />
      
      <button className={styles.generateButton}>Generate</button>

      <div className={styles.section}>
        <label className={styles.label}>Artistic Style</label>
        <button className={styles.optionButton}>Realisti <MdKeyboardArrowRight/></button>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Color Palette</label>
        <button className={styles.optionButton}>Monochromatic <IoIosArrowForward/></button>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Resolution</label>
        <div className={styles.buttonGroup}>
          <button className={styles.optionButtons}>Low <span className={styles.spantext}>720p</span></button>
          <button className={styles.optionButtons}>Medium <span className={styles.spantext}>1080p</span></button>
          <button className={styles.optionButtons}>High <span className={styles.spantext}>4K</span></button>
        </div>
     
      </div>

      

      <div className={styles.section}>
        <label className={styles.label}>Aspect Ratio</label>
        <div className={styles.buttonGroup}>
          <button className={styles.optionButtonsbox}><div className={styles.box1}></div> <span className={styles.spantext}>2:3</span></button>
          <button className={styles.optionButtonsbox}><div className={styles.box2}></div><span className={styles.spantext}>1:1</span></button>
          <button className={styles.optionButtonsbox}><div className={styles.box3}></div><span className={styles.spantext}>4K</span></button>
        </div>
        <button className={styles.customSizeButton}>Custom size</button>
      </div>


      <div className={styles.section}>
        <label className={styles.label}>Number of Images</label>
        <div className={styles.imageCount}>
          <button 
            className={styles.counterButton} 
            onClick={() => setNumImages(numImages > 1 ? numImages - 1 : 1)}
          >-</button>
          <span className={styles.counterDisplay}>{numImages}</span>
          <button 
            className={styles.counterButton} 
            onClick={() => setNumImages(numImages + 1)}
          >+</button>
        </div>
      </div>

        <div className={styles.flexContainer}>
           <h>More tools</h>
            <MdKeyboardArrowDown />
        </div>
      </div>
  );
};

export default Inspirationsidebar;
