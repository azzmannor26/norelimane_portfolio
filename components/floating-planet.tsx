"use client"

import { useEffect, useRef } from "react"

interface FloatingPlanetProps {
  className?: string
}

export default function FloatingPlanet({ className = "" }: FloatingPlanetProps) {
  const planetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const planet = planetRef.current
    if (!planet) return

    let scale = 1
    let scaleDirection = 1
    let rotation = 0

    const animate = () => {
      // Pulsing animation
      scale += 0.001 * scaleDirection
      if (scale > 1.05 || scale < 0.95) {
        scaleDirection *= -1
      }

      // Slow rotation
      rotation += 0.1

      if (planet) {
        planet.style.transform = `scale(${scale}) rotate(${rotation * 0.05}deg)`
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div ref={planetRef} className={`relative transition-transform duration-300 ease-in-out ${className}`}>
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-500 bg-opacity-30 flex items-center justify-center glow-effect">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-blue-400 bg-opacity-50 animate-pulse"></div>
      </div>
    </div>
  )
}

