import React, { useState } from "react";
import "../style.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <section className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Fill out the form below and we'll be in touch shortly.</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;