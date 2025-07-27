
"use client"
import { Car, Twitter, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      className="bg-primary text-primary-foreground"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 py-12 grid gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <a className="flex items-center gap-2" href="#">
            <Car className="h-8 w-8" />
            <span className="text-xl font-semibold">DT GUYS PRO</span>
          </a>
          <p className="text-sm text-primary-foreground/80">
            We don’t just clean, we wow!
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="grid gap-2">
            <motion.a whileHover={{ x: 2, color: "#ffffff" }} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/">Home</motion.a>
            <motion.a whileHover={{ x: 2, color: "#ffffff" }} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/#contact">Book Now</motion.a>
            <motion.a whileHover={{ x: 2, color: "#ffffff" }} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/marketplace">Marketplace</motion.a>
            <motion.a whileHover={{ x: 2, color: "#ffffff" }} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/#join">Join Us</motion.a>
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
           <div className="flex items-center gap-4">
              <motion.a whileHover={{ scale: 1.1, rotate: -5 }} href="#" className="hover:opacity-80 transition-opacity"><Twitter className="w-6 h-6" /></motion.a>
              <motion.a whileHover={{ scale: 1.1, rotate: 5 }} href="#" className="hover:opacity-80 transition-opacity"><Facebook className="w-6 h-6" /></motion.a>
              <motion.a whileHover={{ scale: 1.1, rotate: -5 }} href="#" className="hover:opacity-80 transition-opacity"><Instagram className="w-6 h-6" /></motion.a>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-6 border-t border-primary-foreground/20">
        <p className="text-xs text-primary-foreground/70 text-center">
          &copy; {new Date().getFullYear()} DT GUYS PRO. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
