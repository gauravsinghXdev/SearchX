// components/ToolsHomeLayout.tsx
import React from 'react';
import VideoCreationNavbar from '../VideoCreation/VideoCreationNavbar'
import VideoCreationSidebar from '../sidebars/VideoCreationSidebar';

import styles from "@/styles/tools/tools.module.css"

const ToolsHomeLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" ,flexDirection: "column" }}>
      <VideoCreationNavbar title="Video Creation"/>
      <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
        <VideoCreationSidebar />
        <div className={styles.section}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ToolsHomeLayout;
