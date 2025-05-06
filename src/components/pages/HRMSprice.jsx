import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Link } from 'react-router-dom'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Footer from '../shared/Footer';
import { motion } from 'framer-motion';

const HRMSprice = () => {

    const [isUSD, setIsUSD] = useState(false);

    const toggleCurrency = () => {
        setIsUSD(!isUSD);

    };

     // Scroll to top when the component is mounted
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

    // Prices in INR and USD
    const pricingData = {
        freeTrial: {
            INR: { price: '₹0', additionalInfo: 'Not applicable' },
            USD: { price: '$0', additionalInfo: 'Not applicable' },
        },
        professionalPlan: {
            INR: { price: '₹3500', additionalPrice: '₹71' },
            USD: { price: '$175', additionalPrice: '$1' },
        },
        enterprisePlan: {
            INR: { price: '₹5666', additionalPrice: '₹125' },
            USD: { price: '$225', additionalPrice: '$1.5' },
        },
        customPlan: {
            info: 'On Demand',
        },
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
                <div>
                    {/*1st blue background div Page*/}
                    <div className=" bg-[lightblue] py-15 mt-10 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-center md:items-center ">

                            {/* Text Content */}
                            <div className=" text-center md:text-left ">
                                <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[blue]">Simple and Transparent Pricing</h2>
                                <p className="mt-4 text-lg text-gray-700">Got a question about our pricing ?<Link to="/Contactus"><span className="text-[blue]"> Contact us</span></Link></p>
                            </div>
                        </div>

                        {/*toggle button usd or inr*/}
                        <div className=" items-center mt-5 space-x-4 sm:space-x-2 lg:space-x-4">
                            <span className={`text-lg font-medium ${!isUSD ? 'text-black' : 'text-gray-600'}`}>
                                INR
                            </span>
                            <button
                                onClick={toggleCurrency}
                                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isUSD ? 'bg-green-700' : 'bg-gray-600'
                                    }`}
                            >
                                <div
                                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isUSD ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </button>
                            <span className={`text-lg font-medium ${isUSD ? 'text-black' : 'text-gray-600'}`}>
                                USD
                            </span>
                        </div>
                    </div>

                    {/*price cards */}
                    <div className=" container mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <Card className='w-80 h-100 border-none text-center bg-white hover:bg-[lightyellow] hover:cursor-pointer hover:shadow-md hover:shadow-[yellow]' style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <CardHeader>
                                <CardTitle className=' font-bold text-xl'>Free Trial</CardTitle>
                                <CardDescription className=' text-md font-medium'>Explore the application for 7 days No Credit Card details required*</CardDescription>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {isUSD
                                        ? pricingData.freeTrial.USD.price
                                        : pricingData.freeTrial.INR.price}
                                </h3>
                                <p className="text-sm text-gray-500">/month, billed annually</p>
                                <p className="text-gray-700 mt-2">(Limited Employees)</p>
                                <p className=" font-medium mt-4">Not applicable</p>
                            </CardHeader>
                            <CardFooter className="justify-center mt-17">
                                <Button className=' text-white bg-[blue] hover:cursor-pointer hover:bg-black'>Start Free Trial</Button>
                            </CardFooter>
                        </Card>
                        <Card className='w-80 h-100 border-none text-center bg-white hover:bg-[lightblue] hover:cursor-pointer hover:shadow-md hover:shadow-[blue]' style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <CardHeader>
                                <CardTitle className=' font-bold text-xl'>Professional Plan</CardTitle>
                                <CardDescription className=' text-md font-medium'>Unlock advanced automation features and seamless HR management</CardDescription>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {isUSD
                                        ? pricingData.professionalPlan.USD.price
                                        : pricingData.professionalPlan.INR.price}
                                </h3>
                                <p className="text-sm text-gray-500">/month, billed annually
                                    (Including 50 employees)</p>
                                <p className="font-medium mt-12">
                                    {isUSD
                                        ? pricingData.professionalPlan.USD.additionalInfo
                                        : pricingData.professionalPlan.INR.additionalInfo}
                                </p>
                                <p className=" font-medium ">per additional employeee</p>
                            </CardHeader>
                            <CardFooter className="justify-center mt-6">
                                <Button className=' bg-[blue] text-white hover:cursor-pointer hover:bg-black'>Start Free Trial</Button>
                            </CardFooter>
                        </Card>
                        <Card className='w-80 h-100 border-none text-center bg-white hover:bg-[lightyellow] hover:cursor-pointer hover:shadow-md hover:shadow-[yellow]' style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <CardHeader>
                                <CardTitle className=' font-bold text-xl'>Enterprise Plan</CardTitle>
                                <CardDescription className=' text-md font-medium'>Comprehensive plan designed to engage employees and take your organization to new heights.</CardDescription>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {isUSD
                                        ? pricingData.enterprisePlan.USD.price
                                        : pricingData.enterprisePlan.INR.price}
                                </h3>
                                <p className="text-sm text-gray-500">/month, billed annually</p>
                                <p className="text-gray-700 mt-2">(Limited Employees)</p>
                                <p className="font-medium mt-4">
                                    {isUSD
                                        ? pricingData.enterprisePlan.USD.additionalInfo
                                        : pricingData.enterprisePlan.INR.additionalInfo}
                                </p>
                                <p className=" font-medium ">per additional employeee</p>
                            </CardHeader>
                            <CardFooter className="justify-center mt-8">
                                <Button className=' bg-[blue] text-white hover:cursor-pointer hover:bg-black'>Start Free Trial</Button>
                            </CardFooter>
                        </Card>
                        <Card className='w-80 h-100 border-none text-center bg-white hover:bg-[lightblue] hover:cursor-pointer hover:shadow-md hover:shadow-[blue]' style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <CardHeader>
                                <CardTitle className=' font-bold text-xl'>Custom Plan</CardTitle>
                                <CardDescription className=' text-md font-medium'>Tailored to your needs — pay only for the features you use.Get the perfect HR solution within your budget!</CardDescription>
                                <p className=" font-medium mt-4">On Demand</p>
                            </CardHeader>
                            <CardFooter className="justify-center mt-30">
                                <Link to="/Contactus"><Button className=' text-white bg-[blue] hover:cursor-pointer hover:bg-black'>Contact Us</Button></Link>
                            </CardFooter>
                        </Card>
                    </div>





                </div>
                <Footer />
            </motion.div>

        </div>
    )
}

export default HRMSprice