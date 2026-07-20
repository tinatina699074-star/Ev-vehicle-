import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Models', href: '#models' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-dark-grey/50 border-t border-emerald/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald to-emerald/60 flex items-center justify-center">
                <span className="text-matte-black font-bold text-sm">V</span>
              </div>
              <h3 className="text-emerald font-bold">Vettry E-bikes</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Premium Ozotec Electric Vehicles Showroom in Coimbatore
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1"
          >
            <h4 className="text-emerald font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-emerald transition-colors text-sm block"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1"
          >
            <h4 className="text-emerald font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Siruvani Main Road, Alandhurai, Coimbatore</p>
              <p>📞 <a href="tel:+919994598837" className="hover:text-emerald transition-colors">+91 9994 598 837</a></p>
              <p>⏰ 10 AM - 8 PM Daily</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1"
          >
            <h4 className="text-emerald font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: '📱', label: 'Instagram', url: '#' },
                { icon: '👍', label: 'Facebook', url: '#' },
                { icon: '💬', label: 'WhatsApp', url: 'https://wa.me/919994598837' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-lg border border-emerald/20 hover:border-emerald/40 transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Vettry E-bikes. All rights reserved.</p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ color: '#00D26A' }}
                className="hover:text-emerald transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#00D26A' }}
                className="hover:text-emerald transition-colors"
              >
                Terms & Conditions
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-6 text-xs text-gray-500"
        >
          <p>
            🌿 Join us in building a sustainable future with Ozotec Electric Vehicles
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
