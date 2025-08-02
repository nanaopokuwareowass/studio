
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Smartphone, ShieldCheck, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Benefits() {
  const benefits = [
    { title: "Save Time", description: "No more waiting in line at the car wash. We come to you.", icon: <Clock className="w-10 h-10 text-primary" /> },
    { title: "Book Anywhere, Anytime", description: "Use our easy-to-use app to schedule your next detail.", icon: <Smartphone className="w-10 h-10 text-primary" /> },
    { title: "Guaranteed Quality", description: "Our professionals are trained to deliver exceptional results.", icon: <ShieldCheck className="w-10 h-10 text-primary" /> },
    { title: "Affordable Pricing", description: "Get premium service without the premium price tag.", icon: <DollarSign className="w-10 h-10 text-primary" /> },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (<motion.section
      className="w-full py-16 md:py-24 lg:py-32 bg-background relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >{/* Enhanced Background Images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-2/3 transform -translate-x-10 translate-y-10 opacity-15">
          <Image
            src="/images/headlight-clean.jpg"
            alt="Headlight cleaning background"
            fill
            className="object-cover rounded-br-[100px] filter blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 transform translate-x-10 -translate-y-10 opacity-15">
          <Image
            src="/images/interior-clean.jpg"
            alt="Interior cleaning background"
            fill
            className="object-cover rounded-tl-[100px] filter blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-background via-transparent to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div className="text-center" variants={itemVariants}>
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">Why Choose Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Customer Benefits
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Discover the advantages of choosing DT GUYS PRO for your car care needs.
            </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={sectionVariants}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="text-center shadow-sm hover:shadow-xl transition-all duration-300 border-transparent hover:border-primary h-full backdrop-blur-sm bg-background/80">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">{benefit.icon}</div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>);
}


