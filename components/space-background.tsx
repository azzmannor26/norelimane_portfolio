"use client"

import { useEffect, useRef } from "react"

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: { x: number; y: number; radius: number; speed: number; opacity: number }[] = []
    const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; angle: number }[] = []

    // Initialize stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.05,
        opacity: Math.random() * 0.8 + 0.2,
      })
    }

    // Create a shooting star occasionally
    const createShootingStar = () => {
      if (Math.random() < 0.03 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: (Math.random() * canvas.height) / 3,
          length: Math.random() * 80 + 50,
          speed: Math.random() * 10 + 5,
          opacity: 1,
          angle: Math.PI / 4 + (Math.random() * Math.PI) / 4,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0f0c29")
      gradient.addColorStop(0.5, "#302b63")
      gradient.addColorStop(1, "#24243e")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Twinkle effect
        star.opacity += Math.random() * 0.02 - 0.01
        star.opacity = Math.max(0.2, Math.min(1, star.opacity))

        // Slow movement
        star.y += star.speed

        // Reset if off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      // Draw and update shooting stars
      shootingStars.forEach((star, index) => {
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        const endX = star.x + Math.cos(star.angle) * star.length
        const endY = star.y + Math.sin(star.angle) * star.length
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.lineWidth = 2
        ctx.stroke()

        // Update position
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed

        // Fade out
        star.opacity -= 0.01

        // Remove if faded out or off screen
        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(index, 1)
        }
      })

      createShootingStar()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
}

