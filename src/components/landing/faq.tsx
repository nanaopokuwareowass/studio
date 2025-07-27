
"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion";


export function Faq() {
  const faqs = [
    {
      question: "What types of vehicles do you service?",
      answer: "We service a wide range of vehicles, including sedans, SUVs, pickup trucks, hatchbacks, vans, and coupes. If you have a special vehicle, contact us to see how we can help."
    },
    {
      question: "How long does a typical car wash take?",
      answer: "The duration depends on the service package you choose. A standard exterior wash can take as little as 30 minutes, while a full detailing service can take 2-4 hours."
    },
    {
      question: "Do I need to provide water or electricity?",
      answer: "No, you don't! Our mobile detailing units are fully self-contained. We bring our own water, power, and all the necessary equipment to get the job done right."
    },
    {
      question: "What if it rains on the day of my appointment?",
      answer: "We monitor the weather closely. If light rain is expected, we can often still perform interior detailing. For heavy rain or services requiring dry conditions, we will contact you to reschedule at your convenience at no extra charge."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, mobile money, and online payments through our secure booking platform. Payment is processed after the service is completed to your satisfaction."
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="faq"
      className="w-full py-16 md:py-24 lg:py-32 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="text-center" variants={itemVariants}>
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">Help Center</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Find answers to common questions about our services.
          </p>
        </motion.div>
        <motion.div className="mt-12 max-w-3xl mx-auto" variants={sectionVariants}>
           <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
               <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index+1}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
