"use client"

import { useEffect, useRef, useState } from "react"

interface SkillCircleProps {
  percentage: number
  title: string
}

export default function SkillCircle({ percentage, title }: SkillCircleProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
      <div
          ref={containerRef}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 shadow hover:shadow-purple-700/40 transition-all"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-medium">{title}</span>
          <span className="text-purple-400 font-semibold">{isVisible ? `${percentage}%` : "0%"}</span>
        </div>
        <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
          <div
              className="h-full bg-gradient-to-r from-purple-500 to-purple-800 transition-all duration-1000 ease-in-out"
              style={{ width: isVisible ? `${percentage}%` : "0%" }}
          />
        </div>
      </div>
  )
}
