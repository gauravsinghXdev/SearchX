"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/IdeaGenerationFour/IdeaGenerationFour.module.css"; // Adjust to your actual path
import { BsThreeDotsVertical } from "react-icons/bs";
import icon from "@/public/IdeaGeneration/messageIcon.png"; // Your icon path
import ChatBox from "./ChatBox"; // Make sure you have this component
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";

const IdeaGenerationChatUi = () => {
  const [chats, setChats] = useState([
    "What services could merge fin...",
    "How can education be made...",
    "What tools could improve e-co...",
    "What opportunities arise when...",
    "How can a SaaS platform be i...",
    "What innovative features could...",
    "How can AI transform custome...",
    "What new design trends could...",
  ]);

  const [lastMonthChats, setLastMonthChats] = useState([
    "How can AI transform custome...",
    "How can a SaaS platform be i...",
    "What new design trends could...",
    "What innovative features could...",
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null); // Single state to manage both dropdowns
  const chatBoxRef = useRef(null);

  const handleNewSearch = () => {
    const chatMessage = `New Chat: ${new Date().toLocaleTimeString()}`;
    const truncatedChatMessage = chatMessage.split(" ").slice(0, 5).join(" ");
    setChats([truncatedChatMessage, ...chats]);

    if (chatBoxRef.current) {
      chatBoxRef.current.focus();
    }
  };

  // Toggle dropdown visibility for "Today's Chats" or "Last Month Chats"
  const toggleDropdown = (index, type) => {
    if (activeDropdown?.type === type && activeDropdown?.index === index) {
      // If the same dropdown item is clicked, hide it
      setActiveDropdown(null);
    } else {
      // Otherwise, show the clicked dropdown and hide the other
      setActiveDropdown({ index, type });
    }
  };

  return (
    <>
<div className="max-h-screen bg-[#1C1C1C] flex gap-[180px] lg:gap-[100px] md:gap-[0px] sm:gap-[0px]">        {/* Left Sidebar */}
        <div className={`${styles.sidebar}`}>
          {/* Search History List */}
          <div className={styles.searchHistoryList}>
            <button className={styles.newSearchButton} onClick={handleNewSearch}>
              + New Search
            </button>
          </div>

          {/* Today's Chats */}
          <div className={styles.todayChat}>
            <div className={styles.para}>
              <p>Today</p>
            </div>
            <div className={`${styles.todayChatAll} max-h-[400px] overflow-y-auto`}>
              {chats.map((chatText, index) => (
                <div key={index} className={styles.chatpara}>
                  <Image src={icon} alt="User Avatar" width={16.67} height={16.67} />
                  <p>{chatText}</p>
                  <BsThreeDotsVertical
                    className={styles.threeDotsIcon}
                    onClick={() => toggleDropdown(index, "today")} // Toggle dropdown for today's chats
                  />
                  {activeDropdown?.type === "today" && activeDropdown?.index === index && (
                    <div
                      className={`${styles.dropdown} backdrop-blur-md`} // Added backdrop blur
                    
                    >
                      <div className={styles.dropdownItem}>
                        <span className={styles.icon}>
                          <FiShare2 />
                        </span>
                        <span className={styles.text}>Share</span>
                      </div>
                      <div className={styles.dropdownItem}>
                        <span className={styles.icon}>
                          <BiEditAlt />
                        </span>
                        <span className={styles.text}>Edit</span>
                      </div>
                      <div className={styles.dropdownItem}>
                        <span className={styles.icon}>
                          <MdDeleteOutline />
                        </span>
                        <span className={styles.text}>Delete</span>
                      </div>
                    </div>
                  )}
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
              {lastMonthChats.map((chatText, index) => (
                <div key={index} className={styles.chatpara} style={{ position: "relative" }}>
                  <Image src={icon} alt="User Avatar" width={16.67} height={16.67} />
                  <p>{chatText}</p>
                  <BsThreeDotsVertical
                    className={styles.threeDotsIcon}
                    onClick={() => toggleDropdown(index, "lastMonth")} // Toggle dropdown for last month's chats
                  />
                  {activeDropdown?.type === "lastMonth" && activeDropdown?.index === index && (
                    <div
                      className={`${styles.dropdown} backdrop-blur-md`} // Added backdrop blur
                    
                    >
                      <div className={styles.dropdownItem}>
                        <span>Share</span>
                      </div>
                      <div className={styles.dropdownItem}>
                        <span>Edit</span>
                      </div>
                      <div className={styles.dropdownItem}>
                        <span>Delete</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.rightcontainer}>
            <ChatBox ref={chatBoxRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default IdeaGenerationChatUi;
