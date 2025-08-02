
"use client"
import Image from "next/image";
import { Calendar, Car, Leaf, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function AutoDetailing() {

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  
  const imageVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="auto-detailing"
      className="w-full py-16 md:py-24 lg:py-32 bg-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-6"><div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center"><motion.div className="space-y-6" variants={imageVariants}>
            <div className="relative aspect-[4/3] group overflow-hidden rounded-xl">
              <Image
                src="/images/interior-clean.jpg"
                alt="Professional Interior Detailing"
                fill
                className="rounded-xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-lg font-semibold">Interior Detailing</h3>
                <p className="text-white/80 text-sm">Professional interior cleaning and restoration</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] group overflow-hidden rounded-xl">
              <Image
                src="/images/headlight-clean.jpg"
                alt="Headlight Restoration Service"
                fill
                className="rounded-xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-lg font-semibold">Headlight Restoration</h3>
                <p className="text-white/80 text-sm">Crystal clear headlights for better visibility</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="space-y-6" variants={sectionVariants}>
            <motion.div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm" variants={itemVariants}>Our Services</motion.div>
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
              Mobile Auto Detailing
            </motion.h2>
            <motion.p className="text-muted-foreground md:text-xl" variants={itemVariants}>
              Experience the ultimate convenience with our on-demand mobile car wash service. We bring our premium detailing packages right to your location.
            </motion.p>
            <div className="grid gap-6 mt-6">
              {[
                 { icon: <Calendar className="w-8 h-8 mt-1 text-primary" />, title: "On-demand booking", description: "Schedule a wash anytime, anywhere through our app." },
                 { icon: <Car className="w-8 h-8 mt-1 text-primary" />, title: "Premium detailing packages", description: "Choose from a range of packages to suit your needs." },
                 { icon: <Leaf className="w-8 h-8 mt-1 text-primary" />, title: "Eco-friendly products", description: "We use high-quality, environmentally safe products." },
                 { icon: <MapPin className="w-8 h-8 mt-1 text-primary" />, title: "Service at your location", description: "Home, office, or anywhere else - we come to you." }
              ].map((feature, index) => (
                <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
