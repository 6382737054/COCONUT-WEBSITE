
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <p className="text-lg mb-4">Feel free to reach out to us through the following channels:</p>
            <div className="contact-details">
              <p className="text-lg mb-2">Email: Prasanna.es11@gmail.com</p>
              <p className="text-lg mb-2">Phone: +91-6382737054</p>
              <p className="text-lg">Address: 123 Coconut Street, Tropicana City, CO 12345</p>
            </div>
            <div className="social-media-icons mt-6 flex justify-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-green-600">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg mb-2">Name:</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg mb-2">Email:</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg mb-2">Message:</label>
                <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded-lg" required></textarea>
              </div>
              <button type="submit" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
