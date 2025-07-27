"use client";

import Link from "next/link";
import { Car, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Car className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold font-headline">DT GUYS PRO</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#marketplace"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Marketplace
          </Link>
          <Button asChild>
            <Link href="#booking">Book Now</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#login">Login</Link>
          </Button>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
                prefetch={false}
                onClick={() => setSheetOpen(false)}
              >
                <Car className="h-6 w-6 text-primary" />
                <span className="font-headline">DT GUYS PRO</span>
              </Link>
              <Link
                href="#marketplace"
                className="text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
                onClick={() => setSheetOpen(false)}
              >
                Marketplace
              </Link>
              <Button asChild>
                <Link href="#booking" onClick={() => setSheetOpen(false)}>Book Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#login" onClick={() => setSheetOpen(false)}>Login</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
