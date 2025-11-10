import { motion } from 'framer-motion'
import { Code2, Globe, Cpu, Database, Rocket, Layers } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
  { icon: Globe, title: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'] },
  { icon: Layers, title: 'UI Patterns', items: ['shadcn/ui', 'Radix UI', 'Animation'] },
  { icon: Cpu, title: 'Backend', items: ['FastAPI', 'REST APIs'] },
  { icon: Database, title: 'Database', items: ['MongoDB', 'Mongoose-like patterns'] },
  { icon: Rocket, title: 'Tooling', items: ['Git', 'Vercel', 'Netlify'] },
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((card, idx) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.05, duration: 0.6 }}
          className="p-6 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 hover:shadow-lg hover:shadow-black/5 transition-shadow"
        >
          <div className="flex items-center gap-3">
            <card.icon className="h-6 w-6 text-indigo-600" />
            <h3 className="font-semibold">{card.title}</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {card.items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
