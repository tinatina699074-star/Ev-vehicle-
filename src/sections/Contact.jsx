import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const contactInfo = [
    {
      icon: '📍',
      label: 'Address',
      value: 'Siruvani Main Road, Alandhurai, Coimbatore',
      link: 'https://maps.app.goo.gl/vettry',
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 9994 598 837',
      link: 'tel:+919994598837',
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: 'Chat with us',
      link: 'https://wa.me/919994598837',
    },
    {
      icon: '⏰',
      label: 'Business Hours',
      value: '10 AM - 8 PM Daily',
      link: '#',
    },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg font-sora">
            We're here to help. Contact us anytime!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="glass rounded-lg p-6 border border-emerald/20 hover:border-emerald/40 transition-all block group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-3xl group-hover:text-emerald transition-colors flex-shrink-0"
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-emerald font-semibold mb-1">{info.label}</h3>
                    <p className="text-gray-300 group-hover:text-emerald transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass rounded-lg p-8 border border-emerald/20"
          >
            <h3 className="text-2xl font-bold text-emerald mb-4">Quick Inquiry</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Send us a message on WhatsApp for instant response!
              </p>

              <motion.a
                href="https://wa.me/919994598837?text=Hi%20Vettry%20E-bikes,%20I%20have%20a%20query%20about%20Ozotec%20vehicles"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full text-center block"
              >
                💬 Send WhatsApp Message
              </motion.a>

              <motion.a
                href="tel:+919994598837"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full text-center block"
              >
                📞 Call Us
              </motion.a>

              {/* Social Info */}
              <div className="mt-6 pt-6 border-t border-emerald/20">
                <p className="text-gray-400 text-xs mb-3">Follow us for updates</p>
                <div className="flex gap-3">
                  {[
                    { icon: '📱', label: 'Instagram', url: '#' },
                    { icon: '👍', label: 'Facebook', url: '#' },
                    { icon: '🔗', label: 'LinkedIn', url: '#' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.2 }}
                      className="w-10 h-10 glass rounded-lg flex items-center justify-center text-xl border border-emerald/20 hover:border-emerald/40 transition-colors"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <motion.a
            href="https://maps.app.goo.gl/vettry"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="glass rounded-lg border border-emerald/20 hover:border-emerald/40 transition-colors overflow-hidden block h-80"
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-grey to-matte-black">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-emerald font-semibold">Visit Our Showroom</p>
                <p className="text-gray-400 text-sm mt-2">Click to open Google Maps</p>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
