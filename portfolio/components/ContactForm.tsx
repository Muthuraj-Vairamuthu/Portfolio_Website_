'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');

    try {
      await emailjs.send(
        'your_service_id', // Replace with your EmailJS Service ID
        'your_template_id', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'your_public_key' // Replace with your EmailJS Public Key
      );
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send the message. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-backgroundLight py-16 text-textPrimary">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Get In Touch</h2>
        <p className="text-center mb-12">Let’s connect and build something great together!</p>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        {success && <p className="text-center text-green-500 mb-4">Message sent successfully!</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-opacity-80 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
