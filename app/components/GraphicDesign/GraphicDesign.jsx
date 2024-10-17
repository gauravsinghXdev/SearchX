import styles from '../../../styles/GaphicsDesign/GraphicsDesign.module.css';
import Image from 'next/image';
import Link from "next/link";
import frame1 from '../../../public/graphics/frame1.png';
import frame2 from '../../../public/graphics/frame2.png';
import frame3 from '../../../public/graphics/Frame3.png';
import frame4 from '../../../public/graphics/frame4.png';
import frame5 from '../../../public/graphics/frame5.png';
import frame6 from '../../../public/graphics/frame6.png';


const GraphicDesign = () => {
  return (
    <>
   
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Create stunning graphic <br></br>designs effortlessly with AI
        </h1>
        <p className={styles.subtitle}>
          Quickly craft designs that captivate and communicate your vision clearly.
        </p>
      </header>

      <Link href={'/graphicstool'}>
      <section className={styles.section}>
        <div className={styles.headingRow}>
          <h2 className={styles.sectionHeading}>Marketing & Promotional Graphics</h2>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.card}>
           <Image src={frame1} className={styles.box2} alt='image'/>
            <h1 className={styles.heading }>Blank Layout</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame1} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Flayers</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame1} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Brochures</h1>
        </div>
          

        <div className={styles.card}>
        <Image src={frame1} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Banners</h1>
        </div>

        <div className={styles.card}>
            <Image src={frame1} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Social Media Posts</h1>
        </div>
        </div>

        <div className={styles.flexContainer}>
        <div className={styles.card}>
           <Image src={frame1} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Advertisements</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame1} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Emain Campaign</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame1} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Event Invitations</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame1} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Coupons or Vouchers</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame1} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Blank Layout</h1>
        </div>
        </div>

        <div className={styles.headingRow}>
          <h2 className={styles.sectionHeading}>Branding & Corporate Identity Graphics</h2>
        </div>
        <div className={styles.flexContainer}>
       

        <div className={styles.card}>
         
            <Image src={frame2} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Business Cards</h1>
        </div>

        <div className={styles.card}>
            <Image src={frame2} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Letterheads</h1>
        </div>

        <div className={styles.card}>
            <Image src={frame2} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Employee ID Cards</h1>
        </div>

        <div className={styles.card}>
            <Image src={frame2} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Press Kits</h1>
        </div>
     </div>


     <div className={styles.headingRow}>
          <h2 className={styles.sectionHeading}>Social Media & Digital Content Graphics</h2>
        </div>
        <div className={styles.flexContainer}>
       

        <div className={styles.card}>
            
            <Image src={frame3} className={styles.box2} alt='ima' />
            <h1 className={styles.heading }>Cover Photos/Banners</h1>
        </div>

        <div className={styles.card}>
            <Image src={frame3} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Highlights Covers</h1>
        </div>

        <div className={styles.card}>
            
            <Image src={frame3} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>YouTube Thumbnails</h1>
        </div>

        <div className={styles.card}>
            
            <Image src={frame3} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Podcast Cover Art</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame3} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Memes</h1>
        </div>
     </div>


     <div className={styles.headingRow}>
          <h2 className={styles.sectionHeading}> Print & Physical Graphics</h2>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.card}>         
            <Image src={frame4} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Book Covers</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame4} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Magazines</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame4} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Newspaper Ads</h1>
        </div>
          

        <div className={styles.card}>
           <Image src={frame4} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Menus</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame4} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Product Labels</h1>
        </div>
        </div>

        <div className={styles.flexContainer}>
        <div className={styles.card}>
        <Image src={frame4} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Stickers</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame4} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Postcards</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame4} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Album or CD Covers</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame4} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Tickets</h1>
        </div>
       </div>



       <div className={styles.headingRow}>
          <h2 className={styles.sectionHeading}> Event & Conference Graphics</h2>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.card}>
          <Image src={frame5} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Event Programs</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame5} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Conference Badges</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame5} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Stage Backdrops</h1>
        </div>
          

        <div className={styles.card}>
        <Image src={frame5} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Event Tickets</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame5} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Roll-up Banners</h1>
        </div>
        </div>

        <div className={styles.flexContainer}>
        <div className={styles.card}>
        <Image src={frame5} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Name Tags</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame5} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Directional Signage</h1>
        </div>

      
        </div>

        
        <div className={styles.headingRow}>
          <h2 className={styles.sectionHeading}>Informational & Public Service Graphics </h2>
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.card}>
       
            <Image src={frame6} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Posters for Awareness 
            Campaigns</h1>
        </div>

        <div className={styles.card}>
           <Image src={frame6} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Government Notices</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame6} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Health and Safety 
            Posters</h1>
        </div>
          

        <div className={styles.card}>
        <Image src={frame6} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Traffic Signage</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame6} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Public Service 
            Announcements</h1>
        </div>
        </div>

        <div className={styles.flexContainer}>
        <div className={styles.card}>
        <Image src={frame6} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Maps (event layouts, 
                city maps)</h1>
        </div>

        <div className={styles.card}>
        <Image src={frame6} className={styles.box2} alt='ima'/>
            <h1 className={styles.heading }>Brochures for Public 
            Information</h1>
        </div>

       
        </div>

      </section>
      </Link>
    </div>
    </>
  );
};

export default GraphicDesign;
