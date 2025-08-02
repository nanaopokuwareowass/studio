"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Headlight Restoration",
      description: "Restore clarity and brightness to your headlights, improving both safety and appearance.",
      image: "/images/headlight-clean.jpg",
      hint: "headlight car"
    },
    {
      title: "Interior Detailing",
      description: "Complete interior cleaning and conditioning, bringing new life to your car's cabin.",
      image: "/images/interior-clean.jpg",
      hint: "car interior"
    },
    {
      title: "Engine Wash",
      description: "A safe and thorough clean for your engine bay, removing grease and grime.",
      image: "https://placehold.co/600x400.png",
      hint: "car engine"
    },
    {
      title: "Wax & Polish",
      description: "Protect your paint and give it a brilliant shine with our premium wax and polish.",
      image: "https://placehold.co/600x400.png",
      hint: "car wax"
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="text-center mb-12">
          <motion.div variants={cardVariants}>
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">Featured Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Specialized Detailing Services
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Professional solutions for every aspect of your vehicle's appearance.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 transition-colors duration-300 border border-border hover:border-primary"
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  data-ai-hint={service.hint}
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="relative p-6 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent -z-10" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <Button asChild variant="outline" className="group/button overflow-hidden bg-transparent">
                      <a href="#home">
                        <span className="relative z-10 transition-colors duration-300 group-hover/button:text-white">Book Now</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1 relative z-10 group-hover/button:text-white" />
                        <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover/button:scale-x-100 transition-transform duration-300 origin-left" />
                      </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}