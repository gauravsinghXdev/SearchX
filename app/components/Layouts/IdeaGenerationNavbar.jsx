import React from 'react';
import VideoCreationNavbar from '../VideoCreation/VideoCreationNavbar'

import styles from "@/styles/tools/tools.module.css"

const IdeaGenerationNavbar = ({ children }) => {
  return (
    <div style={{ display: "flex" ,flexDirection: "column" }}>
      <VideoCreationNavbar title="Idea Generation"/>
        <div className={styles.section}>
          {children}
        </div>
      </div>

  );
};

export default IdeaGenerationNavbar;