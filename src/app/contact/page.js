import React from 'react';
import styles from '@/styles/contact.module.scss';

const Contact = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contact</h1>

      <form className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />

        <button type="submit">Send</button>
      </form>
    </main>
  );
};

export default Contact;
