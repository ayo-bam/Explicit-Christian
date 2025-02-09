import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'Simi2019@', // Replace with your EmailJS Service ID
      'template_n3h3kuv', // Replace with your EmailJS Template ID
      formData,
      'FJLDv7bDiVUblEov2'   // Replace with your EmailJS Public Key
    )
    .then(
      () => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.error(error.text);
        alert('Failed to send message. Try again later.');
      }
    );
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
