import { Car, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
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
            <a className="text-sm hover:underline underline-offset-4" href="#home">Home</a>
            <a className="text-sm hover:underline underline-offset-4" href="#contact">Book Now</a>
            <a className="text-sm hover:underline underline-offset-4" href="#marketplace">Marketplace</a>
            <a className="text-sm hover:underline underline-offset-4" href="#join">Join Us</a>
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
           <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="w-6 h-6" /></a>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-6 border-t border-primary-foreground/20">
        <p className="text-xs text-primary-foreground/70 text-center">
          &copy; {new Date().getFullYear()} DT GUYS PRO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
