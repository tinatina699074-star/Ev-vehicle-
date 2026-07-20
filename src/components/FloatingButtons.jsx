import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingButtons() {
  const buttons = [
    {
      icon: '💬',
      label: 'WhatsApp',
      color: 'bg-green-500',
      url: 'https://wa.me/919994598837?text=Hi%20Vettry%20E-bikes,%20I%20am%20interested%20in%20Ozotec%20vehicles',
    },
    {
      icon: '📞',
      label: 'Call',
      color: 'bg-blue-500',
      url: 'tel:+919994598837',
    },
  ]

  return (
    <motion.div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
      {buttons.map((btn, index) => (
        <motion.a
          key={index}
          href={btn.url}
          target={btn.url.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
          }}
          className={`${btn.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl transition-shadow`}
          title={btn.label}
        >
          {btn.icon}
        </motion.a>
      ))}

      {/* Background pulse effect */}
      <motion.div
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-emerald/20 -z-10"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}