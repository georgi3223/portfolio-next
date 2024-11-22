import Link from 'next/link';
import React from 'react';
import styles from '../styles/Projects.module.scss';

const Projects = () => {
  return (
    <div id='projects' className={styles.container}>
      <div className={styles.content}>
        <p className={styles.sectionTitle}>Projects</p>
        <h2 className={styles.heading}>What I&apos;ve Built</h2>
        <div className={styles.grid}>
          <div className={styles.projectItem}>
            <div className={styles.info}>
              <h3 className={styles.title}>Rent House with Spring Boot</h3>
              <p className={styles.description}>A fully functional rent house application built with Spring Boot.</p>
              <Link href="https://github.com/georgi3223/rent-house-spring-boot">
                <p className={styles.moreInfo}>Github Link</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
