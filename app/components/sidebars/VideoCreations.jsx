"use client"; 
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../../../styles/sidebar/videoCreation.module.css';
import robot from '../../../public/robo.png';
import Image from 'next/image';
import { LuSearch } from "react-icons/lu";
import tokenleft from '../../../public/tokenleft.png';
import framerobo from '../../../public/framerobo.png';
import marketing from '../../../public/marketing.png';
import portfolio from '../../../public/portfolio.png';
import weddingshoot from '../../../public/weddingshoot.png';
import funding from '../../../public/funding.png';
import homes from '../../../public/icons/home-06.png';
import myinspretion from '../../../public/icons/myInspretion.png';
import crown from '../../../public/icons/crown.png';
import profile from '../../../public/profile.png';
import logospad from '../../../public/logospad.png';

import logoss from '../../../public/icons/logo.png';
import green from '../../../public/green.png';
import graphicsimage from '../../../public/videoCreation/graphics.png';
import adcreativeimage from '../../../public/videoCreation/adCreative.png';
import presentationimage from '../../../public/videoCreation/presentation.png';
import websideDesign from '../../../public/videoCreation/websideDesign.png';
import dataVisualization from '../../../public/videoCreation/dataVisualization.png';
import { FaArrowLeftLong } from "react-icons/fa6";

