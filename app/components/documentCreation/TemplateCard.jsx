
import Image from 'next/image'; 
import styles from "@/styles/documentCreation/documentCreationFirst.module.css";


const TemplateCard = ({ image, title, onClick }) => (
  <div className={styles.templeteImgBox} onClick={onClick}>
    <Image src={image} alt={title} className="rounded-lg" />
    <p className="text-center text-white mt-2">{title}</p>
  </div>
);


export default TemplateCard;
