import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Modern Portfolio',
    description: 'A sleek, animated portfolio with 3D hero and smooth scroll interactions.',
    tags: ['React', 'Tailwind', 'Spline'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'E-commerce UI',
    description: 'Responsive product gallery and cart interactions with elegant motion.',
    tags: ['React', 'Framer Motion'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Dashboards',
    description: 'Clean, data-rich dashboards with delightful microinteractions.',
    tags: ['Tailwind', 'Charts'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXNoYm9hcmRzfGVufDB8MHx8fDE3NjI3ODI0MTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, idx) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.06, duration: 0.6 }}
          className="group relative overflow-hidden rounded-2xl bg-white/80 ring-1 ring-black/5 hover:shadow-xl hover:shadow-black/10"
        >
          <div className="aspect-[16/11] overflow-hidden">
            <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="p-5">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-gray-700">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white/90">{t}</span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
