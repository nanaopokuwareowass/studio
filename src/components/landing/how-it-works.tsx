
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Car, MapPin, Sparkles, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      icon: <CalendarCheck className="w-10 h-10 text-primary" />,
      title: "1. Book Your Service",
      description: "Use our simple online form to choose your service, pick a date and time, and tell us your location.",
    },
    {
      icon: <Car className="w-10 h-10 text-primary" />,
      title: "2. We Come to You",
      description: "Our professional detailers arrive at your specified location with all the necessary equipment.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "3. Enjoy Your Clean Car",
      description: "Relax while we work our magic. We'll notify you when your car is ready to shine.",
    },
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
      id="how-it-works"
      className="w-full py-16 md:py-24 lg:py-32 bg-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center" variants={itemVariants}>
          <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm mb-4">Our Process</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Getting your car detailed has never been easier. Follow these three simple steps.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center shadow-sm hover:shadow-xl transition-shadow border-transparent hover:border-primary h-full bg-background">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">{step.icon}</div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
