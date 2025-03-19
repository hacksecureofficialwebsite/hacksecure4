"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useScrollAnimation } from "@/utils/useScrollAnimation"

export default function TrustedBy() {
  const scrollRef = useRef(null)
  const [titleRef, isTitleVisible] = useScrollAnimation()
  const [logosRef, isLogosVisible] = useScrollAnimation(0.2)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollContent = scrollContainer.firstElementChild
      if (scrollContent) {
        scrollContainer.appendChild(scrollContent.cloneNode(true))
      }
    }

    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }
    }

    const scrollInterval = setInterval(scroll, 20)

    return () => clearInterval(scrollInterval)
  }, [])

  const trustedBy = [
    { name: "Company 1", logo: "/youtube.png" },
    { name: "Company 2", logo: "/gov.png  " },
    { name: "Company 3", logo: "/razorpay.webp" },
    { name: "Company 4", logo: "/linkedin.webp" },
    { name: "Company 5", logo: "/discord.webp" },
    { name: "Company 6", logo: "/google.png" },
    { name: "Company 6", logo: "/paypal.png" },
    { name: "Company 6", logo: "/google2.png" },  
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className={`text-3xl font-bold text-center mb-8 transition-all duration-1000 transform ${
            isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Trusted & Recognized
        </h2>
        <div
          ref={logosRef}
          className={`transition-all duration-1000 delay-300 transform ${
            isLogosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div ref={scrollRef} className="overflow-hidden whitespace-nowrap">
            <div className="inline-block">
              {trustedBy.map((company, index) => (
                <div key={index} className="inline-block mx-8">
                  <Image
                    src={company.logo || "google2.png"}
                    alt={company.name}
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

