import React from "react";
import Image from "next/image";

// Import for CSS
import styles from "@/styles/VoiceOver/VoiceOver.module.css";
import docIcon from "@/public/VoiceOver/docIcon.png";
import brochure from "@/public/VoiceOver/brochure.png";
import starIcon from "@/public/VoiceOver/star.png";
import Shape from "@/public/VoiceOver/shape.png";
import arrow from "@/public/VoiceOver/arrow.png";
import coins from "@/public/VoiceOver/coins.png";
import crown from "@/public/VoiceOver/crown.png";
const WebsiteDesign = () => {
  const samplePrompts = [
    "Create a modern portfolio website for a graphic designer with bold visuals and smooth navigation",
    "Design a clean and professional website for a tech startup offering cloud services",
    "Generate a responsive e-commerce website for a clothing brand, featuring a sleek product gallery",
    "Build a minimalist blog website with easy-to-read typography and a light theme",
    "Create a landing page for a marketing agency with vibrant colors and animated sections",
    "Design a restaurant website with a focus on showcasing the menu and customer reviews",
  ];

  return (
    <>
      <div className={styles.voiceOverContainer}>
        <nav className={styles.navbar}>
          <p className={styles.logo}>Madelyn Torff</p>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#">Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="#projects">Projects</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.heroContainer}>
          <div className={styles.leftContent}>
            <div className={styles.leftmain}>
              <p className={styles.para}>UI/UX Designer</p>
              <h1 className={styles.heroHeading}>
                Hello, my name <br /> is Madelyn Torff
              </h1>
              <p className={styles.para2}>
                Short text with details about you, what you <br /> do or your
                professional career. You can add <br /> more information on the
                about page.
              </p>
              <div className={styles.btn}>
                <button className={styles.projectBtn}>Projects</button>
                <button className={styles.linkdinBtn}>LinkedIn</button>
              </div>
            </div>
          </div>
          <div className={styles.rightImg}>
            <Image src={heroImg} />
          </div>
        </div>

        {/* project setion start */}
      </div>
      <div className={styles.ProjectmainDiv}>
        <div className={styles.projectContainer}>
          <h1 className={styles.projectHeading}>Projects</h1>
          <div className={styles.container}>
            <div className={styles.centerLine}></div>
          </div>
        </div>

        {/* project box 1 */}
        <div className={styles.containerBox}>
          <div className={styles.leftbox}>
            <h2 className={styles.projectName}>Project Name</h2>
            <p className={styles.projectpara}>
              I created this personal project in order to show how to create an
              interface in Figma using a portfolio as an example.
            </p>
            <button className={styles.projectBtnn}>View Project</button>
          </div>
          <div className={styles.boxImg}>
            <Image src={projectImg}></Image>
          </div>
        </div>
        {/* project box 1 */}
        {/* project box 2 */}
        <div className={`${styles.containerBox} ${styles.anotherClass}`}>
          <div className={styles.boxImg}>
            <Image src={RectangleImg}></Image>
          </div>
          <div className={`${styles.leftbox} ${styles.leftbox2}`}>
            <h2 className={styles.projectName}>Project Name</h2>
            <p className={styles.projectpara}>
              What was your role, your deliverables, if the project was
              personal, freelancing.
            </p>
            <button className={styles.projectBtnn}>View Project</button>
          </div>
        </div>
        {/* project box 2 */}

        {/* project box 3 */}
        <div className={styles.containerBox}>
          <div className={`${styles.leftbox} ${styles.leftbox3}`}>
            <h2 className={styles.projectName}>Project Name</h2>
            <p className={styles.projectpara}>
              You can also add in this description the type of the project, if
              it was for web, mobile, electron.
            </p>
            <button className={styles.projectBtnn}>View Project</button>
          </div>
          <div className={styles.boxImg}>
            <Image src={Rectangle2Img}></Image>
          </div>
        </div>
        {/* project box 3 */}

        <div className={styles.socialMedia}>
          <div className={styles.socialcontainer}>
            <Image
              src={instaImg}
              width={34.32}
              height={34.32}
              className={styles.socialIcon}
            />
            <Image
              src={linkedinImg}
              width={34.32}
              height={34.32}
              className={styles.socialIcon}
            />
            <Image
              src={emailImg}
              width={34.32}
              height={34.32}
              className={styles.socialIcon}
            />
          </div>
          <div className={styles.footername}>
            <p>Madelyn Torff 2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteDesign;
