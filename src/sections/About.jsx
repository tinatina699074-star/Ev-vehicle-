import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <section id="about" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background effect */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald/5 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">About Vettry E-bikes</span>
          </h2>

          <div className="glass rounded-2xl p-8 sm:p-12 backdrop-blur-lg border border-emerald/20">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 font-sora">
              Vettry E-bikes is an authorized Ozotec electric vehicle showroom located at{' '}
              <span className="text-emerald font-semibold">Siruvani Main Road, Alandhurai, Coimbatore</span>.
            </p>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 font-sora">
              We provide premium electric scooters with reliable performance, modern technology and excellent customer support.
            </p>

            <div className="bg-dark-grey/50 rounded-lg p-6 border border-emerald/10">
              <h3 className="text-emerald text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-300 text-lg font-sora">
                To make eco-friendly transportation accessible through quality products and dependable after-sales service.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {[
                { icon: '⚡', label: 'Advanced Tech' },
                { icon: '🌿', label: 'Eco-Friendly' },
                { icon: '🛠️', label: 'Best Service' },
                { icon: '🚀', label: 'Performance' },
                { icon: '💚', label: 'Reliable' },
                { icon: '🏆', label: 'Premium Quality' },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-lg p-4 text-center border border-emerald/10"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <p className="text-sm text-gray-300">{feature.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
