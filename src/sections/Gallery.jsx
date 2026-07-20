import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const galleryItems = [
    { id: 1, emoji: '🏪', title: 'Showroom' },
    { id: 2, emoji: '🛠️', title: 'Service Center' },
    { id: 3, emoji: '🚗', title: 'Test Drive' },
    { id: 4, emoji: '⚡', title: 'Charging Station' },
    { id: 5, emoji: '👥', title: 'Team' },
    { id: 6, emoji: '🎯', title: 'Excellence' },
  ]

  return (
    <section id="gallery" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-emerald/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg font-sora">
            Explore our facilities and services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="glass rounded-lg p-8 sm:p-12 border border-emerald/20 hover:border-emerald/40 transition-colors h-40 sm:h-48 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  className="text-6xl sm:text-7xl mb-3 group-hover:text-emerald transition-colors"
                >
                  {item.emoji}
                </motion.div>
                <h3 className="text-center text-sm sm:text-base font-semibold text-emerald">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Want to see our showroom in person?
          </p>
          <motion.a
            href="https://maps.app.goo.gl/vettry"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-block"
          >
            📍 Get Directions
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
