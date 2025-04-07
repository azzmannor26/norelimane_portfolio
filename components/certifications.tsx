"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const certifications = [
    {
      title: "UI/UX Design Professional",
      issuer: "Google",
      date: "January 2023",
      description:
        "Comprehensive certification covering user research, wireframing, prototyping, and usability testing.",
      link: "#",
    },
    {
      title: "Front-End Web Development",
      issuer: "Meta",
      date: "June 2022",
      description: "Advanced front-end development techniques using React, responsive design, and modern CSS.",
      link: "#",
    },
    {
      title: "Full-Stack JavaScript Developer",
      issuer: "Udacity",
      date: "December 2021",
      description: "Full-stack development with Node.js, Express, MongoDB, and client-side JavaScript frameworks.",
      link: "#",
    },
    {
      title: "Advanced React & Redux",
      issuer: "Coursera",
      date: "August 2021",
      description: "Deep dive into React ecosystem, Redux state management, and performance optimization.",
      link: "#",
    },
    {
      title: "UI Animation with CSS and JavaScript",
      issuer: "LinkedIn Learning",
      date: "March 2021",
      description:
        "Creating engaging UI animations using CSS transitions, keyframes, and JavaScript animation libraries.",
      link: "#",
    },
    {
      title: "Create a Website Using WordPress: Free Hosting & Sub-domain",
      issuer: "Coursera",
      date: "September 2023",
      description: "Learned to build and deploy WordPress websites using free hosting and sub-domain services.",
      link: "https://www.coursera.org/account/accomplishments/verify/SUUB7WYH3MKY?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto" ref={ref}>
      <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-12">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuous learning is essential in the ever-evolving tech industry. Here are some of my professional
            certifications and achievements.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all hover:transform hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
                  <Award className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-purple-400 text-sm mb-3">{cert.issuer}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    {cert.date}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                  <Link
                    href={cert.link}
                    className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Certificate
                    <ExternalLink size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

