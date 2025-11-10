import { motion, useScroll, useTransform } from 'framer-motion'
import { forwardRef } from 'react'

const Section = forwardRef(function Section(
  { id, eyebrow, title, description, children, gradient = 'from-indigo-50 via-white to-cyan-50' },
  ref
) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])

  return (
    <section id={id} ref={ref} className={`relative py-24 sm:py-28 bg-gradient-to-b ${gradient}`}>
      <div className="absolute inset-0 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div style={{ y, opacity }}>
          {eyebrow && (
            <div className="text-xs tracking-wider uppercase text-gray-600 mb-2">{eyebrow}</div>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="mt-3 text-gray-700 max-w-2xl">{description}</p>
          )}
          <div className="mt-10">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Section
