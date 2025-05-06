import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { motion } from 'framer-motion';


const Corehr = () => {
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

             {/*HR Management Software*/}
             <div className=" bg-[lightgray] py-10 px-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-[blue]">HR Management Software</h2>
                        <h3 className="text-3xl md:text-3xl ">Brilliance in your Hands!</h3>
                        <p className="mt-4 text-base md:text-lg text-gray-700">
                        Adapt to new realities. Work faster and smarter. Define the future of work for your organization with a flexible, robust, global Core-HR module in RapidHR.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="flex-1 max-w-lg">
                        <img
                            src="\hrmanagement.jpeg"
                            alt="HR Illustration"
                            className="w-full object-contain"
                        />
                    </div>
                </div>
            </div>

            

            {/*Employee Directory */}
            <div className="bg-[lightblue] py-10 px-5 mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                    {/* Image */}
                    <div className="flex-1 max-w-lg">
                        <img
                            src="\hr software.jpeg"
                            alt="HR Illustration"
                            className="w-full object-contain"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold">Employee Directory</h2>
                        <p className="mt-4 text-base md:text-lg text-gray-700">
                            Suitable for organizations of any size, regardless of their diversity. Easily set up and access all employee information promptly. Input, store, and retrieve extensive employee data efficiently within minutes, utilizing simple bulk actions.
                        </p>
                    </div>
                </div>
            </div>

            {/*Organization*/}
            <div className="bg-[lightyellow] py-10 px-5 mt-10 " style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold">Organization</h2>
                        <p className="mt-4 text-lg md:text-lg text-gray-700">
                            One control center, limitless possibilities! Model, visualize and configure the system for both simple and complex organisational structures. Leverage unusually good design that radically improves setup time and brings in the agility to evolve. Create flexible reporting structures, functional units, and position organograms with summary and insights.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="flex-1 max-w-lg">
                        <img
                            src="\Designer (5).jpeg"
                            alt="HR Illustration"
                            className="w-full object-contain"
                        />
                    </div>
                </div>
            </div>
            {/*HR Documents */}
            <div className="bg-[lightblue] py-10 px-5 mt-10 " style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                    {/* Image */}
                    <div className="flex-1 max-w-lg">
                        <img
                            src="\HR.jpeg"
                            alt="HR Illustration"
                            className="w-full object-contain"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold">HR Documents</h2>
                        <p className="mt-4 text-lg md:text-lg text-gray-700">
                            Suitable for organizations of any size, regardless of their diversity. Easily set up and access all employee information promptly. Input, store, and retrieve extensive employee data efficiently within minutes, utilizing simple bulk actions.
                        </p>
                    </div>
                </div>
            </div>
            </motion.div> 
        ))}
            <Footer />

        </div>



    )
}

export default Corehr