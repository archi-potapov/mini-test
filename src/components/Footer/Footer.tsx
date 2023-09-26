import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.spliter}>
        <div className={styles.splitterText}>
          <div className={styles.ellipse}></div>
          <a href="#main">Листать наверх</a>
        </div>
        <div className={styles.graphics}></div>
      </div>
      <div className={styles.links}>
        <div className={styles.mainLinks}>
          <a href="/" className={styles.karanikolaStudioLink}>
            Karanikola.<span className={styles.studioSpan}>Studio</span>
          </a>
          <a href="tel:+7 978 76-52-980">+7 978 76-52-980</a>
          <a href="/">Работы студии</a>
        </div>
        <div className={styles.socialMedia}>
          <a href="/" target="_blank" className={styles.socialMediaButton}>
            Behance
          </a>
          <a href="/" target="_blank" className={styles.socialMediaButton}>
            Dprofile
          </a>
          <a href="/" target="_blank" className={styles.socialMediaButton}>
            Instagram
          </a>
          <a href="/" target="_blank" className={styles.socialMediaButton}>
            Telegram
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>Евгений Караникола. все права защищены.</span>
        <span>©2023</span>
      </div>
    </footer>
  );
};
