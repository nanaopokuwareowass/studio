
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AirVent, VenetianMask, SprayCan, Wind, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Marketplace() {
  const products = [
    { name: "Air Fresheners", icon: <Wind className="w-8 h-8 text-primary" />, image: "https://placehold.co/300x300.png", hint: "car interior" },
    { name: "Waxes and Polishes", icon: <SprayCan className="w-8 h-8 text-primary" />, image: "https://placehold.co/300x300.png", hint: "car exterior" },
    { name: "Microfiber Towels", icon: <VenetianMask className="w-8 h-8 text-primary" />, image: "https://placehold.co/300x300.png", hint: "cleaning supplies" },
    { name: "Wheel Cleaners", icon: <AirVent className="w-8 h-8 text-primary" />, image: "https://placehold.co/300x300.png", hint: "car tire" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="marketplace"
      className="w-full py-16 md:py-24 lg:py-32 bg-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div variants={itemVariants}>
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm mb-4">Shop Products</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Car Care Marketplace
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Browse our selection of premium car care products to keep your vehicle in pristine condition between washes.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={sectionVariants}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden h-full text-left shadow-md hover:shadow-2xl transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      fill
                      alt={product.name}
                      className="object-cover"
                      data-ai-hint={product.hint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">{product.icon}</div>
                  <CardTitle>{product.name}</CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="mt-12" variants={itemVariants}>
          <Button size="lg" asChild>
            <a href="/marketplace">
              Visit Marketplace <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
