"use client"; 
import React from "react";
import Image from "next/image";
import styles from "@/styles/IdeaGenerationFour/IdeaGenerationFour.module.css"
import { BsThreeDotsVertical } from "react-icons/bs";
import icon from "@/public/IdeaGeneration/messageIcon.png";
import ChatBox from "./ChatBox";

const IdeaGenerationChatUi = () => {
  return (
    <>
      <div className="min-h-screen bg-[#1C1C1C] flex gap-[180px]">
        {/* Left Sidebar */}
        <div className={`${styles.sidebar}`}>
          {/* Search History List */}
          <div className={styles.searchHistoryList}>
            <button className={styles.newSearchButton}> + New Search</button>
          </div>

          {/* Today's Chats */}
          <div className={styles.todayChat}>
            <div className={styles.para}>
              <p>Today</p>
            </div>
            <div className={styles.todayChatAll}>
              {["What services could merge fin...", "How can education be made...", "What tools could improve e-co...", "What opportunities arise when...", "How can a SaaS platform be i...", "What innovative features could...", "How can AI transform custome...", "What new design trends could..."].map((chatText, index) => (
                <div key={index} className={styles.chatpara}>
                  <Image src={icon} alt="User Avatar" width={16.67} height={16.67} />
                  <p>{chatText}</p>
                  <BsThreeDotsVertical className={styles.threeDotsIcon} />
                </div>
              ))}
            </div>
          </div>

          {/* Last Month Chats */}
          <div className={styles.todayChat}>
            <div className={styles.para}>
              <p>Last Month (September)</p>
            </div>
            <div className={styles.todayChatAll}>
              {["How can AI transform custome...", "How can a SaaS platform be i...", "What new design trends could...", "What innovative features could..."].map((chatText, index) => (
                <div key={index} className={styles.chatpara}>
                  <Image src={icon} alt="User Avatar" width={16.67} height={16.67} />
                  <p>{chatText}</p>
                  <BsThreeDotsVertical className={styles.threeDotsIcon} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.rightcontainer}>
            <div className={styles.questionuser}>
              <p className={styles.questionText}>
                What services could merge finance and health for better personal management?
              </p>
              {/* You can use Next.js Image component here as well */}
              <Image src={icon} alt="User Avatar" className={styles.avatarImage} width={50} height={50} />
            </div>
            <ChatBox/>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeaGenerationChatUi;
