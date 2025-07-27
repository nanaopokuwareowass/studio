import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background shadow-sm">
      <a className="flex items-center justify-center" href="#">
        <Car className="h-6 w-6" />
        <span className="sr-only">DT GUYS PRO</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Home
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Auto Detailing
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Marketplace
        </a>
        <Button asChild>
          <a href="#">Book Now</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#">Login</a>
        </Button>
      </nav>
    </header>
  );
}
