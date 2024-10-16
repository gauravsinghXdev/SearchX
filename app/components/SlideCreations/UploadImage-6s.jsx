import React from 'react';
import style from '@/styles/SlideCreation/UploadImage.module.css';
import Image from 'next/image';

const sections = [
  { id: 1, label: 'Section 1', imgSrc: '/SlideCreation/slider1.png' },
  { id: 2, label: 'Section 2', imgSrc: '/SlideCreation/slider2.png' },
  { id: 4, label: 'Section 4', imgSrc: '/SlideCreation/slider3.png' },
  { id: 5, label: 'Section 5', imgSrc: '/SlideCreation/slider4.png' },
  // { id: 'custom', label: 'Image', imgSrc: '/SlideCreation/slider1.png' },
];

const UploadImage = () => {
  return (
    <div className={style.container}>
      <p className={style.title}>Upload images and apply them to relevant slide sections.</p>
      <div className={style.sectionsContainer}>
        <div className={style.firstBox}>
          <div className={style.addSection}>+</div>
        </div>
        <div className={style.sectionBox}>
          <div className={style.addSectionContainer}>+
          </div>
          <div className={style.sectionLabel}>Add Section</div>
        </div>
        {sections.map((section) => (
          <div key={section.id} className={style.sectionBox}>
            <Image src={section.imgSrc} alt={section.label} width={136} height={132} className={style.sectionImage} layout='responsive' />
            <p className={style.sectionLabel}>{section.label}</p>
          </div>
        ))}
        <div className={style.lastBox}>
          <div className={style.addSection}>
            <Image
              src="/SlideCreation/slider5.png"
              alt="robo"
              width={136}
              height={132}
              layout='responsive'
              className={style.imageIcon}
            />
          </div>
          <div className={style.sectionLabel}>Imag</div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
