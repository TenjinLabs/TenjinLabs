'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Send, Palette, Code, Smartphone, MonitorSmartphone, Database, BarChart, CheckCircle, Users, Zap, PlusCircle, MinusCircle, Phone, Mail, Globe, Sun, Moon } from 'lucide-react'

const services = [
  { name: 'ETL', icon: Database },
  { name: 'Business Intelligence', icon: BarChart },
  { name: 'Design', icon: Palette },
  { name: 'Web Development', icon: Code },
  { name: 'Android Development', icon: Smartphone },
  { name: 'iOS Development', icon: MonitorSmartphone },
]

const technologies = [
   'MongoDB', 'AWS', 'Docker', 'Azure Data Factory', 'Kafka',
  'React', 'Next.js', 'Vue.js', 'Flutter', 'Node.js',
  'Python', 'Java', 'Swift', 'Kotlin', 'PostgreSQL',
  'Azure Data Factory', 'AWS Glue', 'Oracle Data Integrator', 'Telned Open Studio',
  'Tableau','Oracle BI', 'Microsoft Power BI','SAP'
]

const whyChooseUs = [
  { title: 'Expertise', description: 'Our team of seasoned professionals brings years of experience across various tech domains.', icon: Users },
  { title: 'Innovation', description: 'We stay at the forefront of technology, constantly adapting to deliver cutting-edge solutions.', icon: Zap },
  { title: 'Quality', description: 'We maintain the highest standards of quality in every project we undertake.', icon: CheckCircle },
]

