import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { motion } from 'framer-motion';

const Careerpage = () => {
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
                    transition={{ duration: 1, delay: index * 0.5 }}
                    variants={slideInFromLeft}

                >
                    <div>

                        {/*Career Page*/}
                        <div className=" bg-[lightgray] py-10 px-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                                {/* Text Content */}
                                <div className="flex-1">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[blue]">Career Page</h2>
                                    <p className="mt-4 text-base md:text-lg text-gray-700">
                                        HRevo ATS offers a powerful platform to create a branded career page that truly reflects your company culture and attracts top talent. With customizable templates and seamless integration, you can craft a captivating online destination for potential employees.
                                    </p>
                                </div>
                                {/* Image */}
                                <div className="flex-1 max-w-lg">
                                    <img
                                        src="src\assets\career.png"
                                        alt="HR Illustration"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-tight text-center mt-3 sm:mt-5">Create a strong employer brand with HRevo ATS’s Dedicated<br></br> Career Page feature.</h1>

                        {/*careerdiv1*/}
                        <div className=" bg-[lightblue] py-10 px-5 mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                                {/* Image */}
                                <div className="flex-1 max-w-lg">
                                    <img
                                        src="src\assets\laptop.jpg"
                                        alt="HR Illustration"
                                        className="w-full object-contain"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <p className="mt-4 text-lg md:text-lg text-gray-700">
                                        This customizable tool allows you to design a career page that reflects your company’s values, culture, and unique opportunities. By creating a visually appealing and informative career page, you can attract top talent who are aligned with your organizational goals. Gain an edge by tapping into the vast pool of talent on LinkedIn, the world’s largest professional network. RapidHR ATS’s seamless LinkedIn integration allows you to proactively identify passive candidates who may not be actively searching for new opportunities. You can also nurture relationships with potential candidates by engaging with their profiles and content.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/*careerdiv2*/}
                        <div className=" bg-[lightyellow] py-10 px-5 mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                                {/* Text Content */}
                                <div className="flex-1  ml-15">
                                    <p className="mt-4 text-lg md:text-lg text-gray-700">
                                        The Dedicated Career Page feature offers a range of customization options, enabling you to tailor the design, content, and layout to suit your brand. Highlight your company’s achievements, share employee testimonials, and showcase your work environment to give potential candidates a glimpse into what makes your organization special. This personalized approach helps you stand out in a competitive job market.
                                    </p>
                                </div>

                                {/* Image */}
                                <div className="flex-1 max-w-lg">
                                    <img
                                        src="src\assets\administrator.png"
                                        alt="HR Illustration"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/*careerdiv3*/}
                        <div className="bg-[lightblue] py-10 px-5 mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                                {/* Image */}
                                <div className="flex-1 max-w-lg">
                                    <img
                                        src="src\assets\video-conference.png"
                                        alt="HR Illustration"
                                        className="w-full object-contain"
                                    />
                                </div>
                                {/* Text Content */}
                                <div className="flex-1">
                                    <p className="mt-4 text-lg md:text-lg text-gray-700">
                                        HRevo ATS ensures that your career page is mobile-friendly and optimized for search engines, increasing its visibility and accessibility. This means potential candidates can easily find and navigate your career page, whether they are browsing on a desktop or a mobile device. By providing a seamless and engaging candidate experience, you can increase the number of qualified applicants and build a stronger talent pipeline.
                                    </p>
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

export default Careerpage