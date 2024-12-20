import React from 'react';
import styles from '../styles/Skills.module.scss'; 

const Skills = () => {
  return (
    <div id='skills' className={styles.container}>
      <div className={styles.content}>
        <p className={styles.sectionTitle}>Skills</p>
        <h2 className={styles.heading}>What I Can Do</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.label}>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>             
              <div className={styles.label}>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>             
              <div className={styles.label}>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>             
              <div className={styles.label}>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>            
              <div className={styles.label}>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}> 
            <h3>PHP</h3>            
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>            
              <div className={styles.label}>
                <h3>Laravel</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
