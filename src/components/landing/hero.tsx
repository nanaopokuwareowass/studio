import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/50 to-background z-0">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Clean car"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-10"
        data-ai-hint="shiny car"
        priority
      />

      <div className="container relative z-20 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tighter font-headline sm:text-6xl md:text-7xl lg:text-8xl">
            We Don’t Just Clean, <br />
            <span className="text-primary">We Wow!</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl font-body">
            The future of car care is here. Get professional mobile detailing and premium car care products delivered right to your doorstep.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#marketplace">Explore Marketplace</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css or a style tag for the grid pattern
// .bg-grid-pattern {
//   background-image: linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
//   background-size: 4rem 4rem;
// }
