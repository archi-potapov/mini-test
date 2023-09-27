import React from "react";
import styles from "./Main.module.css";
import Image from "next/image";

export const Main = () => {
  return (
    <main id={"main"} className={styles.container}>
      <section className={styles.applicationForm}>
        <div className={styles.photoWrapper}>
          <Image
            src="/images/authorPhoto.jpg"
            alt="Author Photo"
            width={525}
            height={687}
          />
        </div>
        <div className={styles.formWrapper}>
          <h2 className={styles.aboutText}>
            Если у вас есть{" "}
            <span className={styles.aboutTextHighlighting}>
              общий запрос или запрос по проекту, пожалуйста, напишите мне
            </span>{" "}
            по электронной почте или заполните форму — доступна сейчас.
          </h2>
          <form
            action=""
            name="application form"
            autoComplete="on"
            className={styles.form}
          >
            <div className={styles.inputsWrapper}>
              <input
                type="text"
                placeholder="Стас Васильев"
                maxLength={32}
                className={styles.textInput}
              />
              <input
                type="tel"
                placeholder="+7 ___ ___ - __ - __"
                maxLength={12}
                className={styles.textInput}
              />
            </div>
            <input type="submit" className={styles.submitButton} value="Отправить заявку"/>
          </form>
        </div>
      </section>
    </main>
  );
};
