'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Send, Palette, Code, Smartphone, Apple, Database, BarChart, CheckCircle, Users, Zap, PlusCircle, MinusCircle } from 'lucide-react'

const services = [
  { name: 'Web Design', icon: Palette },
  { name: 'Web Development', icon: Code },
  { name: 'Android Development', icon: Smartphone },
  { name: 'iOS Development', icon: Apple },
  { name: 'ETL', icon: Database },
  { name: 'Business Intelligence', icon: BarChart },
]

const technologies = [
  'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js',
  'Python', 'Java', 'Swift', 'Kotlin', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow'
]

const whyChooseUs = [
  { title: 'Expertise', description: 'Our team of seasoned professionals brings years of experience across various tech domains.', icon: Users },
  { title: 'Innovation', description: 'We stay at the forefront of technology, constantly adapting to deliver cutting-edge solutions.', icon: Zap },
  { title: 'Quality', description: 'We maintain the highest standards of quality in every project we undertake.', icon: CheckCircle },
]

const faqs = [
  {
    question: 'What technologies do you use for web development?',
    answer: 'We use a variety of modern technologies including React, Next.js, Vue.js, and Angular for frontend development, and Node.js, Python, and Java for backend development. We choose the best tech stack based on your specific project requirements.'
  },
  {
    question: 'Do you offer mobile app development for both iOS and Android?',
    answer: 'Yes, we provide mobile app development services for both iOS and Android platforms. We can develop native apps using Swift for iOS and Kotlin for Android, or cross-platform apps using frameworks like React Native or Flutter.'
  },
  {
    question: 'What is ETL and how can it benefit my business?',
    answer: 'ETL stands for Extract, Transform, Load. It s a process that involves extracting data from various sources, transforming it to fit operational needs, and loading it into the end target database. ETL can benefit your business by integrating data from multiple systems, improving data quality, and enabling more effective business intelligence and analytics.'
  },
  {
    question: 'How can Business Intelligence solutions improve my company s decision-making?',
    answer: 'Business Intelligence (BI) solutions can provide valuable insights by analyzing your company s data. This can lead to better-informed decision-making, identification of new opportunities, optimization of operations, and improved understanding of customer behavior and market trends.'
  },
  {
    question: 'What s your approach to ensuring the security of web applications?',
    answer: 'We take a multi-layered approach to security. This includes implementing secure coding practices, regular security audits, encryption of sensitive data, protection against common vulnerabilities like SQL injection and cross-site scripting, and staying up-to-date with the latest security patches and best practices.'
  },
]

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'technologies', 'why-choose-us', 'contact', 'faq']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const toggleService = (serviceName: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceName)
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    )
  }

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white font-sans">
      <header className="fixed w-full z-50 bg-gray-900 bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              TechNova
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'technologies', 'why-choose-us', 'contact', 'faq'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`capitalize ${activeSection === item ? 'text-pink-500' : 'text-gray-300'} transition-colors duration-200`}
                  onClick={() => scrollTo(item)}
                >
                  {item === 'why-choose-us' ? 'Why Choose Us' : item === 'faq' ? 'FAQ' : item}
                </motion.button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {['home', 'services', 'technologies', 'why-choose-us', 'contact', 'faq'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl capitalize text-white"
                  onClick={() => scrollTo(item)}
                >
                  {item === 'why-choose-us' ? 'Why Choose Us' : item === 'faq' ? 'FAQ' : item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-gray-900 opacity-50" />
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgb(192,132,252)', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: 'rgb(192,132,252)', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,90.7C672,64,768,64,864,85.3C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                fill="url(#grad1)"
                animate={{
                  d: [
                    "M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,90.7C672,64,768,64,864,85.3C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,197.3C672,203,768,181,864,181.3C960,181,1056,203,1152,213.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 20,
                  ease: "linear",
                }}
              />
            </svg>
          </div>
          <div className="container mx-auto px-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Innovate. Create.
                </span>
                <br />
                <span className="text-white">Transform Your Business.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
              >
                Empowering businesses with cutting-edge technology solutions. Your journey to digital excellence starts here.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, backgroundColor: "#D946EF" }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
                onClick={() => scrollTo('contact')}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent" />
        </section>

        <section id="services" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className="bg-gray-800 p-6 rounded-lg transition-all duration-300 border border-gray-700 group"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 mr-4 text-pink-500 group-hover:text-purple-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                  </div>
                  <p className="text-gray-400">
                    Leveraging cutting-edge technologies to deliver robust and scalable solutions tailored to your business needs.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="technologies" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Technologies We Master
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className="bg-gray-800 px-4 py-2 rounded-full transition-all duration-300 font-medium border border-gray-700"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Why Choose Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <item.icon className="w-12 h-12 text-pink-500 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Get in Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-300 mb-1">Firstname</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-300 mb-1">Lastname</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                  </div>
                  <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                    <input type="text" id="number" name="number" className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Services Interested In</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <motion.button
                        key={service.name}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleService(service.name)}
                        className={`flex items-center justify-start space-x-2 p-3 rounded-md transition duration-300 ${
                          selectedServices.includes(service.name)
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        <service.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{service.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#D946EF" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300 flex items-center justify-center"
                  type="submit"
                >
                  <Send className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
          <div className="absolute inset-0 z-0">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgb(192,132,252)', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgb(192,132,252)', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <motion.path
                fill="url(#grad2)"
                fillOpacity="1"
                initial={{ d: "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
                animate={{
                  d: [
                    "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,176C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 20,
                  ease: "linear",
                }}
              />
            </svg>
          </div>
        </section>

        <section id="faq" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full p-4 text-left flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    {expandedFAQ === index ? (
                      <MinusCircle className="w-6 h-6 text-purple-400" />
                    ) : (
                      <PlusCircle className="w-6 h-6 text-purple-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4"
                      >
                        <p className="text-gray-300">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">&copy; 2023 TechNova. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
