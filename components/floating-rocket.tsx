"use client"

import { useEffect, useRef } from "react"
import { Rocket } from "lucide-react"

interface FloatingRocketProps {
  className?: string
}

export default function FloatingRocket({ className = "" }: FloatingRocketProps) {
  const rocketRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rocket = rocketRef.current
    if (!rocket) return

    let position = 0
    let direction = 1

    const animate = () => {
      // Floating animation
      position += 0.5 * direction
      if (position > 20 || position < -20) {
        direction *= -1
      }

      if (rocket) {
        rocket.style.transform = `translateY(${position}px) rotate(-45deg)`
      }

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div ref={rocketRef} className={`relative transition-transform duration-300 ease-in-out ${className}`}>
      <div className="text-purple-300 animate-pulse">
        <Rocket size={32} />
      </div>
      <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-orange-500 blur-md opacity-50 rounded-full"></div>
    </div>
  )
}

