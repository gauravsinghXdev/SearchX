"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import styles from "../../../styles/sidebar/toolsHomeSidebar.module.css";
import robot from "../../../public/robo.png";
import Image from "next/image";
import { LuSearch } from "react-icons/lu";
import tokenleft from "../../../public/tokenleft.png";
import imageCreation from "../../../public/imageCreation.png";
import framerobo from "../../../public/framerobo.png";
import marketing from "../../../public/marketing.png";
import videoCreation from "../../../public/videoCreation.png";
import adCreation from "../../../public/adCreation.png";
import visualization from "../../../public/visualization.png";
import voiceover from "../../../public/voiceover.png";
import idea from "../../../public/idea.png";
import documents from "../../../public/documents.png";
import portfolio from "../../../public/portfolio.png";
import weddingshoot from "../../../public/weddingshoot.png";
import funding from "../../../public/funding.png";
import home from "../../../public/home.png";
import { IoHomeOutline } from "react-icons/io5";
import homes from "../../../public/icons/home-06.png";
import myinspretion from "../../../public/icons/myInspretion.png";
import image from "../../../public/icons/image.png";
import videocreation from "../../../public/icons/videocreation.png";
import mic from "../../../public/icons/mic.png";
import ideas from "../../../public/icons/idea.png";
import document from "../../../public/icons/document.png";
import graphics from "../../../public/icons/graphics.png";
import adcreatives from "../../../public/icons/adcreatives.png";
import webdesign from "../../../public/icons/webdesign.png";
import slide from "../../../public/icons/slide.png";
import chartrose from "../../../public/icons/chart-rose.png";
import crown from "../../../public/icons/crown.png";
import profile from "../../../public/profile.png";
import logospad from "../../../public/logospad.png";
import green from "../../../public/green.png";
import logoss from "../../../public/icons/logo.png";
import aiIcon from "../../../public/icons/aiIcon.png";
import forwordicon from "../../../public/icons/forwordicon.png";
import Link from "next/link";

