
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Mission</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About DT GUYS PRO
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mission is to provide a convenient, high-quality car care experience that leaves our customers amazed. We believe in attention to detail and professionalism, all delivered right to your location.
            </p>
            <p className="text-xl font-semibold text-primary">
              We don’t just clean, we wow!
            </p>
          </motion.div>
          <motion.div
            className="grid gap-6"
            variants={containerVariants}
          >
            {[
              { icon: <Rocket className="w-8 h-8 text-primary" />, title: "Convenience", content: "We are a mobile-based service, meaning we come to you wherever you are." },
              { icon: <Sparkles className="w-8 h-8 text-primary" />, title: "Attention to Detail", content: "Our team is trained to provide a meticulous clean every time." },
              { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: "Professionalism", content: "We pride ourselves on our professional and courteous service." }
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="shadow-sm hover:shadow-lg transition-shadow h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {item.icon}
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
