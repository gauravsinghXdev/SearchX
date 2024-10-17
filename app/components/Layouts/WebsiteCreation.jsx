import React from 'react';
import styles from "@/styles/tools/tools.module.css";
import VideoCreationNavbar from '../VideoCreation/VideoCreationNavbar';

const WebsiteCreation = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <VideoCreationNavbar title="Website Creation" />
      <div className={styles.section}>
        {children}
      </div>
    </div>
  );
};

export default WebsiteCreation;
