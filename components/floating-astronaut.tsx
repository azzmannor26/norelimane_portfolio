"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function FloatingAstronaut() {
  const astronautRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const astronaut = astronautRef.current
    if (!astronaut) return

    let scale = 1
    let direction = 1

    const animate = () => {
      scale += 0.002 * direction
      if (scale > 1.05 || scale < 0.95) {
        direction *= -1
      }

      astronaut.style.transform = `scale(${scale})`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
      <div className="flex justify-center items-center">
        <div
            ref={astronautRef}
            className="relative w-full max-w-[450px] aspect-square transition-transform duration-300 ease-in-out"
            style={{ minHeight: "450px" }} // ✅ Ensures height is defined
        >
          <Image
              src="norimane.png"
              alt="Azzman Nor Elimane"
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 768px) 100vw, 450px"
          />
        </div>
      </div>
  )
}
