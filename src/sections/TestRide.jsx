import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'

export default function TestRide() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data) => {
    try {
      // Send to WhatsApp
      const message = `Test Ride Request:%0AName: ${data.name}%0APhone: ${data.phone}%0AEmail: ${data.email}%0APreferred Model: ${data.model}%0ADate: ${data.date}%0ATime: ${data.time}`
      window.open(`https://wa.me/919994598837?text=${message}`, '_blank')
      
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <section id="test-ride" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Book Your Test Ride</span>
          </h2>
          <p className="text-gray-400 text-lg font-sora">
            Experience the thrill of Ozotec electric vehicles
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass rounded-2xl p-8 sm:p-12 border border-emerald/20"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-4 bg-emerald/20 border border-emerald/40 rounded-lg text-emerald"
            >
              ✓ Test ride request sent! We'll contact you soon.
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-emerald mb-2">Full Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="Your name"
                className="w-full bg-dark-grey/50 border border-emerald/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald transition-colors"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald mb-2">Phone Number</label>
              <input
                {...register('phone', { required: 'Phone is required' })}
                type="tel"
                placeholder="Your phone"
                className="w-full bg-dark-grey/50 border border-emerald/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald transition-colors"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald mb-2">Email</label>
              <input
                {...register('email', { required: 'Email is required' })}
                type="email"
                placeholder="Your email"
                className="w-full bg-dark-grey/50 border border-emerald/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald transition-colors"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald mb-2">Preferred Model</label>
              <select
                {...register('model', { required: 'Model is required' })}
                className="w-full bg-dark-grey/50 border border-emerald/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald transition-colors"
              >
                <option value="">Select a model</option>
                <option value="Flio Pro V2">Flio Pro V2</option>
                <option value="Flio Max">Flio Max</option>
                <option value="Flio Neo">Flio Neo</option>
                <option value="Bheem">Bheem</option>
                <option value="Bheem Lite">Bheem Lite</option>
              </select>
              {errors.model && <p className="text-red-400 text-sm mt-1">{errors.model.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald mb-2">Preferred Date</label>
              <input
                {...register('date', { required: 'Date is required' })}
                type="date"
                className="w-full bg-dark-grey/50 border border-emerald/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald transition-colors"
              />
              {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-emerald mb-2">Preferred Time</label>
              <input
                {...register('time', { required: 'Time is required' })}
                type="time"
                className="w-full bg-dark-grey/50 border border-emerald/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald transition-colors"
              />
              {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald mb-2">Message (Optional)</label>
            <textarea
              {...register('message')}
              placeholder="Any additional information..."
              rows="4"
              className="w-full bg-dark-grey/50 border border-emerald/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald transition-colors resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full btn-primary mt-8 text-lg"
          >
            Request Test Ride
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
