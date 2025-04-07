import Link from "next/link"
import { Linkedin, Facebook, Instagram, ArrowRight, Download } from "lucide-react"
import SpaceBackground from "@/components/space-background"
import SkillCircle from "@/components/skill-circle"
import ProjectTabs from "@/components/project-tabs"
import FloatingAstronaut from "@/components/floating-astronaut"
import FloatingPlanet from "@/components/floating-planet"
import FloatingRocket from "@/components/floating-rocket"
import AboutMe from "@/components/about-me"
import Certifications from "@/components/certifications"
import ContactForm from "@/components/contact-form"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SpaceBackground />

      {/* Navigation */}
      <header className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <div className="text-white text-2xl font-bold">SPACE</div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-white hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-white hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-white hover:text-purple-400 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-white hover:text-purple-400 transition-colors">
            Projects
          </Link>
          <Link href="#certifications" className="text-white hover:text-purple-400 transition-colors">
            Certifications
          </Link>
          <Link href="#contact" className="text-white hover:text-purple-400 transition-colors">
            Contact
          </Link>
          <div className="flex gap-2">
            <Link href="https://www.linkedin.com/in/nour-elimane-azzman-a348b6239/" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all">
              <Linkedin size={18} className="text-white" />
            </Link>
            <Link href="https://www.facebook.com/share/1BTKad8ihK/?mibextid=wwXIfr" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all">
              <Facebook size={18} className="text-white" />
            </Link>
            <Link href="https://www.instagram.com/niniazzman" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all">
              <Instagram size={18} className="text-white" />
            </Link>
          </div>
        </nav>
        <Link
          href="#contact"
          className="hidden md:block border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
        >
          Let's Connect
        </Link>
        <MobileNav />
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center px-6 md:px-16">
        <FloatingPlanet className="absolute right-1/4 top-32" />
        <FloatingRocket className="absolute right-10 top-1/3" />

        <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
          <div className="z-10">
            <div className="inline-block bg-purple-900 bg-opacity-70 px-4 py-2 mb-4 rounded-md">
              Welcome to my Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Greetings, Earthling! I'm Azzman Nor
              Elimane</h1>
            <h2 className="text-xl md:text-2xl text-purple-300 font-medium mb-4">
              Aspiring Software Engineer | ML & DL Enthusiast | Web & Security Explorer
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Currently orbiting the world of software engineering at warp speed 🚀, I’m charting a course through the
              galaxies of machine learning, deep learning, web development, and cybersecurity. I’m on a mission to land
              an interstellar internship where I can launch real-world solutions and explore new tech frontiers. Let’s
              build the future—one line of code at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                  href="#contact"
                  className="flex items-center gap-2 text-white group bg-purple-700 px-6 py-3 rounded-md hover:bg-purple-600 transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowRight size={16}/>
              </Link>
              <Link
                  href="#"
                  className="flex items-center gap-2 text-white group border border-white px-6 py-3 rounded-md hover:bg-white hover:text-purple-900 transition-colors"
              >
                <span>Download CV</span>
                <Download size={16}/>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <FloatingAstronaut/>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative min-h-screen flex items-center px-6 md:px-16 py-20">
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen flex items-center px-6 md:px-16 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here's a snapshot of my core technical skills — from web and desktop development to databases, DevOps, and
              agile collaboration.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Web Technologies */}
            <div>
              <h3 className="text-2xl text-purple-400 font-semibold mb-6">Web Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <SkillCircle percentage={95} title="React.js"/>
                <SkillCircle percentage={90} title="Next.js"/>
                <SkillCircle percentage={85} title="Node.js"/>
                <SkillCircle percentage={80} title="Nest.js"/>
                <SkillCircle percentage={90} title="Typescript"/>
                <SkillCircle percentage={85} title="Laravel / PHP"/>
                <SkillCircle percentage={95} title="HTML/CSS"/>
                <SkillCircle percentage={80} title="Spring Boot"/>
              </div>
            </div>

            {/* Desktop / AI / Data */}
            <div>
              <h3 className="text-2xl text-purple-400 font-semibold mb-6">Desktop & AI</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <SkillCircle percentage={90} title="C/C++"/>
                <SkillCircle percentage={85} title="Java SE"/>
                <SkillCircle percentage={90} title="Python"/>
                <SkillCircle percentage={80} title="Selenium"/>
                <SkillCircle percentage={85} title="NumPy / Pandas"/>
                <SkillCircle percentage={80} title="Scikit-learn"/>
                <SkillCircle percentage={85} title="TensorFlow"/>
                <SkillCircle percentage={75} title="MATLAB"/>
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-2xl text-purple-400 font-semibold mb-6">Databases</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <SkillCircle percentage={90} title="MySQL / PLSQL"/>
                <SkillCircle percentage={85} title="MongoDB"/>
                <SkillCircle percentage={85} title="Postgres"/>
                <SkillCircle percentage={80} title="Oracle DB"/>
                <SkillCircle percentage={80} title="DB Optimization"/>
              </div>
            </div>

            {/* DevOps */}
            <div>
              <h3 className="text-2xl text-purple-400 font-semibold mb-6">DevOps & Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <SkillCircle percentage={90} title="Git / GitHub"/>
                <SkillCircle percentage={85} title="GitLab CI/CD"/>
                <SkillCircle percentage={80} title="Docker"/>
                <SkillCircle percentage={80} title="Kubernetes"/>
                <SkillCircle percentage={75} title="Linux Admin"/>
                <SkillCircle percentage={70} title="AWS"/>
              </div>
            </div>

            {/* Agile & Collaboration */}
            <div>
              <h3 className="text-2xl text-purple-400 font-semibold mb-6">Agile & Collaboration</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <SkillCircle percentage={90} title="SCRUM"/>
                <SkillCircle percentage={85} title="JIRA"/>
                <SkillCircle percentage={85} title="Notion"/>
                <SkillCircle percentage={80} title="Slack"/>
                <SkillCircle percentage={85} title="Figma"/>
                <SkillCircle percentage={80} title="UML"/>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen flex items-center px-6 md:px-16 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here’s a showcase of my technical journey—from freelance work and personal builds to passionate side
              projects. I design, develop, and ship solutions that solve real-world problems and elevate digital
              experiences.
            </p>

          </div>

          <ProjectTabs/>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative min-h-screen flex items-center px-6 md:px-16 py-20">
        <Certifications/>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center px-6 md:px-16 py-20">
        <ContactForm/>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 bg-opacity-70 py-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SPACE</h3>
            <p className="text-gray-300">A space-themed portfolio showcasing my work and skills.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="#certifications" className="text-gray-300 hover:text-purple-400 transition-colors">
                Certifications
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/nour-elimane-azzman-a348b6239/" className="bg-gray-800 p-2 rounded-full hover:bg-purple-700 transition-all">
                <Linkedin size={18} className="text-white"/>
              </Link>
              <Link href="https://www.facebook.com/share/1BTKad8ihK/?mibextid=wwXIfr" className="bg-gray-800 p-2 rounded-full hover:bg-purple-700 transition-all">
                <Facebook size={18} className="text-white"/>
              </Link>
              <Link href="https://www.instagram.com/niniazzman" className="bg-gray-800 p-2 rounded-full hover:bg-purple-700 transition-all">
                <Instagram size={18} className="text-white"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Nor Elimane's Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

