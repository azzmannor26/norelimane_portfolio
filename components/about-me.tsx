"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import {
  Code,
  Brain,
  Network,
  ShieldCheck,
  BarChart3,
  PenLine,
  Users2,
  Briefcase,
} from "lucide-react"

export default function AboutMe() {
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

  return (
      <div className="w-full max-w-7xl mx-auto" ref={ref}>
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image Section */}
          <motion.div variants={itemVariants} className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden border-4 border-purple-600 shadow-xl shadow-purple-900/30 mx-auto">
            <Image
                src="norimane2.png"
                alt="Profile"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-purple-600 rounded-lg opacity-20 blur-xl z-0" />
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-blue-500 rounded-full opacity-20 blur-xl z-0" />
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <div>
                <h4 className="text-purple-400 font-medium mb-2">ABOUT ME</h4>
                <h2 className="text-4xl font-bold text-white mb-4">Aspiring Software Engineer & Space Dreamer</h2>
                <p className="text-gray-300 leading-relaxed">
                  I'm Azzman Nor Elimane, a 21-year-old software engineering student at ENSA Tangier 🌍. With a passion for
                  space and innovation, I specialize in
                  <span className="text-purple-400 font-medium"> web development, machine learning, deep learning, and cybersecurity</span>.
                  <br /><br />
                  My dream? To use technology to explore new frontiers and one day contribute to NASA’s missions 🚀. I also
                  dive into
                  <span className="text-purple-400 font-medium"> data science, poetry, leadership</span>, and <span className="text-purple-400 font-medium">entrepreneurship</span>,
                  where I merge logic with creativity to build meaningful, futuristic solutions.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-white mb-4">Core Competencies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Code className="text-white" />,
                      title: "Web Development",
                      desc: "Crafting fast, responsive, and accessible websites using modern tech stacks.",
                    },
                    {
                      icon: <Brain className="text-white" />,
                      title: "Machine Learning",
                      desc: "Designing models that learn, adapt, and drive intelligent decisions.",
                    },
                    {
                      icon: <Network className="text-white" />,
                      title: "Deep Learning",
                      desc: "Exploring the power of neural networks to solve complex problems.",
                    },
                    {
                      icon: <ShieldCheck className="text-white" />,
                      title: "Cybersecurity",
                      desc: "Protecting systems and data through secure design and analysis.",
                    },
                    {
                      icon: <BarChart3 className="text-white" />,
                      title: "Data Science",
                      desc: "Making sense of data to uncover insights and guide action.",
                    },
                    {
                      icon: <PenLine className="text-white" />,
                      title: "Poetry",
                      desc: "Expressing thoughts and emotions through rhythmic, written art.",
                    },
                    {
                      icon: <Users2 className="text-white" />,
                      title: "Leadership",
                      desc: "Inspiring and guiding teams toward a shared vision and success.",
                    },
                    {
                      icon: <Briefcase className="text-white" />,
                      title: "Entrepreneurship",
                      desc: "Building ideas into impactful ventures through creativity and grit.",
                    },
                  ].map((item, index) => (
                      <div
                          key={index}
                          className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                      >
                        <div className="bg-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
  )
}
