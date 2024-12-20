import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import ContactImg from '../public/assets/contact.jpg';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.title}>Contact</p>
        <h2 className={styles.subtitle}>Get In Touch</h2>
        <div className={styles.gridContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.leftContent}>
              <Image className={styles.contactImage} src={ContactImg} alt="Contact" />
              <h2 className={styles.name}>Georgi Nyagolov</h2>
              <p className={styles.role}>Web Developer</p>
              <p className={styles.availability}>
                I am available for intern and junior positions. Feel free to reach out!
              </p>
              <p className={styles.connect}>Connect With Me</p>
              <a href="https://github.com/georgi3223" target="_blank" rel="noreferrer">
                <div className={styles.icon}>
                  <FaGithub />
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.rightContainer}>
            <form
              action="https://formsubmit.co/georginyagolov33@gmail.com"
              method="POST"
              className={styles.contactForm}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
