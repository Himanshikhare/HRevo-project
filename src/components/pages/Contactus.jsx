import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { motion } from 'framer-motion';

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

     // Scroll to top when the component is mounted
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    const [feedback, setFeedback] = useState({ status: '', message: '' });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFeedback({ status: '', message: '' }); // Reset feedback

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFeedback({ status: 'success', message: 'Your message has been sent successfully!' });
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
            } else {
                setFeedback({ status: 'error', message: 'Something went wrong. Please try again later.' });
            }
        } catch (error) {
            setFeedback({ status: 'error', message: 'An error occurred. Please try again later.' });
        }
    };



    return (
        <div>
            <Navbar />
            <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  >

            {/* Main container with responsive padding and background */}
            <div className=" mt-20 px-4 sm:px-6 lg:px-8 py-10 bg-gray-100 flex justify-center items-center min-h-screen">

                <div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Name field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {/* Subject field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {/* message field */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                    {/* Feedback message */}
                    {feedback.status && (
                        <div
                            className={`mt-4 p-2 rounded-lg text-center ${feedback.status === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                                }`}
                        >
                            {feedback.message}
                        </div>
                    )}
                </div>

                {/* Company Info & Map */}
                <div className="space-y-5">
                    {/* Company Info */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <p className="text-gray-600 mb-2">123 HRevo Tower, Indore, India</p>
                        <p className="text-gray-600 mb-2">Phone: +1 (123) 000-12121</p>
                        <p className="text-gray-600 mb-2">Email: contact@hrevo.com</p>
                    </div>

                    {/* Embedded Map */}
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2926671429797!2d75.84705047480182!3d22.719568631466756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc993e74f16d%3A0x946d9824564c2a16!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1615453333751!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-2xl"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600 text-2xl"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900 text-2xl"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-700 text-2xl"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

            </div>

            <Footer />
            </motion.div>
        </div>




    )
}

export default Contactus