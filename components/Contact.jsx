import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactImg from '../public/assets/contact.jpg';
import styles from '../styles/Contact.module.scss';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setStatus('An error occurred. Please try again.');
        }
      );

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.title}>Contact</p>
        <h2 className={styles.subtitle}>Get In Touch</h2>
        <div className={styles.gridContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.leftContent}>
              <div>
                <Image className={styles.contactImage} src={ContactImg} alt="/" />
              </div>
              <div>
                <h2 className={styles.name}>Georgi Nyagolov</h2>
                <p className={styles.role}>Web Developer</p>
                <p className={styles.availability}>
                  I am available for intern and junior positions. You can contact me for more information.
                </p>
              </div>
              <div>
                <p className={styles.connect}>Connect With Me</p>
                <div className={styles.iconsContainer}>
                  <a href="https://github.com/georgi3223" target="_blank" rel="noreferrer">
                    <div className={styles.icon}>
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.rightContainer}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
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
            {status && <p className={styles.status}>{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
