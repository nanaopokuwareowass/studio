import { Car, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary py-6 w-full shrink-0">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a className="flex items-center gap-2" href="#">
          <Car className="h-6 w-6" />
          <span className="font-semibold">DT GUYS PRO</span>
        </a>
        <nav className="flex gap-4 sm:gap-6">
          <a className="text-sm hover:underline underline-offset-4" href="#">
            Home
          </a>
          <a className="text-sm hover:underline underline-offset-4" href="#">
            Book Now
          </a>
          <a className="text-sm hover:underline underline-offset-4" href="#">
            Marketplace
          </a>
          <a className="text-sm hover:underline underline-offset-4" href="#">
            Join Us
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#"><Twitter className="w-5 h-5" /></a>
          <a href="#"><Facebook className="w-5 h-5" /></a>
          <a href="#"><Instagram className="w-5 h-5" /></a>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} DT GUYS PRO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
