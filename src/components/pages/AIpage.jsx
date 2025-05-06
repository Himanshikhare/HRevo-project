import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { motion } from 'framer-motion';

const AIpage = () => {
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

                        {/*AI Page*/}
                        <div className=" bg-[lightgray] py-10 px-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                                {/* Text Content */}
                                <div className="flex-1 ">
                                    <h2 className="text-3xl md:text-4xl font-bold text-[blue]">AI Recommendations</h2>
                                    <p className="mt-4 text-base md:text-lg text-gray-700">
                                        Leverage the power of artificial intelligence to find the perfect match. Our AI-driven recommendations help you identify the best candidates for your open positions. Shortlist candidates based on skill scores powered by AI.
                                    </p>
                                </div>
                                {/* Image */}
                                <div className="flex-1 max-w-lg">
                                    <img
                                        src="src\assets\AI Recommendations.jpg"
                                        alt="HR Illustration"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        {/*Resume Parsing*/}
                        <div className=" bg-[lightblue] py-10 px-5 mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                                 {/* Image */}
                                 <div className="flex-1 max-w-lg">
                                    <img
                                        src="src\assets\Resume.jpg"
                                        alt="HR Illustration"
                                        className="w-full object-contain"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold">Resume Parsing</h2>
                                    <p className="mt-4 text-base md:text-lg text-gray-700">
                                        HRevo ATS leverages advanced AI technology to parse resumes quickly and accurately. Extract key information from resumes automatically, saving recruiters hours of manual data entry. Our AI-powered Resume Parsing ensures you have all the necessary candidate details at your fingertips.
                                    </p>
                                </div>
                               
                            </div>
                        </div>
                        {/*Skills Scoring*/}
                        <div className=" bg-[lightyellow] py-10 px-5 mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                                {/* Text Content */}
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold">Skills Scoring</h2>
                                    <p className="mt-4 text-base md:text-lg text-gray-700">
                                        Identify the best candidates instantly with Skills Scoring. RapidHR ATS analyses resumes and assigns scores based on relevant skills and experience, allowing you to focus on top-tier candidates. This feature ensures you make informed decisions quickly and efficiently.
                                    </p>
                                </div>
                                {/* Image */}
                                <div className="flex-1 max-w-lg">
                                    <img
                                        src="src\assets\Skill Scoring.jpg"
                                        alt="HR Illustration"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        {/*Job Description*/}
                        <div className=" bg-[lightblue] py-10 px-5 mt-10 mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                                 {/* Image */}
                                 <div className="flex-1 max-w-lg">
                                    <img
                                        src="src\assets\Job description.jpg"
                                        alt="HR Illustration"
                                        className="w-full object-contain"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold">Job Description</h2>
                                    <p className="mt-4 text-base md:text-lg text-gray-700">
                                        Craft compelling job descriptions effortlessly with RapidHR ATS’s AI-powered suggestions. Ensure your job postings attract the right candidates by using optimized and relevant keywords. Our AI helps you create clear, concise, and attractive job descriptions to stand out in the competitive job market.
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

export default AIpage