"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Send, Mail, Phone, Github, Linkedin, Instagram, Loader2 } from "lucide-react"

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        const form = e.target as HTMLFormElement
        form.reset()
      }, 3000)
    }, 1500)
  }

  return (
      <div className="w-full max-w-7xl mx-auto" ref={ref}>
        <motion.div variants={{ visible: { transition: { staggerChildren: 0.2 } } }} initial="hidden" animate={controls} className="space-y-12">
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.
            </p>
          </motion.div>

          <motion.div variants={{ hidden: {}, visible: {} }} className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8">
              {/* Email */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                <div className="bg-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 text-sm">azzmannorelimane@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
                <div className="bg-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">+212 6 00 00 00 00</p>
              </div>

              {/* Socials */}
              <div className="grid grid-cols-3 gap-4">
                {/* GitHub */}
                <a
                    href="https://github.com/azzmannor26/azzmannourelimane"
                    target="_blank"
                    className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <Github className="text-white mb-2" />
                  <span className="text-gray-300 text-xs">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/nour-elimane-azzman-a348b6239/"
                    target="_blank"
                    className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <Linkedin className="text-white mb-2" />
                  <span className="text-gray-300 text-xs">LinkedIn</span>
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/niniazzman"
                    target="_blank"
                    className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <Instagram className="text-white mb-2" />
                  <span className="text-gray-300 text-xs">Instagram</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

                {isSubmitted ? (
                    <div className="bg-green-900 bg-opacity-30 border border-green-700 text-green-300 p-4 rounded-lg">
                      Thank you for your message! I'll get back to you soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                          <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                          <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="Your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Subject"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Your message"
                        ></textarea>
                      </div>

                      <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Sending...
                            </>
                        ) : (
                            <>
                              <Send size={18} />
                              Send Message
                            </>
                        )}
                      </button>
                    </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
  )
}
