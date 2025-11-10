import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <Section
        id="about"
        eyebrow="About"
        title="Who I am"
        description="I'm Praveen Hiremath, a BCA student and web developer focused on building fast, interactive, and visually engaging web apps. I enjoy turning problems into elegant, user-friendly solutions."
        gradient="from-white via-indigo-50/60 to-cyan-50/60"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5">
            <p className="leading-relaxed">
              I craft responsive websites and rich user interfaces using React, Tailwind CSS, and Framer Motion. I love learning new technologies and bringing delightful interactions to the web.
            </p>
            <p className="mt-4 leading-relaxed">
              Beyond coding, I'm curious about design systems and how motion can guide user attention. I'm actively building projects to sharpen my skills and contribute to real-world products.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5">
            <ul className="space-y-3 text-sm">
              <li><span className="font-semibold">Location:</span> India</li>
              <li><span className="font-semibold">Education:</span> Bachelor of Computer Applications (BCA)</li>
              <li><span className="font-semibold">Focus:</span> Frontend engineering, animations, UX</li>
              <li><span className="font-semibold">Open to:</span> Freelance and internship opportunities</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Skills"
        title="What I use to build"
        description="A blend of modern frameworks, design systems, and animation libraries to ship polished experiences."
        gradient="from-cyan-50/60 via-white to-indigo-50/60"
      >
        <Skills />
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Selected work"
        description="A peek at things I've built and experimented with."
        gradient="from-white via-indigo-50/60 to-cyan-50/60"
      >
        <Projects />
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Say hello"
        description="Whether you have a project or just want to connect, my inbox is open."
        gradient="from-cyan-50/60 via-white to-indigo-50/60"
      >
        <Contact />
      </Section>

      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Praveen Hiremath. Built with love, code, and good vibes.
      </footer>
    </div>
  )
}

export default App
