
"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="home" className="relative w-full min-h-screen">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/foam-spray.jpg"
            alt="Professional foam spray car washing"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-screen flex items-center justify-center">
        <motion.div 
          className="space-y-6 text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl !leading-tight text-white"
            variants={textVariants}
          >
            We don’t just clean, we wow!
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg text-white/90 md:text-xl max-w-3xl mx-auto"
            variants={textVariants}
          >
            DT GUYS PRO is your premier mobile car wash and car care business, delivering top-notch service right to your doorstep. The ultimate convenience in car care is just a click away.
          </motion.p>
             <motion.div 
              className="mt-10 flex flex-wrap justify-center gap-4"
              variants={textVariants}
             >
              <Button size="lg" asChild>
                <a href="/login">Sign Up to Book</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
