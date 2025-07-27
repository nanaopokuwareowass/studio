import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[700px]">
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
              We don’t just clean, we wow!
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto lg:mx-0">
              DT GUYS PRO is your premier mobile car wash and car care business, delivering top-notch service right to your doorstep.
            </p>
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Book a Wash</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#marketplace">Explore Products</a>
              </Button>
            </div>
          </div>
          <div className="relative w-full h-80 lg:h-[500px]">
            <Image
              src="https://placehold.co/600x500.png"
              alt="Hero Image"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              data-ai-hint="car washing vehicle"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
