import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const Dropdown = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    

    const handleMouseEnter = () => {
        setIsOpen(true); // Open dropdown when hovering on button
    };

    const handleMouseLeave = () => {

        setIsOpen(false); // Close dropdown when mouse leaves button


    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false); // Close dropdown if clicked outside
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter} // Open dropdown on hover
            onMouseLeave={handleMouseLeave} // Close dropdown on leave
            style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            {/* Button */}
            <button className="flex items-center gap-1 bg-green-700 font-bold text-white p-2 rounded-md">
                {label}
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        delay={isOpen ? 0.5 : 0} // Add delay when opening, none when closing
                        className="absolute left-0 w-80 bg-white text-black rounded-lg shadow-lg z-50 "
                    >
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="px-8 py-3 cursor-pointer hover:bg-[blue] hover:text-white rounded-md"
                                onClick={option.onClick}
                            >
                                {/* If there's a link, use the Link component */}
                                {option.link ? (
                                    <Link to={option.link}>{option.label}</Link>
                                ) : (
                                    <span>{option.label}</span>
                                )}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    const user = false;
    return (
        <nav className=' fixed top-0 left-0 w-full bg-green-700  shadow-lg z-50 text-white '>
            <div className='flex items-center justify-between ml-3 mr-1' >
                <div className="flex items-center ">
                    <img src="/Hrevo_Logo-Without_background.png" alt="HRevo Logo" className="w-40 h-auto sm:w-48 md:w-60 "></img>
                </div>
                {/* Navbar Links */}
                <div className=" hidden md:flex items-center gap-6">
                    <Link to="/"><button className=' font-bold  hover:cursor-pointer hover:shadow-md hover:shadow-[black] transition-shadow duration-400 text-white'>Home</button></Link>
                    {/* Reusable Dropdowns */}
                    <Dropdown
                        label="HR Management"
                        options={[

                            { label: "Core HR", link: "/Corehr" },
                            { label: "Payroll Management", link: "/Payroll" },
                           
                        ]}
                    />
                    <Dropdown
                        label="Recruitment & Onboarding"
                        options={[
                            { label: "Career Page", link: "/Careerpage"},
                            { label: "AI Recommendations", link: "/AIpage" },
                        ]}
                    />
                    
                    <Dropdown
                        label="Prices"
                        options={[
                            { label: "HRMS", link: "/HRMSprice"},
                            { label: "Recruiting", link: "/Recruitingprice"},

                        ]}
                    />
                    <Dropdown
                        label="About"
                        options={[
                            { label: "Contact Us", link: "/Contactus"},

                        ]}
                    />
                    {/* Buttons for Login, Free Trial, and Demo */}
                    <div className='hidden md:flex items-center gap-4 '>
                        <Link to="/Login"><button variant="outline" className='px-4 py-2  bg-[white] border font-medium hover:cursor-pointer hover:bg-[blue] hover:text-white hover:shadow-lg hover:shadow-[black] transition-shadow duration-400 text-black'>Login</button></Link>
                        <Link to="/Signup"><button variant="outline" className='  px-4 py-2 rounded hover:bg-[blue] hover:text-white hover:cursor-pointer hover:shadow-lg hover:shadow-[black] transition-shadow duration-500 border bg-[white] font-medium text-black'>Start Free Trial</button></Link>
                        <Link to="/Requestfordemo"><button variant="outline" className=' px-4 py-2 border hover:bg-[blue] hover:text-white hover:cursor-pointer hover:shadow-lg hover:shadow-[black] transition-shadow duration-500 border bg-[white] font-medium text-black'>Book a Demo</button></Link>
                    </div>
                </div>

                {/* Hamburger Menu */}
                <button
                    className="block md:hidden p-2 rounded-md bg-green-800 hover:bg-green-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-green-800 text-white p-4 space-y-4"
                    >
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </Link>
                        <Dropdown
                            label="HR Management"
                            options={[
                                { label: "Core HR", link: "/Corehr" },
                                { label: "Payroll Management", link: "/Payroll" },
                            ]}
                        />
                        <Dropdown
                            label="Recruitment & Onboarding"
                            options={[
                                { label: "Career Page", link: "/Careerpage" },
                                { label: "AI Recommendations", link: "/AIpage" },
                            ]}
                        />
                        <Dropdown
                            label="Prices"
                            options={[
                                { label: "HRMS", link: "/HRMSprice" },
                                { label: "Recruiting", link: "/Recruitingprice" },
                            ]}
                        />
                        <Link to="/Contactus" onClick={() => setMobileMenuOpen(false)}>
                            Contact Us
                        </Link>
                        <div className="flex flex-col gap-2">
                            <Link to="/Login">
                                <button className="px-4 py-2 bg-white text-black rounded hover:bg-blue-600 hover:text-white">
                                    Login
                                </button>
                            </Link>
                            <Link to="/Signup">
                                <button className="px-4 py-2 bg-white text-black rounded hover:bg-blue-600 hover:text-white">
                                    Start Free Trial
                                </button>
                            </Link>
                            <Link to="/Requestfordemo">
                                <button className="px-4 py-2 bg-white text-black rounded hover:bg-blue-600 hover:text-white">
                                    Book a Demo
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
        
        </nav>


    )
}

export default Navbar