"use client";

import Link from "next/link";
import { Car, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <svg
            width="80"
            height="32"
            viewBox="0 0 80 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.6991 16.5173C39.6991 18.281 38.9916 19.9077 37.8282 21.0941C36.6648 22.2805 35.068 22.9294 33.4027 22.9294H21.5039V31.5H16.5V0.5H33.4027C35.068 0.5 36.6648 1.14891 37.8282 2.33532C38.9916 3.52173 39.6991 5.14842 39.6991 6.91209C39.6991 8.53879 39.0599 10.0483 38.0039 11.1906C40.055 12.3329 40.5623 14.8083 39.6991 16.5173ZM21.5039 18.113H32.4277C33.8016 18.113 34.6742 17.0784 34.6742 15.9361C34.6742 14.7938 33.8016 13.7592 32.4277 13.7592H21.5039V18.113ZM32.4277 9.24671H21.5039V4.81648H32.4277C33.8016 4.81648 34.6742 5.85109 34.6742 6.99339C34.6742 8.1357 33.8016 9.24671 32.4277 9.24671Z"
              fill="#32D898"
            ></path>
            <path
              d="M45.541 31.5V0.5H50.541V31.5H45.541Z"
              fill="#32D898"
            ></path>
            <path
              d="M56.2483 31.5V0.5H74.4961V4.81648H61.2483V13.7592H73.2461V18.113H61.2483V27.1835H74.4961V31.5H56.2483Z"
              fill="#32D898"
            ></path>
            <path
              d="M0.5 0.5H5.5V31.5H0.5V0.5Z"
              fill="#32D898"
            ></path>
          </svg>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#"
            className="flex items-center gap-1 transition-colors hover:text-primary"
            prefetch={false}
          >
            <Image
              src="https://placehold.co/24x18.png"
              alt="Ghana flag"
              width={24}
              height={18}
              data-ai-hint="Ghana flag"
            />
            <ChevronDown className="h-4 w-4" />
          </Link>
          <Link
            href="#support"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Support
          </Link>
          <Button variant="outline" asChild>
            <Link href="#login">Login</Link>
          </Button>
          <Link
            href="#"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            <Menu className="h-6 w-6" />
          </Link>
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
                <span className="font-headline">Bolt</span>
              </Link>
              <Link
                href="#support"
                className="text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
                onClick={() => setSheetOpen(false)}
              >
                Support
              </Link>
              <Button variant="outline" asChild>
                <Link href="#login" onClick={() => setSheetOpen(false)}>
                  Login
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
