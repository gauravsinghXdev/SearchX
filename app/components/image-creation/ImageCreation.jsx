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
import { FiCopy } from "react-icons/fi";
import { VscRegex } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { LiaDownloadSolid } from "react-icons/lia";
import { GrShareOption } from "react-icons/gr";

const myCreationsData = [
  {
    title: "Crypto Ai Illustration with coins flying around red and gold as the theme color adds a crypto human robot",
    prompt: "Generate creative AI-based illustrations for crypto marketing.",
    images: [
      frame1, frame1, frame1,frame1
    ]
  },
  {
    title: "A image showing a black female wearing vr headset in front of a cyberpunk city environment, layered gestures, dark purple and light amber, industrialization, realistic perspective, glass as material, high resolution -",
    prompt: "VR headset futuristic illustrations.",
    images: [
      frame2, frame2, frame2, frame2,
    ]
  },
  {
    title: "Cat concept mobile app",
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
  const [selectedImage, setSelectedImage] = useState(null); // Track clicked image
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  const handleImageClick = (image) => {
    setSelectedImage(image); // Set clicked image
  };
  
  const closeModal = () => {
    setSelectedImage(null); // Close modal
  };

// cross window


const handleCloseModal = () => {
  setIsModalOpen(false); // Hides the modal when clicked
};

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
                      onClick={() => handleImageClick(image)} // Handle image click
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
                <Image src={image1} className={styles.image} alt='Image' onClick={() => handleImageClick(image1)} />
                <Image src={image7} alt='Image' onClick={() => handleImageClick(image7)} />
                <Image src={image8} alt='Image' onClick={() => handleImageClick(image8)} />
              </div>  

              <div className={styles.combineimage}>
                <Image src={image2} alt='Image' onClick={() => handleImageClick(image2)} />
                <Image src={image3} alt='Image' onClick={() => handleImageClick(image3)} />
                <Image src={image9} alt='Image' onClick={() => handleImageClick(image9)} />
              </div>

              <div className={styles.combineimage}>
                <Image src={image4} alt='Image' onClick={() => handleImageClick(image4)} />
                <Image src={image10} alt='Image' onClick={() => handleImageClick(image10)} />
              </div>

              <div className={styles.combineimage}>
                <Image src={image5} alt='Image'onClick={() => handleImageClick(image5)} />
                <Image src={image6} alt='Image' onClick={() => handleImageClick(image6)} />
                <Image src={image11} alt='Image' onClick={() => handleImageClick(image11)} />
                <Image src={image12} alt='Image' onClick={() => handleImageClick(image12)} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for image popup */}
     

      {selectedImage && (
      <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
      <div className={styles.imageSection}>
        <Image src={selectedImage} alt="Selected" className={styles.selectedImage} />
      </div>

     <div className={styles.contentSection}>
    <div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.crossIcon} onClick={handleCloseModal}>
            <RxCross1 />
          </div>
          <p>This is the modal content!</p>
        </div>
      )}
      </div>

        <h1>Cat Concept Mobile App</h1>
        <button className={styles.mobileApp}>Cat concept mobile app</button>

       <div className={styles.buttonscopy}>
      <button className={styles.primaryButton}>
        <FiCopy /> Copy Prompt
      </button>
      <button className={styles.secondaryButton}>
        <VscRegex /> Regenerate
      </button>
    </div>

<h2 className={styles.mainHeading}>Rendering Preferences</h2>
<div className={styles.flexContainers}>
  <p className={styles.para}>
    <span className={styles.labelText}>Style</span> 
    <span className={styles.valueText}>Resolution</span>
  </p>

  <h1>
    <span className={styles.labelText1}>Anime Fantasy</span>
    <span className={styles.valueText1}>4K</span>
  </h1>

  <p className={styles.para}>
    <span className={styles.labelText}>Lighting </span> 
    <span className={styles.valueText}>Color Mode</span>
  </p>

  <h1>
    <span className={styles.labelText1}>Dynamic Lighting </span>
    <span className={styles.valueText1}>Vibrant</span>
  </h1>

  <p className={styles.para}>
    <span className={styles.labelText}>Cemera Angle </span> 
    <span className={styles.valueText}>Background</span>
  </p>

  <h1>
    <span className={styles.labelText1}>Medium Close</span>
    <span className={styles.valueText1}>Lush Nature</span>
  </h1>
  
  <p className={styles.para}>
    <span className={styles.labelText}>Depth of Field</span> 
    <span className={styles.valueText}>Mood</span>
  </p>

  <h1>
    <span className={styles.labelText1}>Shallow Depth of Field </span>
    <span className={styles.valueText1}>Epic & Mysterious</span>
  </h1>

  <p className={styles.para}>
    <span className={styles.labelText}>Aspect Ratio</span> 
  </p>

  <h1>
    <span className={styles.labelText1}>1:1</span>
  
  </h1>
</div>

       <div className={styles.actionButtons}>
  <button className={styles.downloadButton} onClick={closeModal}>
    <LiaDownloadSolid className={styles.icon} /> Download
  </button>
  <button className={styles.closeButton} onClick={closeModal}>
    <GrShareOption className={styles.icon} /> Share
  </button>
</div>

      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default ImageCreation;

