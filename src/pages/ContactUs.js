import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './ContactUs.css';

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted. We will get back to you soon!');
    // Handle form submission, like sending an email or storing the message
  };

  return (
    <div>
      <Navbar />
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <p>
          We value your feedback and inquiries. Please feel free to reach out to us using the form below.
          Whether you have a question, suggestion, or concern, we are here to help and will respond as soon as possible.
        </p>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={contact.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Your Message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                value={contact.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
