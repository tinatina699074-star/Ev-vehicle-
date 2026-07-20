import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Models', href: '#models' },
    { label: 'Why Choose', href: '#why-choose' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Test Ride', href: '#test-ride' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-40 glass border-b border-emerald/20 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald to-emerald/60 flex items-center justify-center">
              <span className="text-matte-black font-bold">O</span>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald font-bold text-lg leading-none">Ozotec</span>
              <span className="text-emerald/60 text-xs">Vettry E-bikes</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: '#00D26A' }}
                className="text-gray-300 hover:text-emerald transition-colors text-sm font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.a
            href="https://wa.me/919994598837"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block btn-primary text-sm px-6 py-2"
          >
            Get Started
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
              className="absolute w-6 h-0.5 bg-emerald"
              style={{ top: '12px' }}
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-6 h-0.5 bg-emerald"
              style={{ top: '16px' }}
            />
            <motion.div
              animate={isOpen ? { rotate: -45 } : { rotate: 0 }}
              className="absolute w-6 h-0.5 bg-emerald"
              style={{ top: '20px' }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-3 border-t border-emerald/20">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                whileHover={{ x: 10 }}
                className="block text-gray-300 hover:text-emerald transition-colors text-sm font-medium px-4 py-2"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/919994598837"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary block text-center mx-4 py-2 text-sm"
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}