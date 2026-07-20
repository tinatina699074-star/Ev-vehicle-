import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Models', href: '#models' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-matte-black/80 backdrop-blur-lg border-b border-emerald/20 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald to-emerald/60 flex items-center justify-center">
              <span className="text-matte-black font-bold">V</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-emerald text-lg font-bold">Vettry</h1>
              <p className="text-xs text-gray-400">E-bikes</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
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

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <div className={`w-6 h-0.5 bg-emerald transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-emerald transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-emerald transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-emerald/20"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileTap={{ x: 10 }}
                className="block py-2 text-gray-300 hover:text-emerald transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
