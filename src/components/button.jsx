import React from 'react';
import styles from '../styles/button.module.css';
import { MdArrowOutward } from "react-icons/md";

function CommonButton({ text }) {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <span>{text}</span>
        <MdArrowOutward className={styles.icon} />
      </div>
    </div>
  );
}

export default CommonButton;
