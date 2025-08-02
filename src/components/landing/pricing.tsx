"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const pricingTiers = [
  {
    name: "Basic Wash",
    price: "$35",
    features: [
      "Exterior Hand Wash",
      "Wheel Cleaning",
      "Tire Shine",
      "Window Cleaning",
    ],
    popular: false,
  },
  {
    name: "Deluxe Detail",
    price: "$75",
    features: [
      "Everything in Basic Wash",
      "Interior Vacuum",
      "Dashboard & Console Wipe",
      "Door Jambs Cleaning",
    ],
    popular: true,
  },
  {
    name: "Premium Full-Detail",
    price: "$150",
    features: [
      "Everything in Deluxe Detail",
      "Engine Bay Cleaning",
      "Clay Bar & Wax",
      "Leather Conditioning",
    ],
    popular: false,
  },
]

export function Pricing() {
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
      id="pricing"
      className="w-full py-16 md:py-24 lg:py-32 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center" variants={itemVariants}>
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">Pricing Plans</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Clear & Simple Pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Choose the perfect plan for your vehicle. No hidden fees, ever.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className={`h-full flex flex-col ${tier.popular ? "border-primary shadow-lg" : "shadow-sm"}`}>
                <CardHeader className="relative">
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/ wash</span>
                  </div>
                  {tier.popular && (
                    <div className="absolute top-0 right-4 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                    Book Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
