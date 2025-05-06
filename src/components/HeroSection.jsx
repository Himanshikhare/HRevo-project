import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Link } from 'react-router-dom';



const Herosection = () => {
  const [query, setQuery] = useState("");
  const [stats, setStats] = useState({
    companies: 0,
    employees: 0,
    features: 0,
    cities: 0,
  })
  useEffect(() => {
    // Simulate stat updates
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        companies: Math.min(prevStats.companies + 1, 500),
        employees: Math.min(prevStats.employees + 10, 7000),
        features: Math.min(prevStats.features + 1, 250),
        cities: Math.min(prevStats.cities + 1, 450),
      }));
    });

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Function to format numbers with K and M
  const formatNumber = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + "K";
    }
    else {
      return `${num}+`;
    }
  };

  return (
    <div className=' relative text-left' >
      <div className='flex flex-col gap-1 my-10 bg-white min-h-full mt-15' >

        <Marquee speed={100} className="bg-blue-600 text-white py-6 md:mt-8 lg:mt-0 sm:mt-0 font-medium whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span className="inline-block">
            Efficient Payroll and Strategic Recruitment for a Thriving Workforce. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Efficient Payroll and Strategic Recruitment for a Thriving Workforce. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </Marquee>

        <div className=" h-full flex flex-col-reverse items-center justify-center px-4 py-6 bg-white text-black md:flex-row md:gap-10 md:py-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight  "><span className="text-[blue]">All-in-one</span>
                <span > HR, Payroll &</span><br />
                <span > Recruitment Solution.</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700">
                Core HR management, performance management, workflows, attendance management, payroll, leave management, task management, onboarding, and recruitment made simple.
              </p>

              {/* buttons*/}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
                <Link to="/Signup"><Button className="bg-blue-700 text-white px-6 py-3 text-sm sm:text-base hover:bg-black hover:cursor-pointer">Start 7-Day Free Trial</Button></Link>

                <Link to="/Requestfordemo"><Button className="bg-green-700 text-white px-6 py-3 text-sm sm:text-base hover:bg-black hover:cursor-pointer">Schedule a Demo</Button></Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-700 text-lg" />
                  <span className="text-sm sm:text-base">No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2 sm:ml-6">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-700 text-lg" />
                  <span className="text-sm sm:text-base">No Commitment</span>
                </div>
              </div>

            </div>
            {/* Image */}
            <div className="flex-1 max-w-xs sm:max-w-md md:max-w-lg">
              <img
                src="\person-centred-3337893_1280.png"
                alt="HR Illustration"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>



        <div className="flex flex-col md:flex-row gap-10 items-center justify-center p-10 bg-gray-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <h3 className="text-center md:text-left mb-5 md:mb-0">Trusted By</h3>

          {/* Companies */}
          <div className="flex flex-col items-center w-full md:w-1/5 border-b-3 md:border-b-0 md:border-r-3 border-dashed mb-5 md:mb-0">
            <h2 className="text-4xl sm:text-6xl md:text-5xl font-bold text-blue-600">{formatNumber(stats.companies)}</h2>
            <p className="text-gray-600">Companies</p>
          </div>

          {/* Employees */}
          <div className="flex flex-col items-center w-full md:w-1/5 border-b-3 md:border-b-0 md:border-r-3 border-dashed mb-5 md:mb-0">
            <h2 className="text-4xl sm:text-6xl md:text-5xl font-bold text-green-600">{formatNumber(stats.employees)}</h2>
            <p className="text-gray-600">Employees</p>
          </div>

          {/* Features */}
          <div className="flex flex-col items-center w-full md:w-1/5 border-b-3 md:border-b-0 md:border-r-3 border-dashed mb-5 md:mb-0">
            <h2 className="text-4xl sm:text-6xl md:text-5xl font-bold text-green-600">{formatNumber(stats.features)}</h2>
            <p className="text-gray-600">Features</p>
          </div>

          {/* Cities */}
          <div className="flex flex-col items-center w-full md:w-1/5 mb-5 md:mb-0">
            <h2 className="text-4xl sm:text-6xl md:text-5xl font-bold text-green-600">{formatNumber(stats.cities)}</h2>
            <p className="text-gray-600">Cities</p>
          </div>
        </div>



        <h1 className="text-center text-3xl font-bold mt-10">PLATFORM FEATURES</h1>
        <p className="text-center  mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>Innovative HR Features Designed for Modern Businesses</p>
        {/* cards */}
        <div className=" flex flex-wrap ml-10 gap-8 mt-5">
          <Card className='w-80 h-60 border-none  bg-white hover:bg-pink-100 hover:cursor-pointer hover:shadow-md hover:shadow-[red]' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <CardHeader>
              <CardTitle className='text-center font-bold text-xl'>Core HRMS</CardTitle>
              <CardDescription className=' text-center text-md font-medium'>Centralize all your HR processes in one platform. Manage payroll, recruitment, attendance, and performance effortlessly.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore more</Button>
            </CardFooter>

          </Card>
          <Card className='w-80 h-60 border-none  bg-white hover:bg-pink-100 hover:cursor-pointer hover:shadow-md hover:shadow-[red]' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <CardHeader>
              <CardTitle className='text-center font-bold text-xl'>Attendance</CardTitle>
              <CardDescription className='text-md font-medium'> Track attendance and manage leave requests in real-time. Simplify scheduling and maintain workforce transparency.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore more</Button>
            </CardFooter>

          </Card>
          <Card className='w-80 h-60 border-none  bg-white hover:bg-pink-100 hover:cursor-pointer hover:shadow-md hover:shadow-[red]' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <CardHeader>
              <CardTitle className='text-center font-bold text-xl'>Leave Management</CardTitle>
              <CardDescription className='text-md font-medium'> Streamline leave requests and approvals with ease. Ensure transparency and maintain balanced workforce availability</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore more</Button>
            </CardFooter>

          </Card>
          <Card className='w-80 h-60 border-none  bg-white hover:bg-pink-100 hover:cursor-pointer hover:shadow-md hover:shadow-[red]' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <CardHeader>
              <CardTitle className='text-center font-bold text-xl'>Task Management</CardTitle>
              <CardDescription className='text-md font-medium'> Assign, track, and manage tasks efficiently. Boost productivity with clear priorities and real-time updates.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore more</Button>
            </CardFooter>

          </Card>
          <Card className='w-80 h-60 border-none  bg-white hover:bg-pink-100 hover:cursor-pointer hover:shadow-md hover:shadow-[red]' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <CardHeader>
              <CardTitle className='text-center font-bold text-xl'>Performance Management</CardTitle>
              <CardDescription className='text-md font-medium'> Set goals and track employee performance seamlessly. Foster growth and improve productivity across your team.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore more</Button>
            </CardFooter>

          </Card>
          <Card className='w-80 h-60 border-none  bg-white hover:bg-pink-100 hover:cursor-pointer hover:shadow-md hover:shadow-[red]' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <CardHeader>
              <CardTitle className='text-center font-bold text-xl'>Pay Roll</CardTitle>
              <CardDescription className='text-md font-medium'> Automate payroll with accuracy and ease. Ensure compliance and timely payments for a satisfied workforce.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore more</Button>
            </CardFooter>

          </Card>
          <Card className='w-80 h-60 border-none  bg-white hover:bg-pink-100 hover:cursor-pointer hover:shadow-md hover:shadow-[red]' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <CardHeader>
              <CardTitle className='text-center font-bold text-xl'>Recruitment</CardTitle>
              <CardDescription className='text-md font-medium'> Streamline your hiring process from job posting to onboarding. Connect with top talent effortlessly</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore more</Button>
            </CardFooter>

          </Card>
          <Card className='w-80 h-60 border-none  bg-white hover:bg-pink-100 hover:cursor-pointer hover:shadow-md hover:shadow-[red]' style={{ fontFamily: 'Poppins, sans-serif' }}>
            <CardHeader>
              <CardTitle className='text-center font-bold text-xl'>Onboarding</CardTitle>
              <CardDescription className='text-md font-medium'> Welcome new hires with a seamless onboarding process. Simplify documentation and ensure a smooth start to their journey</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore more</Button>
            </CardFooter>

          </Card>

        </div>



        {/*HR simplified */}
        <div className=" mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

            {/* Image */}
            <div className="flex-1 max-w-lg">
              <img
                src="\1746366551116.jpg"
                alt="HR Illustration"
                className="w-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1  ml-15">
              <h2 className="text-3xl font-bold leading-tight">HR MANAGEMENT SIMPLIFIED</h2>
              <p className="mt-4 text-lg text-gray-700">
                Adapt to new realities, work faster and smarter. Determine a defined future of work for your organization with a strong, flexible, global HR solution.
              </p>

              <div className="flex flex-col items-left mt-10">
                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Easy access to documents and information.</span>


                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />An employee database that scales.</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Smart HR workflows.</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Automation of HR processes.</span>
              </div>
            </div>
          </div>
        </div>

        {/*attendance management*/}
        <div className=" mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

            {/* Text Content */}
            <div className="flex-1  ml-15">
              <h2 className="text-3xl font-bold leading-tight">ATTENDANCE MANAGEMENT</h2>
              <p className="mt-4 text-lg text-gray-700">
                Allow time for greatness and unlock higher productivity through our integrated and advanced time and attendance management system. Similarly create a digitally seamless onboarding experience so that shortens the new employees’ time to productivity.Then set them up for success and build delightful employee journeys from day one.
              </p>

              <div className="flex flex-col items-left mt-10">
                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Enhanced employee accountability</span>


                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Accurate payroll processing</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Flexible, instantaneous attendance recording</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Attendance policies that are transparent and consistent</span>
              </div>
            </div>
            {/* Image */}
            <div className="flex-1 max-w-lg">
              <img
                src="\attendance.jpeg"
                alt="HR Illustration"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/*payroll */}
        <div className="  mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

            {/* Image */}
            <div className="flex-1 max-w-lg">
              <img
                src="\payroll.jpeg"
                alt="HR Illustration"
                className="w-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1  ml-15">
              <h2 className="text-3xl font-bold leading-tight">PAYROLL MANAGEMENT</h2>
              <p className="mt-4 text-lg text-gray-700">
                Simplify the complex processes of the payroll with RapidHR, also a powerful, secure, accurate, automated and 100% compliant system!Rapid HR provides quicker processing, precise payouts, any business that wants to prevent potential financial and legal repercussions from non-compliance and guarantee that employees are paid accurately and on time with precise payroll administration.
              </p>

              <div className="flex flex-col items-left mt-10">
                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Quickly determine payroll calculations and deductions</span>


                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Generate accurate Payslips</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Using payroll management to plan future costs</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Secure Data’s and Privacy</span>
              </div>
            </div>
          </div>
        </div>

        {/*help desk*/}
        <div className="  mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

            {/* Text Content */}
            <div className="flex-1  ml-15">
              <h2 className="text-3xl font-bold leading-tight">HELP DESK</h2>
              <p className="mt-4 text-lg text-gray-700">
                Provide incomparable support to your employees, wherever they are, any time they need you with an efficient, automated, and advanced helpdesk system.Employees can get assistance or ask questions about human resources rules, practises, and benefits at the HR help desk, a single point of contact.
              </p>

              <div className="flex flex-col items-left mt-10">
                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Improved analytics and reporting</span>


                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Information and support</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />HR policies and practises</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Issue resolution</span>
              </div>
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

        {/*performance */}
        <div className="  mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

            {/* Image */}
            <div className="flex-1 max-w-lg">
              <img
                src="\performance.jpeg"
                alt="HR Illustration"
                className="w-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1  ml-15">
              <h2 className="text-3xl font-bold leading-tight">PERFORMANCE MANAGEMENT</h2>
              <p className="mt-4 text-lg text-gray-700">
                Regular performance management with RapidHR encourages your employees to aim for excellence. Then, your organization is set up for success and growth while.
              </p>

              <div className="flex flex-col items-left mt-10">
                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />360 Performance reviews and templates</span>


                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Management By Objectives</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Self-Evaluation Tools</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Performance reports</span>
              </div>
            </div>
          </div>
        </div>

        {/*recruitment*/}
        <div className="  mt-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

            {/* Text Content */}
            <div className="flex-1  ml-15">
              <h2 className="text-3xl font-bold leading-tight">RECRUITMENT MANAGEMENT</h2>
              <p className="mt-4 text-lg text-gray-700">
                Accomplish the high-volume process of sourcing, tracking and recruiting the best talent that is aligned with your business – on a single, comprehensive, centralized platform.
              </p>

              <div className="flex flex-col items-left mt-10">
                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Efficient & Flexible Hiring</span>


                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Digital Offer Process Management</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Tracking & Analytics</span>

                <span className="mb-3"><FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[blue] text-2xl mr-5"
                />Letters & Mail Merge</span>
              </div>
            </div>
            {/* Image */}
            <div className="flex-1 max-w-lg">
              <img
                src="\Recruitment.jpeg"
                alt="HR Illustration"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Herosection