import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5"
      >
        <h3 className="text-lg font-semibold">Let's collaborate</h3>
        <p className="mt-2 text-gray-700">Have an idea or a project in mind? I’d love to help turn it into a polished web experience.</p>
        <div className="mt-6 space-y-3 text-sm">
          <a className="block" href="mailto:hiremathpraveen150@gmail.com">📧 hiremathpraveen150@gmail.com</a>
          <a className="block" href="https://github.com/" target="_blank" rel="noreferrer">🐙 GitHub</a>
          <a className="block" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">💼 LinkedIn</a>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        onSubmit={(e) => { e.preventDefault(); alert('Thanks! I\'ll get back to you soon.'); }}
        className="p-6 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700">Name</label>
            <input required className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input type="email" required className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-700">Message</label>
            <textarea rows="5" required className="mt-1 w-full rounded-xl border border-gray-200 p-3 focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
        </div>
        <button className="mt-4 px-5 py-3 rounded-xl bg-black text-white shadow-lg shadow-black/10 hover:shadow-black/20 transition-shadow">Send message</button>
      </motion.form>
    </div>
  )
}
