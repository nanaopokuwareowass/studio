import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-center">
       <Image
        src="https://placehold.co/1920x1080.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        data-ai-hint="car washing vehicle"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 p-4 md:p-6 text-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
            We don’t just clean, we wow!
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl max-w-2xl">
            DT GUYS PRO is your premier mobile car wash and car care business, delivering top-notch service right to your doorstep.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
              <a href="#contact">Book a Wash</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#marketplace">Explore Products</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}