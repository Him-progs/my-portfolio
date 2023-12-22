// pages/index.js

import React from 'react';
import styles from '../styles/MainPage.module.css';
import MainHeader from '@/components/header';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <MainHeader/>
      </div>

      <section className={styles.about}>
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I'm a passionate web developer with a focus on creating
          responsive and user-friendly web applications.
        </p>
      </section>

      <section className={styles.projects}>
        <h2>Projects</h2>
        {/* Add your project cards or showcase here */}
      </section>

      <section className={styles.contact}>
        <h2>Contact Me</h2>
        <p>
          Let's connect! Feel free to reach out to me through email or social media.
        </p>
        {/* Add your contact information or form here */}
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
