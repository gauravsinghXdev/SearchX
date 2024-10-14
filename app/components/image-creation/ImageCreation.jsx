"use client";

import React, { useState } from 'react';
import { IoIosRefresh } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { HiMiniPhoto } from "react-icons/hi2";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaShareAlt, FaTrash, FaEllipsisV } from 'react-icons/fa';
import styles from '@/styles/ImageCreation.module.css';
import Image from 'next/image';
import frame1 from '../../../public/frame1.png';
import frame2 from '../../../public/frame2.png';
import frame31 from '../../../public/frame3-1.png';
import frame32 from '../../../public/frame3-2.png';
import frame33 from '../../../public/frame3-3.png';
import frame34 from '../../../public/frame3-4.png';
import image1 from '../../../public/image1.png';
import image2 from '../../../public/image2.png';
import image3 from '../../../public/image3.png';
import image4 from '../../../public/image4.png';
import image5 from '../../../public/image5.png';
import image6 from '../../../public/image6.png';
import image7 from '../../../public/image7.png';
import image8 from '../../../public/image8.png';
import image9 from '../../../public/image9.png';
import image10 from '../../../public/image10.png';
import image11 from '../../../public/image11.png';
import image12 from '../../../public/image12.png';

const myCreationsData = [
  {
    title: "Crypto AI Illustrations",
    prompt: "Generate creative AI-based illustrations for crypto marketing.",
    images: [
      frame1, frame1, frame1,frame1
    ]
  },
  {
    title: "VR Headset Illustrations",
    prompt: "VR headset futuristic illustrations.",
    images: [
      frame2, frame2, frame2, frame2,
    ]
  },
  {
    title: "Cat Concept Mobile App",
    prompt: "Mobile app UI concept for cat lovers.",
    images: [
      frame31,
      frame32,
      frame33,
      frame34,
    ] 
  }
];



const ImageCreation = () => {
  const [isMyCreations, setIsMyCreations] = useState(true);

  

  return (
    <div className={styles.imageCreationSection}>
      <div className={styles.topbar}>
        <span
          style={{ borderBottomColor: isMyCreations ? "#6949FF" : "transparent" }}
          onClick={() => setIsMyCreations(true)}
        >
          <HiMiniPhoto />
          My Creations
        </span>
        <span
          style={{ borderBottomColor: !isMyCreations ? "#6949FF" : "transparent" }}
          onClick={() => setIsMyCreations(false)}
        >
          <MdOutlinePhotoLibrary />
          Inspirations
        </span>
      </div>

      <div className="p-4">
        {isMyCreations ? (
          <div className={styles.myCreations}>
            <div className={styles.creationGallery}>
            {myCreationsData.map((creation, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.creationText}>
              <div className="flex gap-2 items-center mb-1">
                <p>{creation.prompt}</p>
                <IoIosRefresh className={styles.icon} />
                <IoCopyOutline className={styles.icon} />
              </div>
              <div className={styles.icons}>
                <FaShareAlt className={styles.icon} />
                <FaTrash className={styles.icon} />
                <FaEllipsisV className={styles.icon} />
              </div>
            </div>
            <div className={styles.images}>
              {creation.images.map((image, idx) => (
                <Image
                  key={idx}
                  src={image}
                  alt={creation.title}
                  className={styles.creationImage}
                />
              ))}
            </div>
          </div>
        ))}
            </div>
          </div>
        ) : (
          
          <div>
          <div className={styles.imageContainer}>
           <div className={styles.combineimage}> 
            <Image src={image1} className={styles.image}/>
            <Image src={image7} />
            <Image src={image8} />
           </div>  

           <div className={styles.combineimage}>
            <Image src={image2} />
            <Image src={image3} />
            <Image src={image9} />
           </div>

           <div className={styles.combineimage}>
           <Image src={image4} />
           <Image src={image10} />

           </div>

           <div className={styles.combineimage}>
           <Image src={image5} />
           <Image src={image6} />
            <Image src={image11} />
            <Image src={image12} />
           </div>

          </div>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCreation;