const VideoCreationPage = () => {
    
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };
// back arrow 

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back(); 
    } else {
      window.location.href = '/'; 
    }
    };

  return (
    <>
  <div className={styles.navsection}>
  <div className={styles.logo}>

  <div className={styles.arrowIcon} onClick={handleBack} style={{ cursor: 'pointer' }}>
    <FaArrowLeftLong style={{ width: '16px', height: '16px' }} className={styles.arrow} />
  </div>
    <Image src={logoss} alt="Logo Spad" style={{ width: '40px', height: '40px' }} />
    <h1 className={styles.logoHeading}>Searchpad</h1>
  </div>
 
  
  <div className={styles.buttons}>
    <div className={styles.tokenContainer}>
      <Image src={tokenleft} alt="token icon" className={styles.tokenImage} />
      <p className={styles.paragraph}>25 Tokens Left</p>
    </div>
    <button className={styles.createButtons}>
      <Image src={crown} className={styles.crownButton} alt="Image" /> <p className={styles.paragraph}>Upgrade</p>
    </button>
  </div>
</div>


    <div className={styles.container}>
     <nav className={styles.sidebar}>
      <ul className={styles.navLinks}>
          
        <li className={styles.listItem}> <Image src={homes} alt="Image"/>  Home </li>
         
        <li className={styles.listItem}><Image src={myinspretion} alt="Image"/> Templates</li>

        <li  className={styles.listItem}><Image src={myinspretion} alt="Image"/> Projects</li>

      </ul>

       
<div className={styles.upgradeSection}>
  <Image src={crown} className={styles.crown} alt="Image"/>
  <h1 className={styles.headingss}>Unlock the full power of Generative AI</h1>
  <p className={styles.paragraphss}>Go limitless with Searchpad</p>
  <button className={styles.upgradeButton}>Upgrade Plan</button>
</div>

<div className={styles.profileContainer}>
      <Image src={profile} alt="Profile" className={styles.profileImage} />
      <h1 className={styles.profileName} onClick={toggleDropdown}>
        Sanusilamide
        <FaChevronDown className={styles.icon} /> 
      </h1>
      {/* {isDropdownOpen && (
        <ul className={styles.dropdownList}>
          <li className={styles.dropdownItem}>Option 1</li>
          <li className={styles.dropdownItem}>Option 2</li>
          <li className={styles.dropdownItem}>Option 3</li>
        </ul>
      )} */}
    </div>
 </nav>

<main className={styles.mainContent}>
<header className={styles.header}>
  <div className={styles.textContainer}>
    <h1>Ready to start your next<br></br> visual project?</h1>
    <p>Create stunning designs, documents, and data<br></br> visualizations—AI makes it easy.</p>
  </div>
  <div className={styles.imageContainer}>
    <Image src={robot} alt="robo" width={342} height={300} />
  </div>
</header>


        <section className={styles.toolsSection}>
         <div className={styles.searchContainer}>
              <LuSearch width={16} height={16}/> 
                  <input type="text" placeholder="Search..." className={styles.searchInput} />
                <button className={styles.searchButton}></button>
          </div>

          <div className={styles.toolsContainer}>
            <div className={styles.toolCard}><Image src={graphicsimage} className={styles.toolsimage} alt="Image"/>
            <h1 className={styles.design}>Graphic Design</h1></div>
            <div className={styles.toolCard}><Image src={adcreativeimage} className={styles.toolsimage} alt="Image"/>
            <h1 className={styles.design}>Ad Creative</h1></div>
            <div className={styles.toolCard}><Image src={presentationimage} className={styles.toolsimage} alt="Image"/>
            <h1 className={styles.design}>Presentation</h1></div>
            <div className={styles.toolCard}><Image src={ websideDesign} className={styles.toolsimage} alt="Image"/>
            <h1 className={styles.design}>Webside Design</h1></div>
            <div className={styles.toolCard}><Image src={ dataVisualization} className={styles.toolsimage} alt="Image"/>
            <h1 className={styles.design}>Data Visualization</h1></div>
          </div>
        </section>

        <section className={styles.reationsSectionc}>
          <h2 className={styles.heading}> My Creations</h2>

          <div className={styles.creationsContainer}>
            <div className={styles.creationCard}>
              <Image src={framerobo} alt='ai chat' className={styles.roboimage} />
              <h1>Logo Design Brief</h1>
              <p>2mins ago</p>
            </div>
            <div className={styles.creationCard}>
              <Image src={framerobo} alt='ai Chat' className={styles.roboimage} />
              <h1>Social Media Content Calendar</h1>
              <p>10 hrs</p>
            </div>
            <div className={styles.creationCard}>
              <Image src={marketing} alt='marketing'  className={styles.roboimage} />
              <h1>Marketing Campaign</h1>
              <p>24 hrs agos</p>
            </div>
            <div className={styles.creationCard}>
            <Image src={framerobo} alt='ai Chat'  className={styles.roboimage} />
              <h1>Branding strategy guide</h1>
              <p>3 days go</p>
            </div>
            <div className={styles.creationCard}>
              <Image src={funding } alt='marketing'  className={styles.roboimage} />
              <h1>Marketing Campaign</h1>
              <p>2 week ago</p>
            </div>
            <div className={styles.creationCard}>
            <Image src={framerobo} alt='ai Chat'   className={styles.roboimage} />
              <h1>Branding strategy guide</h1>
              <p>2 week ago</p>
            </div>
          </div>


         {/* <div className={styles.mainContents}> */}
          <div className={styles.creationsContainer}>
            <div className={styles.creationCard}>
              <Image src={portfolio} alt='ai chat'  className={styles.roboimage} />
              <h1>Logo Design Brief</h1>
              <p>2 week ago</p>
            </div>
            <div className={styles.creationCard}>
              <Image src={weddingshoot} alt='ai Chat' className={styles.roboimage} />
              <h1>Social Media Content Calendar</h1>
              <p>2 week ago</p>
            </div>
            <div className={styles.creationCard}>
              <Image src={funding } alt='marketing'  className={styles.roboimage} />
              <h1>Marketing Campaign</h1>
              <p>2 week ago</p>
            </div>
            <div className={styles.creationCard}>
            <Image src={framerobo} alt='ai Chat'   className={styles.roboimage} />
              <h1>Branding strategy guide</h1>
              <p>2 week ago</p>
            </div>
            <div className={styles.creationCard}>
              <Image src={funding } alt='marketing'  className={styles.roboimage} />
              <h1>Marketing Campaign</h1>
              <p>2 week ago</p>
            </div>
            <div className={styles.creationCard}>
            <Image src={green} alt='ai Chat'   className={styles.roboimage} />
              <h1>Branding strategy guide</h1>
              <p>2 week ago</p>
            </div>
          </div>
          {/* </div> */}
       </section>
      </main>
    </div>
    </>
  );
}
export default VideoCreationPage;