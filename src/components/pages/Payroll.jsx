import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Footer from '../shared/Footer'
import { motion } from 'framer-motion';

const Payroll = () => {
    const slideInFromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };
 // Scroll to top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar />
            {[1].map((_, index) => (
                    <motion.div
                    key={index}
                    className={`mt-30 ml-5 mr-5 `}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.9, delay: index * 0.5 }}
                    variants={slideInFromLeft}
                    >

            <div>
                {/*Payroll Management Software*/}
                <div className=" bg-[lightgray] py-10 px-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                        {/* Text Content */}
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-[blue]">Payroll Management</h2>
                            <h3 className="text-xl sm:text-2xl md:text-3xl text-center md:text-left mt-2 ">Never worry again about Payroll</h3>
                            <p className="mt-4 text-lg md:text-lg text-gray-700">
                                Simplify complex payroll processes with RapidHR, a powerful, secure, accurate, automated, and 100% compliant system!
                            </p>
                        </div>
                        {/* Image */}
                        <div className="flex-1 max-w-lg">
                            <img
                                src="\payroll.jpeg"
                                alt="HR Illustration"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/*Administration*/}
                <div className="bg-[lightblue] py-10 px-5 mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                         {/* Image */}
                         <div className="flex-1 max-w-lg">
                            <img
                                src="\administrator.png"
                                alt="HR Illustration"
                                className="w-full object-contain"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold ">Administration</h2>

                            <p className="mt-4 text-lg md:text-lg text-gray-700">
                                HRevo allows you to easily configure complex requirements. Together with out-of-the-box configurations, improve setup time considerably and bring agility to evolve. Features include:
                            </p>
                            <div className="space-y-4 mt-4">
                                <span className="flex items-center text-base sm:text-lg"><FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-[blue] text-2xl mr-5"
                                />Configurable pay scale groups</span>
                            </div>
                            <div className="space-y-4 mt-4">
                                <span className="flex items-center text-base sm:text-lg"><FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-[blue] text-2xl mr-5"
                                />Pre-determined flexi benefits and perks</span>
                            </div>
                            <div className="space-y-4 mt-4">
                                <span className="flex items-center text-base sm:text-lg"><FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-[blue] text-2xl mr-5"
                                />Adjustable salary structures with formula builder</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Processing*/}
                <div className=" bg-[lightyellow] py-10 px-5 mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                        {/* Text Content */}
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold">Processing</h2>

                            <p className="mt-4 text-lg md:text-lg text-gray-700">
                                Continuous& real-time error validation, All-in-one processing of regular & off-cycle payments, Automatic F&F resettlement, and
                                Simple accounting for gig workforce. Features Include:
                            </p>
                            <div className="space-y-4 mt-4">
                                <span className="flex items-center text-base sm:text-lg"><FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-[blue] text-2xl mr-5"
                                />Continuous & real-time error validation</span>
                            </div>
                            <div className="space-y-4 mt-4">
                                <span className="flex items-center text-base sm:text-lg"><FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-[blue] text-2xl mr-5"
                                />Start with All-in-one processing of regular & off-cycle payments</span>
                            </div>
                            <div className="space-y-4 mt-4">
                                <span className="flex items-center text-base sm:text-lg"><FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-[blue] text-2xl mr-5"
                                />Automatic F&F resettlement</span>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="flex-1 max-w-lg">
                            <img
                                src="\processing.png"
                                alt="HR Illustration"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>
                </div>


            </div>
             </motion.div> 
            ))}
            <Footer />
        </div>
    )
}

export default Payroll