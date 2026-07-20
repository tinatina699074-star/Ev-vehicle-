import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Models from './sections/Models'
import WhyChoose from './sections/WhyChoose'
import Gallery from './sections/Gallery'
import TestRide from './sections/TestRide'
import Contact from './sections/Contact'
import FloatingButtons from './components/FloatingButtons'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-matte-black flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="loader"></div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-emerald text-lg font-semibold"
          >
            Vettry E-bikes
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-matte-black text-premium-white overflow-hidden"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Models />
        <WhyChoose />
        <Gallery />
        <TestRide />
        <Contact />
      </main>
      <FloatingButtons />
      <Footer />
    </motion.div>
  )
}
