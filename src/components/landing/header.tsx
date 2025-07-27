
"use client"
import { Button } from "@/components/ui/button";
import { Car, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // A threshold of 50px is a good starting point
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <a className="text-sm font-medium hover:underline underline-offset-4 transition-colors" href="/">Home</a>
      <a className="text-sm font-medium hover:underline underline-offset-4 transition-colors" href="/#auto-detailing">Auto Detailing</a>
      <a className="text-sm font-medium hover:underline underline-offset-4 transition-colors" href="/marketplace">Marketplace</a>
    </>
  );

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        <a className="mr-6 flex items-center gap-2" href="/">
          <Car className="h-6 w-6" />
          <span className="font-bold text-lg">DT GUYS PRO</span>
        </a>
        <nav className="hidden md:flex flex-1 items-center gap-6">
          {navLinks}
        </nav>
        <div className="hidden md:flex items-center gap-4 ml-auto">
           <Button asChild>
            <a href="/#contact">Book Now</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#">Login</a>
          </Button>
        </div>
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-6">
                <a className="flex items-center gap-2 text-lg font-semibold" href="/">
                  <Car className="h-6 w-6" />
                  <span>DT GUYS PRO</span>
                </a>
                <nav className="grid gap-4 text-lg">
                  {navLinks}
                   <a className="text-sm font-medium hover:underline underline-offset-4 transition-colors" href="/#contact">Book Now</a>
                </nav>
                 <div className="flex flex-col gap-4">
                  <Button variant="outline" asChild>
                    <a href="#">Login</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
