import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/footer/footer.module.css";
import slogo from "@/public/Home/slogo.png";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer} w-full text-[#c1c1c1] mb-10`}>
        <div className={`${styles.first} `}>
          <Image src={slogo} alt={"logo img"} />
          <p>Searchpad ©. All rights reserved</p>
        </div>
        <div className={`${styles.second} `}>
          <span className="text-[16px] font-[400] mb-4">AI Tools</span>
          <div className={`${styles.secondIn} `}>
            <ul className="flex flex-col gap-7 opacity-85">
              <li>Image creation</li>
              <li>Voice Over</li>
              <li>Document creation</li>
              <li>Ad Creative</li>
              <li>Slide creation</li>
            </ul>
            <ul className="flex flex-col gap-7 opacity-85">
              <li>Video creation</li>
              <li>Idea Generation</li>
              <li>Graphic design</li>
              <li>Website UI</li>
              <li>Date visualization</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.third} `}>
          <div className=" flex gap-[8rem]">
            <ul className="flex flex-col gap-7 opacity-85">
              <li>
                <span className="text-[16px] font-[400] mb-4">Product</span>
              </li>
              <li>API</li>
              <li>Pricing</li>
            </ul>

            <ul className="flex flex-col gap-7 opacity-85">
              <li>
                <span className="text-[16px] font-[400] mb-4">Product</span>
              </li>
              <li>API</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className={`${styles.icons}`}>
            <BiLogoFacebookSquare width={24} height={24} />
            <RiTwitterXLine />
            <CiLinkedin />
            <AiFillTikTok />
            <FaTelegramPlane />
            <FaYoutube />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
