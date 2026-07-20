import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function WhyChoose() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const reasons = [
    {
      icon: '✅',
      title: 'Authorized Dealer',
      description: 'Official Ozotec showroom with genuine products and warranty',
    },
    {
      icon: '🔧',
      title: 'Expert Service',
      description: 'Professional maintenance and after-sales support',
    },
    {
      icon: '💰',
      title: 'Best Pricing',
      description: 'Competitive rates and flexible financing options',
    },
    {
      icon: '⚡',
      title: 'Fast Charging',
      description: 'Quick charge technology for your convenience',
    },
    {
      icon: '🌍',
      title: 'Eco-Friendly',
      description: 'Zero emissions for a sustainable future',
    },
    {
      icon: '🏆',
      title: 'Quality Assured',
      description: 'Premium materials and rigorous testing standards',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="why-choose" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Choose Vettry?</span>
          </h2>
          <p className="text-gray-400 text-lg font-sora">
            Experience the best in electric mobility
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 border border-emerald/20 hover:border-emerald/40 transition-colors group"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-4 group-hover:text-emerald transition-colors"
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-emerald">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
