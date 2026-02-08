import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-orange-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-orange-400' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-orange-400' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <MessageSquare className="w-10 h-10" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">START YOUR </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              QUEST
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to create something extraordinary? Let's join forces!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <Send className="text-orange-500" />
                  Send Message
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-all text-white"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-all text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-all text-white resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:from-orange-600 hover:to-orange-700 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Launch Message
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Send size={20} />
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/20 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border-2 border-orange-500 group-hover:scale-110 transition-transform">
                    <Mail className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <a 
                      href="mailto:dev@example.com"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      dev@example.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/20 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center border-2 border-orange-500 group-hover:scale-110 transition-transform">
                    <MapPin className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-gray-400">
                      Remote / Based in Your City
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/20 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300">
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Connect
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👋
                </motion.span>
              </h4>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`w-14 h-14 bg-gray-800/50 border-2 border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-orange-500 transition-all`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-2 border-orange-500/30 rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-3 h-3 bg-orange-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-lg font-semibold">
                  Available for new projects
                </span>
              </div>
              <p className="text-gray-400 mt-2 ml-6">
                Let's build something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-orange-500/20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-500">
            © 2026 Code Warrior. Crafted with{' '}
            <motion.span
              className="inline-block text-orange-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            {' '}and lots of coffee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
