import styles from '../../../styles/Add-Creative/Input.module.css';
import { FiPlus } from "react-icons/fi";

  const InpuText = () => {
  return (
    <>
       <div class="flex items-center">
          <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
           <h1  className={styles.middleSection}>Design copy</h1>

          <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
        </div>

     
     <div className={styles.container}>

      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label>Header Text</label>
          <input type="text" placeholder="e.g Summer Clearance Sale"  className={styles.inputplaceholder}/>
        </div>
        
        <div className={styles.formGroup}>
          <label>Subheader</label>
          <input type="text" placeholder="Up to 50% off on all items!" className={styles.inputplaceholder}/>
        </div>

        <div className={styles.formGroup}>
          <label>Body Text</label>
          <input type="text"  className={styles.inputplaceholder} placeholder="e.g Don't miss our biggest sale of the season! Everything from clothing to accessories is available at huge discounts. " />
        </div>

        <div className={styles.formGroup}>
          <label>Call to Action (CTA)</label>
          <input type="text" placeholder="e.g shop Now at www.yourstore.com" className={styles.inputplaceholder}/>
        </div>

        <div className={styles.formGroup}>
        <label>Contact Information</label>
        <div className={styles.formGroupRow}>
         <input type="text" placeholder="e.g Phone: 555-123-4567" className={styles.inputplaceholder}/>
          <input type="email" placeholder="e.g Email: info@yourstore.com" className={styles.inputplaceholder}/>
          <input type="text" placeholder="e.g hop Now at www.yourstore.com" className={styles.inputplaceholder}/>
        </div>
        </div>

        <div className={styles.formGroup}>
          <label>Call to Action (CTA)</label>
          <input type="text" placeholder="e.g shop Now at www.yourstore.com" className={styles.inputplaceholder}/>
        </div>

        <div className={styles.addMore}>
          <button className={styles.button}>+  <span className={styles.spantext}>Add more</span> </button>
        </div>
      </div>
      </div>
      <div className={styles.footer}>
       
        <div class="flex items-center">
          <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
           <h1  className={styles.middleSection}>Preferences</h1>
          <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
        </div>
        
      </div>
  
    </>
  );
}
export default InpuText;