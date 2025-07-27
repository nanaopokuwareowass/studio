import Link from "next/link";
import { Twitter, Facebook, Instagram, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 w-full">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-2">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">DT GUYS PRO</span>
          </Link>
          <p className="text-sm text-muted-foreground font-body">We don’t just clean, we wow!</p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold font-headline">Support</h4>
          <Link href="#" className="text-sm hover:underline font-body" prefetch={false}>
            Contact Us
          </Link>
          <Link href="#" className="text-sm hover:underline font-body" prefetch={false}>
            FAQ
          </Link>
          <Link href="#" className="text-sm hover:underline font-body" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline font-body" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold font-headline">Join Us</h4>
          <Link href="#" className="text-sm hover:underline font-body" prefetch={false}>
            Become a Technician
          </Link>
          <Link href="#" className="text-sm hover:underline font-body" prefetch={false}>
            Become a Vendor
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold font-headline">Connect</h4>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" prefetch={false}><Twitter className="h-6 w-6" /></Link>
            <Link href="#" aria-label="Facebook" prefetch={false}><Facebook className="h-6 w-6" /></Link>
            <Link href="#" aria-label="Instagram" prefetch={false}><Instagram className="h-6 w-6" /></Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} DT GUYS PRO. All rights reserved.</p>
      </div>
    </footer>
  );
}
