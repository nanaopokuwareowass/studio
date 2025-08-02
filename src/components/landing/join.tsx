"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export function Join() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Mobile App</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get Our Mobile App
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Download the DT GUYS PRO app for a seamless car care experience. Book services, track your appointments, and manage your vehicle maintenance all from your smartphone.
            </p><div className="flex flex-col sm:flex-row gap-6 mt-8">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/app-store.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative w-full aspect-[9/16] max-w-[300px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10" />
              <Image
                src="/images/app-preview.png"
                alt="DT GUYS PRO Mobile App"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-2xl rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
