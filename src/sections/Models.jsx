import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Models() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  const models = [
    {
      id: 1,
      name: 'Flio Pro V2',
      category: 'Non Registration Vehicle',
      image: '🔋',
      specs: {
        motor: '1.2 kW',
        battery: '1.5 kWh Graphene',
        range: '50–55 km',
        topSpeed: '50 km/h',
      },
    },
    {
      id: 2,
      name: 'Flio Max',
      category: 'Non Registration Vehicle',
      image: '⚡',
      specs: {
        motor: '2.2 kW',
        battery: '3 kWh LFP',
        range: '120–130 km',
        topSpeed: '50 km/h',
      },
    },
    {
      id: 3,
      name: 'Flio Neo',
      category: 'Non Registration Vehicle',
      image: '🚀',
      specs: {
        motor: '2.2 kW',
        battery: '6 kWh LFP',
        range: '240–250 km',
        topSpeed: '50 km/h',
      },
    },
    {
      id: 4,
      name: 'Bheem',
      category: 'Registration Vehicle',
      image: '👑',
      specs: {
        motor: '3 kW',
        battery: '4 kWh LFP',
        range: '140–150 km',
        topSpeed: '65 km/h',
      },
    },
    {
      id: 5,
      name: 'Bheem Lite',
      category: 'Registration Vehicle',
      image: '💎',
      specs: {
        motor: '3 kW',
        battery: '2 kWh LFP',
        range: '80–90 km',
        topSpeed: '65 km/h',
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="models" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute -left-40 top-40 w-80 h-80 bg-emerald/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Premium Models</span>
          </h2>
          <p className="text-gray-400 text-lg font-sora">
            Discover our collection of eco-friendly electric vehicles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {models.map((model) => (
            <motion.div
              key={model.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group card-hover"
            >
              <div className="glass rounded-2xl overflow-hidden border border-emerald/20 h-full flex flex-col hover:border-emerald/40 transition-colors">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-dark-grey to-matte-black flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-8xl group-hover:text-emerald transition-colors"
                  >
                    {model.image}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-emerald mb-2">{model.name}</h3>
                    <p className="text-sm text-gray-400 bg-dark-grey/50 rounded px-3 py-1 w-fit">
                      {model.category}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Motor</span>
                      <span className="text-emerald font-semibold">{model.specs.motor}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Battery</span>
                      <span className="text-emerald font-semibold">{model.specs.battery}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Range</span>
                      <span className="text-emerald font-semibold">{model.specs.range}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Top Speed</span>
                      <span className="text-emerald font-semibold">{model.specs.topSpeed}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary text-sm"
                    >
                      View Details
                    </motion.button>

                    <div className="grid grid-cols-2 gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-secondary text-xs"
                      >
                        Test Ride
                      </motion.button>
                      <motion.a
                        href="https://wa.me/919994598837?text=Hi%20Vettry%20E-bikes,%20I%20am%20interested%20in%20the%20Ozotec%20vehicles"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-secondary text-xs flex items-center justify-center gap-1"
                      >
                        WhatsApp
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Ready to experience premium electric mobility?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('test-ride').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Book Your Test Ride Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
