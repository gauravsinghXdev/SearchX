import React from 'react';
import VideoCreationNavbar from '../VideoCreation/VideoCreationNavbar'
import VoiceCreationSidebar from '../sidebars/VoiceOverSidebar';

import styles from "@/styles/tools/tools.module.css"

const  AdsCreative = ({ children }) => {
  return (
    <div style={{ display: "flex" ,flexDirection: "column" }}>
      <VideoCreationNavbar title="Ads Creative"/>
     
        <div className={styles.section}>
          {children}
        </div>
      </div>
    // </div>
  );
};

export default AdsCreative;