"use client"

import React, { useState } from 'react';
import styles from '@/styles/ImageCreation.module.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import crownn from '../../../public/icon/crownn.png';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";



const ImageCreationSidebar = () => {
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
        <button className={styles.optionButtoncolor}>Monochromatic <IoIosArrowForward className={styles.ioiosicon}/></button>
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
           <h className={styles.moreoption}>More tools</h>
            <MdKeyboardArrowDown />
        </div>
  
     <div className={styles.section}>
        <label className={styles.label}>Depth of Field</label>
        <div className={styles.buttonGroup}>
          <button className={styles.optionButtons}>Shallow</button>
          <button className={styles.optionButtons}>Deep</button>
          <button className={styles.optionButtons}>Medium</button>
        </div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Lighting</label>
        <button className={styles.optionButton}>Bright <MdKeyboardArrowRight/></button>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Texture</label>
        <button className={styles.optionButton}>Smooth<MdKeyboardArrowRight/></button>
      </div>

     
<div className={styles.section}>
  <label className={styles.label}>Focus Area</label>
  <div className={styles.buttonGroup4}>
    <button className={styles.optionButtons4}>Central</button>
    <button className={styles.optionButtons4}>Off-center</button>
    <button className={styles.optionButtons4}>Symmetrical</button>
    <button className={styles.optionButtons4}> Rule of Thirds</button>
  </div>
</div>

      <div className={styles.section}>
        <label className={styles.label}>Primary Focus</label>
        <button className={styles.optionButton}>Human<MdKeyboardArrowRight/></button>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>character Presence</label>
        <div className={styles.buttonGroup4}>
        <button className={styles.optionButtons4}>Human figures</button>
          <button className={styles.optionButtons4}>Anlmas </button>
          <button className={styles.optionButtons4}>No Characters </button>
        </div>
      </div>

       <div className={styles.section}>
        <label className={styles.label}>Scene Seting</label>
        <button className={styles.optionButton}>indoor<MdKeyboardArrowRight/></button>
      </div>

      
       <div className={styles.section}>
        <label className={styles.label}>Pattern Density</label>
        <div className={styles.buttonGroup}>
          <button className={styles.optionButtons}>Minimal</button>
          <button className={styles.optionButtons}>Moderate</button>
          <button className={styles.optionButtons}>High</button>
        </div>
     

       <div className={styles.section}>
        <label className={styles.label}>Mood</label>
        <button className={styles.optionButton} >cheerful<MdKeyboardArrowRight className={styles.arowicons}/>
        {/* <Image src={crownn} alt='crowwn' className={styles.crownicon}/> */}
        </button>
       </div>
       
      </div>
    </div>
  );
};

export default ImageCreationSidebar;
