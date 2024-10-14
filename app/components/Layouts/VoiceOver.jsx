// components/ToolsHomeLayout.tsx
import React from 'react';
import VideoCreationNavbar from '../VideoCreation/VideoCreationNavbar'
import VoiceCreationSidebar from '../sidebars/VoiceOverSidebar';

import styles from "@/styles/tools/tools.module.css"

const ToolsHomeLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" ,flexDirection: "column" }}>
      <VideoCreationNavbar title="Voice Creation"/>
      <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <VoiceCreationSidebar />
        <div className={styles.section}>
          {/* <VoiceCreationSidebar/> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ToolsHomeLayout;
