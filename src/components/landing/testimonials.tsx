
"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      title: "Marketing Manager",
      quote: "The attention to detail was incredible. My car hasn't looked this good since I bought it! The convenience of them coming to my office was a game-changer.",
      rating: 5,
      avatar: "https://placehold.co/100x100.png",
    },
    {
      name: "Michael B.",
      title: "Accountant",
      quote: "DT GUYS PRO is the real deal. Professional, punctual, and the results speak for themselves. I've already booked my next wash.",
      rating: 5,
      avatar: "https://placehold.co/100x100.png",
    },
    {
      name: "Jessica P.",
      title: "Graphic Designer",
      quote: "I was hesitant about mobile detailing, but I'm a convert now. The quality was top-notch and the price was very reasonable. Highly recommend!",
      rating: 5,
      avatar: "https://placehold.co/100x100.png",
    },
     {
      name: "David R.",
      title: "Software Engineer",
      quote: "Fantastic service from start to finish. The app is easy to use and the team did a flawless job on my SUV. I'll be a regular customer for sure.",
      rating: 5,
      avatar: "https://placehold.co/100x100.png",
    }
  ];
  
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const marqueeVariants = {
    animate: {
      x: [0, -100 * testimonials.length / (testimonials.length * 2) * (testimonials.length * 400) / (testimonials.length * 100) + '%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: testimonials.length * 10,
          ease: "linear",
        },
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="testimonials"
      className="w-full py-16 md:py-24 lg:py-32 bg-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm mb-4">Word on the Street</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Real stories from satisfied clients who chose DT GUYS PRO.
            </p>
        </div>
        <div className="mt-12 relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            variants={marqueeVariants}
            animate="animate"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0" style={{width: 'clamp(300px, 40vw, 400px)'}}>
                  <Card className="h-full flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow bg-background">
                      <CardContent className="p-6 space-y-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-base">&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="flex items-center gap-4 pt-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

