"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link" // 👈 Add this line
import { motion, AnimatePresence } from "framer-motion"

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = ["Freelance", "My Projects", "Extracurricular"]

  const projects = [
    // Freelance Projects
    [
      {
        title: "E-Commerce Website – Vida Verde (Spain)",
        image: "freelance/vidaverdeapp.jpg?height=300&width=400",
        description:
            "2025 · Developed an e-commerce site for selling organic farm products in Spain using Spring Boot, React, and PostgreSQL. Integrated e-commerce flows, implemented CI/CD, and coordinated weekly meetings with the client for continuous improvement.",
        url: "/#contact",
      },
      {
        title: "Restaurant Ordering App – GourmetGo",
        image: "projects/restaurant.jpg?height=300&width=400",
        description:
            "2025 · Developed a web application for a local restaurant to handle online orders, table reservations, and menu management. Integrated secure payment gateway and real-time order tracking.\nTech: React, Node.js, Express, MongoDB, Stripe API.",
        url: "/#contact",
      },
    ],

    // Personal Projects
    [
      {
        title: "MIRAI – AI-Driven Internship & HR Automation",
        image: "projects/mirai3.jpg?height=300&width=400",
        description:
            "2024 – 2025 · Reinventing intern management with AI. Features include smart recruitment, real-time progress tracking, automated evaluations, and chatbot integration.\nTech: React.js, Spring Boot, PostgreSQL, UML, CV filtering system.",
        url: "/#contact",
      },
      {
        title: "CLUBHUB – School Club Management Platform",
        image: "projects/clubhub.jpg?height=300&width=400",
        description:
            "Sep – Nov 2024 · Web platform to manage school clubs, streamline communication between administrators and members, track activities and attendance.\nTech: Nest.js, Next.js.",
        url: "https://github.com/azzmannor26/azzmannourelimane/tree/CLUBHUBAPP",
      },
      {
        title: "GeniusLab-SysAdmin & DevOps – Youth Activity Site",
        image: "projects/activity.jfif?height=300&width=400",
        description:
            "May – Jun 2024 · Infrastructure for a kids’ extracurricular activity site. Set up NGINX, Docker, and CI/CD with Kubernetes. Deployed on AWS with Ubuntu and Kali Linux.\nTech: Docker, Kubernetes, AWS, Linux, NGINX, PostgreSQL, SSL.",
        url: "https://github.com/azzmannor26/azzmannourelimane/tree/Devops",
      },
      {
        title: "FMPT – Pneumonia Diagnosis AI Tool",
        image: "projects/pneumonie.jpg?height=300&width=400",
        description:
            "2025 · Built a deep learning model to assist radiologists in diagnosing pneumonia from chest X-rays. Included GUI and DICOM image processing.\nTech: Python, TensorFlow/PyTorch, OpenCV, Tkinter/PyQt.",
        url: "/#contact",
      },
      {
        title: "Omega Capital – Email Management BOT",
        image: "projects/gmail.png?height=300&width=400",
        description:
            "Jul – Aug 2024 · Developed an automation bot to manage Gmail/Yahoo email flows securely using OAuth, Flask, and Selenium with logging and error handling.\nTech: Python, Selenium, Threads, OAuth 2.0.",
        url: "/#contact",
      },
      {
        title: "School Management System – Java & Spring",
        image: "projects/school-management-app.jpg?height=300&width=400",
        description: "2024 · Developed a comprehensive school management system for handling student data, courses, staff, and grades. Backend built in Java with Spring Boot.",
        url: "https://github.com/azzmannor26/azzmannourelimane/tree/Schoolmanagement_JAVAFX",
      },
      {
        title: "Malware Propagation Modeling – SIR & SIS Models",
        image: "projects/malware33.svg?height=300&width=400",
        description:
            "2024 · This project focuses on simulating the spread of computer viruses using epidemic models. We divided the work into three teams: one studied the SIR and SIS equations, another implemented simulations using R, and the third analyzed the outcomes. The goal was to assess how well these models reflect real-world malware propagation and understand their limitations.",
        url: "https://github.com/azzmannor26/azzmannourelimane/tree/malware",
      },
      {
        title: "Machine Learning Projects – Predictive Systems & Image Processing",
        image: "projects/price.webp?height=300&width=400", // Replace with your actual image if available
        description:
            "2023 – 2024 · A collection of ML projects focused on prediction and classification problems:\n\n• SONAR Rock vs Mine Classification\n• Image Processing Pipeline\n• Diabetes Prediction Model\n• Credit Card Fraud Detection\n• Housing Price Prediction\n\nTech: Python, Pandas, Scikit-learn, Matplotlib, Seaborn, OpenCV, Streamlit.",
        url: "https://github.com/azzmannor26/azzmannourelimane/tree/machine-learning-projects", // Customize the URL if needed
      },
    ],

    // Extracurricular Projects
    [
      {
        title: "AIESEC – Team Leader",
        image: "extracurricular/aiesec.jpeg?height=300&width=400",
        description:
            "Sept 2022 – Sept 2023 · Led a local team within the OGV (Outgoing Global Volunteer) product. Developed leadership, managed service quality, and organized community-focused events.",
        url: "https://aiesec.org/",
      },
      {
        title: "AIESEC – Vice President OGV",
        image: "extracurricular/Design sans titre.png?height=300&width=400",
        description:
            "Sept 2023 – Feb 2025 · Oversaw product strategy, sales, and customer success. Directed conferences, audits, and mentored team leaders.",
        url: "https://aiesec.org/",
      },
      {
        title: "ENSATPress Club – Public Speaking & OC",
        image: "extracurricular/topspeaker.jpeg?height=300&width=400",
        description:
            "Feb 2023 · Active member of the university press club. Contributed as a speaker and organizing committee member for campus dialogue and creative expression.",
        url: "/#contact",
      },
      {
        title: "Poetry Collection – *Conversation in the Dark*",
        image: "extracurricular/poetry.png?height=300&width=400",
        description:
            "Published Apr 2023 · A tragic poetic dialogue between a father and daughter, exploring grief, nostalgia, and shattered hope. A personal debut exploring lyrical storytelling.",
        url: "/#contact",
      },
      {
        title: "NASA Space Apps Challenge – Hackathon",
        image: "extracurricular/nasaspace.jpeg?height=300&width=400",
        description:
            "Oct 2023 · Led a team in the NASA Space Apps Challenge. Project: 'SAR-Tistic Creation' – transforming radar data into visual art. Placed 2nd in regional challenge under the 'Explore Open Science Together' theme.",
        url: "https://github.com/azzmannor26/azzmannourelimane/tree/hackathons",
      },
    ],
  ]

  return (
      <div className="w-full">
        <div className="flex rounded-full bg-gray-800 p-1 mb-8 max-w-xl mx-auto">
          {tabs.map((tab, index) => (
              <button
                  key={index}
                  className={`relative flex-1 py-2 text-sm font-medium transition-all duration-300 ${
                      activeTab === index ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(index)}
              >
                {activeTab === index && (
                    <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-purple-700 rounded-full"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                    />
                )}
                {tab}
              </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects[activeTab].map((project, index) => (
                <Link href={project.url} key={index} passHref>
                  <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <div className="relative h-48">
                      <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                    <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                      <p className="text-gray-300 text-sm whitespace-pre-line">{project.description}</p>
                    </div>
                  </motion.div>
                </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
  )
}