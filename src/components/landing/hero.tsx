import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080.png')"}} data-ai-hint="car washing vehicle">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
            We don’t just clean, we wow!
          </h1>
          <p className="mt-4 text-lg text-primary-foreground md:text-xl">
            DT GUYS PRO is your premier mobile car wash and car care business, delivering top-notch service right to your doorstep.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#">Book a Wash</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#">Explore Products</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
