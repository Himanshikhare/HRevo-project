import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add logic to handle the subscription (e.g., API call)
        console.log('Subscribed email:', email);
        alert('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <div className='flex flex-col md:flex-row flex-wrap gap-10 bg-black text-white p-8'>
            {/*div 1*/}
            <div className="flex-1 space-y-4">
                <img src="public\Hrevo Logo.png" className="h-16 w-auto mx-auto md:mx-0"></img>
                
                <p className="text-sm md:text-base leading-relaxed">HRevo is an innovative, all-in-one platform designed to streamline and optimize your Human Resource operations. Developed by a team of industry experts, HRevo enables businesses of all sizes to automate and simplify HR processes, from recruitment and onboarding to performance management and payroll.</p>
                
                <div className="flex justify-center md:justify-start space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500 transition" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-500 transition" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-blue-500 transition" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} className="text-2xl hover:text-red-500 transition" />
                    </a>
                </div>
            </div>

            {/*div 2*/}
            <div className="flex-1">
                <h2 className="text-lg md:text-xl font-semibold mb-4">Home</h2>
                <ul className="space-y-2 ">

                    <li className="mt-5"><FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-2 transition-transform"
                    /><Link to="/"><h2 className="hover:underline hover:cursor-pointer">Overview</h2></Link>
                    </li>

                    <li className="mt-5"><FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-2 transition-transform"
                    /><Link to="/Contactus"><h2 className="hover:underline hover:cursor-pointer">Contact Us</h2></Link>
                    </li>
                </ul>
            </div>

            {/*div 3*/}
            <div className="flex-1">
                <h2 className="text-lg md:text-xl font-semibold mb-4">HR Features</h2>
                <ul className="space-y-2 ">

                    <li className="mt-5"><FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-2 transition-transform"
                    /><Link to="/Corehr"><h2 className="hover:underline hover:cursor-pointer">Core HR</h2></Link>
                    </li>

                    <li className="mt-5"><FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-2 transition-transform"
                    /><Link to="/Payroll"><h2 className="hover:underline hover:cursor-pointer">Payroll Management</h2></Link>
                    </li>
        
                    <li className="mt-5"><FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-2 transition-transform"
                    /><Link to="/AIpage"><h2 className="hover:underline hover:cursor-pointer">AI Recommendation</h2></Link>
                    </li>
                    
                </ul>
            </div>

            {/*div 4*/}
            <div className="mt-1">
                <h2 className="text-white text-lg font-semibold mb-4">Subscribe to Our Newsletter</h2>
                <form
                    className="flex flex-row sm:flex-row gap-4"
                    onSubmit={handleSubscribe}
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-30 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[blue]"
                        required
                    />

                </form>
                <button
                    type="submit"
                    className="px-20 py-2 mt-10 bg-[blue] hover:bg-blue-500 text-white font-bold rounded"
                >
                    Subscribe
                </button>

                {/* Contact Section */}
                <div className="flex flex-col mt-6">
                    {/* Address */}
                    <div className="flex items-center gap-4 mb-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg text-blue-500" />
                        <div>
                            <h3 className="font-bold text-md">Our Address</h3>
                            <p>123 HRevo Tower, Indore, India</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4 mb-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-lg text-blue-500" />
                        <div>
                            <h3 className="font-bold text-md">Email Us</h3>
                            <p>contact@hrevo.com</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4 mb-4">
                        <FontAwesomeIcon icon={faPhone} className="text-lg text-blue-500" />
                        <div>
                            <h3 className="font-bold text-md">Call Us</h3>
                            <p>+91 00000 xxxxx</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Footer