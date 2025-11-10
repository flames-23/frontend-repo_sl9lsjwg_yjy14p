import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-xs tracking-wider uppercase text-gray-700 bg-white/70 backdrop-blur px-3 py-1 rounded-full ring-1 ring-black/5"
          >
            Web Developer • BCA Student
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Praveen Hiremath</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 text-lg text-gray-700"
          >
            I build modern, fast and delightful web experiences. I love crafting interactive interfaces and bringing ideas to life on the web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-black text-white shadow-lg shadow-black/10 hover:shadow-black/20 transition-shadow">See my projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur ring-1 ring-black/10 hover:ring-black/20">Get in touch</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
