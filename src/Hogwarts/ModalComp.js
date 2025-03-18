import React from 'react'
import styles from './hogwarts.module.css'

const ModalComp = ({isOpen, onClose, content}) => {
  if (!isOpen || !content) return null
console.log(content.image)
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <figure className={styles.modalFigure}>
          <img src={content.image} alt={content.title} />
        </figure>

        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
    </div>
  );
}

export default ModalComp