const faqs = [
  {
    question: "What technologies do you use for web development?",
    answer: 'We use a variety of modern technologies including React, Next.js, Vue.js, and Angular for frontend development, and Node.js, Python, and Java for backend development. We choose the best tech stack based on your specific project requirements.'
  },
  {
    question: "Do you offer mobile app development for both iOS and Android?",
    answer: "Yes, we provide mobile app development services for both iOS and Android platforms. We can develop native apps using Swift for iOS and Kotlin for Android, or cross-platform apps using frameworks like React Native or Flutter."
  },
  {
    question: "What is ETL and how can it benefit my business?",
    answer: "ETL stands for Extract, Transform, Load. It's a process that involves extracting data from various sources, transforming it to fit operational needs, and loading it into the end target database. ETL can benefit your business by integrating data from multiple systems, improving data quality, and enabling more effective business intelligence and analytics."
  },
  {
    question: "How can Business Intelligence solutions improve my company's decision-making?",
    answer: "Business Intelligence (BI) solutions can provide valuable insights by analyzing your company's data. This can lead to better-informed decision-making, identification of new opportunities, optimization of operations, and improved understanding of customer behavior and market trends."
  },
  {
    question: "What's your approach to ensuring the security of web applications?",
    answer: "We take a multi-layered approach to security. This includes implementing secure coding practices, regular security audits, encryption of sensitive data, protection against common vulnerabilities like SQL injection and cross-site scripting, and staying up-to-date with the latest security patches and best practices."
  },
]

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <header className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
            >
              TenjinLabs
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'technologies', 'why-choose-us', 'contact', 'faq'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`capitalize ${activeSection === item ? (isDarkMode ? 'text-green-400' : 'text-green-600') : (isDarkMode ? 'text-gray-300' : 'text-gray-600')} transition-colors duration-200`}
                  onClick={() => scrollTo(item)}
                >
                  {item === 'why-choose-us' ? 'Why Choose Us' : item === 'faq' ? 'FAQ' : item}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </motion.button>
            </div>
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
            className={`fixed inset-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} bg-opacity-95 z-40 flex items-center justify-center md:hidden`}
          >
            <div className="flex flex-col items-center space-y-8">
              {['home', 'services', 'technologies', 'why-choose-us', 'contact', 'faq'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-2xl capitalize ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
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
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-100'} opacity-50`} />
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: isDarkMode ? 'rgb(30, 64, 200)' : 'rgb(200, 219, 254)', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: isDarkMode ? 'rgb(30, 58, 138)' : 'rgb(219, 234, 254)', stopOpacity: 0 }} />
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
                <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>
                  Innovate. Create.
                </span>
                <br />
                <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>Transform Your Business.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
              >
                Empowering businesses with cutting-edge technology solutions. Your journey to digital excellence starts here.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl`}
                onClick={() => scrollTo('contact')}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </section>

        <section id="services" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
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
                  whileHover={{ scale: 1.05 }}
                  className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-6 rounded-lg transition-all duration-300 shadow-lg`}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className={`w-8 h-8 mr-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                  </div>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Leveraging cutting-edge technologies to deliver robust and scalable solutions tailored to your business needs.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="technologies" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} relative overflow-hidden`}>
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
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
                  whileHover={{ scale: 1.1 }}
                  className={`${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'} px-4 py-2 rounded-full transition-all duration-300 shadow-md`}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: isDarkMode ? 'rgb(30, 64, 175)' : 'rgb(191, 219, 254)', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: isDarkMode ? 'rgb(30, 58, 138)' : 'rgb(219, 234, 254)', stopOpacity: 0 }} />
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

        <section id="why-choose-us" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
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
                  className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-6 rounded-lg shadow-lg`}
                >
                  <item.icon className={`w-12 h-12 ${isDarkMode ? 'text-green-400' : 'text-green-600'} mb-4`} />
                  <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{item.title}</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} relative overflow-hidden`}>
          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-bold mb-8 text-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}
            >
              Ready to transform your business with cutting-edge technology? Fill out the form below, and our expert team will get back to you shortly to discuss how we can elevate your digital presence.
            </motion.p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-xl space-y-6`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>First Name</label>
                      <input type="text" id="firstName" name="firstName" placeholder='John' className={`w-full px-4 py-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`} required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Last Name</label>
                      <input type="text" id="lastName" name="lastName" placeholder='Doe' className={`w-full px-4 py-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Email</label>
                      <input type="email" id="email" name="email" placeholder='john@tenjinlabs.in' className={`w-full px-4 py-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`} required />
                    </div>
                    <div>
                      <label htmlFor="phone" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder='+91901010078' className={`w-full px-4 py-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`} required />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Services Interested In</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {services.map((service) => (
                        <motion.button
                          key={service.name}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleService(service.name)}
                          className={`flex items-center justify-none space-x-2 p-3 rounded-md transition duration-300 ${
                            selectedServices.includes(service.name)
                              ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                              : isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          <service.icon className="w-5 h-5" />
                          <span className="text-sm font-medium">{service.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Requirements</label>
                    <textarea id="message" name="message" rows={4} className={`w-full px-4 py-2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`} required></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300 flex items-center justify-center`}
                    type="submit"
                  >
                    <Send className="mr-2" />
                    Send
                  </motion.button>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-xl space-y-6`}
              >
                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: isDarkMode ? 'rgb(30, 64, 175)' : 'rgb(191, 219, 254)', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: isDarkMode ? 'rgb(30, 58, 138)' : 'rgb(219, 234, 254)', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <motion.path
                fill="url(#grad3)"
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
                <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className={isDarkMode ? 'text-green-400' : 'text-green-600'} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+91 (79) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className={isDarkMode ? 'text-green-400' : 'text-green-600'} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>admin@tenjinlabs.in</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className={isDarkMode ? 'text-green-400' : 'text-green-600'} />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>www.tenjinlabs.in</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Office Hours</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Saturday: 10:00 AM - 4:00 PM</p>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Sunday: Closed</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: isDarkMode ? 'rgb(30, 64, 175)' : 'rgb(191, 219, 254)', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: isDarkMode ? 'rgb(30, 58, 138)' : 'rgb(219, 234, 254)', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <motion.path
                fill="url(#grad3)"
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

        <section id="faq" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
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
                  className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg overflow-hidden`}
                >
                  <button
                    className="w-full p-4 text-left flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className={`font-medium text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{faq.question}</span>
                    {expandedFAQ === index ? (
                      <MinusCircle className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                    ) : (
                      <PlusCircle className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
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
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8 ${isDarkMode ? 'border-t border-gray-800' : 'border-t border-gray-200'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>&copy; 2024 TenjinLabs. All rights reserved.</p>
        </div>
      </footer>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-xl max-w-md w-full m-4`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Thank You!</h3>
                <button onClick={() => setIsSubmitted(false)} className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                We&apos;ve received your message and appreciate your interest in our services. Our team will review your inquiry and get back to you shortly.
              </p>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                In the meantime, feel free to explore our website for more information about our services and technologies.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300`}
                onClick={() => setIsSubmitted(false)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
