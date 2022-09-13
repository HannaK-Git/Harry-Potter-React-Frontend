import React, {useState} from 'react';
import styles from "./accordion.module.css"


const AccordionComp = ({ heading, content }) => {


  const [isActive, setIsActive] = useState(false);


  return (
    <>
    <li className={styles.accordionItem}>
      <div className={styles.accordionToggle} onClick={() => setIsActive(!isActive)}>
        <h3>{heading}</h3>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className={styles.accordionContent}>{content}</div>}
    </li>
    </>
    );
};

  
  


export default AccordionComp;