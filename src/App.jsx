import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Layers, Rocket, Workflow, Mail, Smartphone, Code2, Palette } from 'lucide-react'

function Badge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm"
    >
      <Sparkles size={14} className="text-fuchsia-600" />
      Award‑winning app studio
    </motion.div>
  )
}

function Navbar() {
  const items = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/40 bg-white/70 backdrop-blur shadow-lg">
          <a href="#" className="flex items-center gap-2 px-4 py-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 text-white">
              <Sparkles size={18} />
            </span>
            <span className="text-sm font-semibold tracking-tight text-neutral-800">Flames Apps</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 px-4">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                {i.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">
              Start a project <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-40 text-center sm:px-8">
        <Badge />
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl"
        >
          We design and build standout apps
          <br className="hidden sm:block" />
          that people love to use
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-5 max-w-2xl text-base text-neutral-700 sm:text-lg"
        >
          Strategy, design, and engineering for iOS, Android, and Web. From idea to launch, we ship pixel‑perfect, high‑performance products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-white shadow-lg shadow-neutral-900/10 hover:bg-neutral-800">
            Start your project <ArrowRight size={18} />
          </a>
          <a href="#work" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-neutral-800 hover:bg-neutral-50">
            See our work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid w-full grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {['Figma', 'Stripe', 'Shopify', 'Notion'].map((brand) => (
            <div key={brand} className="rounded-xl border border-neutral-200 bg-white/70 p-3 text-sm text-neutral-600 backdrop-blur">
              Trusted by {brand} teams
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 text-white">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </motion.div>
  )
}

function Services() {
  const services = [
    { icon: Smartphone, title: 'Product Strategy', desc: 'User research, roadmapping, and validation to de‑risk development.' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Brand‑aligned, accessible, and delightful interfaces for every platform.' },
    { icon: Code2, title: 'App Development', desc: 'Native iOS, Android, and Web apps engineered for speed and reliability.' },
    { icon: Layers, title: 'Scale & Growth', desc: 'Analytics, A/B tests, and iteration to drive retention and revenue.' },
  ]

  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Everything you need to ship a great app
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ index, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-neutral-200 bg-white p-6"
    >
      <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-600">
        <Workflow size={16} />
        Step {index}
      </div>
      <h4 className="text-lg font-semibold text-neutral-900">{title}</h4>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </motion.div>
  )
}

function Process() {
  const steps = [
    { title: 'Discover', desc: 'We run workshops to align on goals, users, and success metrics.' },
    { title: 'Design', desc: 'Rapid prototyping and user testing to validate the experience.' },
    { title: 'Develop', desc: 'Agile sprints with weekly demos and transparent progress.' },
    { title: 'Launch', desc: 'Polish, deploy, and plan iteration with analytics in place.' },
  ]

  return (
    <section id="process" className="relative py-24 sm:py-28 bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            A collaborative, transparent process
          </motion.h2>
          <Rocket className="hidden sm:block text-violet-600" />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <ProcessStep key={s.title} index={i + 1} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const items = [
    {
      title: 'Nova Finance',
      tag: 'Fintech',
      desc: 'A modern mobile bank with delightful motion and ironclad security.',
      gradient: 'from-sky-400 via-blue-500 to-indigo-500',
    },
    {
      title: 'Pulse Health',
      tag: 'Healthcare',
      desc: 'Telemedicine that feels human. HIPAA‑compliant and accessible.',
      gradient: 'from-fuchsia-400 via-violet-500 to-purple-600',
    },
    {
      title: 'SwiftCart',
      tag: 'E‑commerce',
      desc: 'Blazing‑fast storefront with personalization and subscriptions.',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    },
  ]

  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Selected work
        </motion.h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div className={`h-40 w-full bg-gradient-to-br ${card.gradient}`} />
              <div className="p-6">
                <span className="text-xs font-medium text-neutral-500">{card.tag}</span>
                <h3 className="mt-1 text-lg font-semibold text-neutral-900">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{card.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900">
                  View case study <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Ready to build something extraordinary?
            </motion.h2>
            <p className="mt-3 max-w-xl text-neutral-300">
              Tell us about your vision and timeline. We typically reply within one business day.
            </p>

            <div className="mt-8 flex items-center gap-4 text-neutral-300">
              <Mail size={18} /> hello@flamesapps.studio
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-neutral-300">Name</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-neutral-300">Project details</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Tell us about your product, timeline, and budget." />
              </div>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-medium text-neutral-900 hover:bg-neutral-100">
              Send <ArrowRight size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-neutral-600">
          <Sparkles size={18} className="text-fuchsia-600" /> Flames Apps — We build products people love.
        </div>
        <div className="text-sm text-neutral-500">© {new Date().getFullYear()} Flames Apps. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}