export default function ToolsHomeSidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>
          <Image
            src={logoss}
            alt="Logo Spad"
            style={{ width: "40px", height: "40px" }}
          />
          <h1 className={styles.logoHeading}>Searchpad</h1>
          <Image
            src={forwordicon}
            style={{ width: "15px", height: "15px" }}
            alt="forword icon"
            className={styles.forwordicon}
          />
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.listItem}>
            {" "}
            <Image src={homes} alt="Image" /> Home{" "}
          </li>

          <li className={styles.listItem}>
            <Image src={myinspretion} alt="Image" /> Creations
          </li>

          <li className={styles.listItem}>
            <Image src={myinspretion} alt="Image"/> Inspirations
          </li>

          <div className={styles.dropdown}>
            <h2 className={styles.headingss}>AI Tools</h2>
            <select className={styles.fontSelects}>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <li className={styles.listItem}>
            <Image src={image} alt="Image"/>
            Image Creation
          </li>

          <li className={styles.listItem}>
            <Image src={videocreation} alt="Image"/>
            Video Creation
          </li>

          <li className={styles.listItem}>
            <Image src={mic} alt="Image"/>
            Voiceover
          </li>

          <li className={styles.listItem}>
            <Image src={ideas} alt="Image"/>
            Idea Generation
          </li>

          <li className={styles.listItem}>
            <Image src={document} alt="Image"/>
            Document Creation
          </li>

          <div className="flex items-center">
            <div className="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
            <span className={styles.middleheadiing}>Data & Visualization</span>
            <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
          </div>

          <li className={styles.listItem}>
            <Image src={graphics} alt="Image"/>
            Graphic Design
          </li>

          <li className={styles.listItem}>
            <Image src={adcreatives} alt="Image"/>
            Ad Creative
          </li>

          <li className={styles.listItem}>
            <Image src={webdesign} alt="Image" />
            Website UI
          </li>

          <li className={styles.listItem}>
            <Image src={slide} alt="Image"/>
            Slide Creation
          </li>

          <li className={styles.listItem}>
            <Image src={chartrose} alt="Image"/>
            Data VisualiZation
          </li>
        </ul>

        <div className={styles.upgradeSection}>
          <Image src={crown} className={styles.crown} alt="Image"/>
          <h1 className={styles.headingss}>
            Unlock the full power of Generative AI
          </h1>
          <p className={styles.paragraphss}>Go limitless with Searchpad</p>
          <button className={styles.upgradeButton}>
            <span className={styles.upgradetext}>Upgrade Plan</span>
          </button>
        </div>

        <div className={styles.profileContainer}>
          <Image src={profile} alt="Profile" className={styles.profileImage} />
          <h1 className={styles.profileName} onClick={toggleDropdown}>
            Sanusilamide
            <FaChevronDown className={styles.icon} />
          </h1>
          {isDropdownOpen && (
            <ul className={styles.dropdownList}>
              <li className={styles.dropdownItem}>Option 1</li>
              <li className={styles.dropdownItem}>Option 2</li>
              <li className={styles.dropdownItem}>Option 3</li>
            </ul>
          )}
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.topBar}>
          <div className={styles.tokenContainer}>
            <Image
              src={tokenleft}
              alt="token icon"
              className={styles.tokenImage}
            />
            <p className={styles.paragraph}>25 Tokens Left</p>
          </div>

          <div className={styles.buttons}>
            <div className={styles.searchContainer}>
              <LuSearch width={16} height={16} />
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}></button>
            </div>

            <button className={styles.generateButton}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  src={aiIcon}
                  alt="AI Icon"
                  style={{ marginRight: "8px" }}
                />
                <p className={styles.paragraph}>Generate With AI</p>
              </div>
            </button>
            <button className={styles.createButton}>
              <p className={styles.paragraph}>+ Create New</p>
            </button>
          </div>
        </div>
        <header className={styles.header}>
          <div className={styles.textContainer}>
            <h1>
              Ready to start your next<br></br> visual project?
            </h1>
            <p>
              Create stunning designs, documents, and data<br></br>{" "}
              visualizations—AI makes it easy.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image src={robot} alt="robo" width={342} height={342} />
          </div>
        </header>

        <section className={styles.toolsSection}>
          <h2 className={styles.headings}>
            {" "}
            Create stunning designs, documents, and data visualizations—AI makes
            it easy.
          </h2>
          <div className={styles.toolsContainer}>
          <Link href=''>
            <div className={styles.toolCard}>
              <Image src={imageCreation} className={styles.toolsimage} alt="Image"/>
              <h1 className={styles.design}>Image Creation</h1>
            </div>
            </Link>
            <div className={styles.toolCard}>
              <Image src={videoCreation} className={styles.toolsimage} alt="Image"/>
              <h1 className={styles.design}>Video Creation</h1>
            </div>
            <div className={styles.toolCard}>
              <Image src={adCreation} className={styles.toolsimage} alt="Image" />
              <h1 className={styles.design}>Ad Creative</h1>
            </div>
            <div className={styles.toolCard}>
              <Image src={visualization} className={styles.toolsimage} alt="Image"/>
              <h1 className={styles.design}>Design & Visualization</h1>
            </div>
            <Link href='/voiceOver'>
            <div className={styles.toolCard}>
              <Image src={voiceover} className={styles.toolsimage} alt="Image"/>
              <h1 className={styles.design}>Voiceover</h1>
            </div>
            </Link>
            <div className={styles.toolCard}>
              <Image src={idea} className={styles.toolsimage} alt="Image"/>
              <h1 className={styles.design}>Idea Generation</h1>
            </div>
            <div className={styles.toolCard}>
              <Image src={documents} className={styles.toolsimage} alt="Image"/>
              <h1 className={styles.design}>Document Creation</h1>
            </div>
          </div>
        </section>

        <section className={styles.reationsSectionc}>
          <h2 className={styles.heading}> My Creations</h2>
          <div className={styles.creationsContainer}>
            <div className={styles.creationCard}>
              <Image
                src={framerobo}
                alt="ai chat"
                className={styles.roboimage}
              />
              <h1>Logo Design Brief</h1>
              <p>2mins ago</p>
            </div>
            <div className={styles.creationCard}>
              <Image
                src={framerobo}
                alt="ai Chat"
                className={styles.roboimage}
              />
              <h1>Social Media Content Calendar</h1>
              <p>10 hrs</p>
            </div>
            <div className={styles.creationCard}>
              <Image
                src={marketing}
                alt="marketing"
                className={styles.roboimage}
              />
              <h1>Marketing Campaign</h1>
              <p>24 hrs agos</p>
            </div>
            <div className={styles.creationCard}>
              <Image
                src={framerobo}
                alt="ai Chat"
                className={styles.roboimage}
              />
              <h1>Branding strategy guide</h1>
              <p>3 days go</p>
            </div>
          </div>

          <div className={styles.creationsContainer}>
            <div className={styles.creationCard}>
              <Image
                src={portfolio}
                alt="ai chat"
                className={styles.roboimage}
              />
              <h1>Logo Design Brief</h1>
              <p>2 week ago</p>
            </div>
            <div className={styles.creationCard}>
              <Image
                src={weddingshoot}
                alt="ai Chat"
                className={styles.roboimage}
              />
              <h1>Social Media Content Calendar</h1>
              <p>2 week ago</p>
            </div>
            <div className={styles.creationCard}>
              <Image
                src={funding}
                alt="marketing"
                className={styles.roboimage}
              />
              <h1>Marketing Campaign</h1>
              <p>2 week ago</p>
            </div>
            <div className={styles.creationCard}>
              <Image
                src={framerobo}
                alt="ai Chat"
                className={styles.roboimage}
              />
              <h1>Branding strategy guide</h1>
              <p>2 week ago</p>
            </div>
          </div>

          <div className={styles.creationsContainer}>
            <div className={styles.creationCard}>
              <Image
                src={framerobo}
                alt="ai chat"
                className={styles.roboimage}
              />
              <h1>Logo Design Brief</h1>
              <p>2 mins ago</p>
            </div>
            <div className={styles.creationCard}>
              <Image src={home} alt="ai Chat" className={styles.roboimage} />
              <h1>Social Media Content Calendar</h1>
              <p>10 hrs</p>
            </div>
            <div className={styles.creationCard}>
              <Image src={green} alt="marketing" className={styles.roboimage} />
              <h1>Marketing Campaign</h1>
              <p>24 hrs agos</p>
            </div>
            <div className={styles.creationCard}>
              <Image
                src={framerobo}
                alt="ai Chat"
                className={styles.roboimage}
              />
              <h1>Branding strategy guide</h1>
              <p>3 days go</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
