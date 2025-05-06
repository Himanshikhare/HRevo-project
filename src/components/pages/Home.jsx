import React, { useEffect } from 'react'
import HeroSection from '../Herosection'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { motion } from 'framer-motion';

const Home = () => {
 // Scroll to top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (


    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <HeroSection />
        <Footer />
      </motion.div>

    </div>
  )
}

export default Home