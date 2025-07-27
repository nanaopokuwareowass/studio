import Image from "next/image";
import { Calendar, Car, Leaf, MapPin } from "lucide-react";

export function AutoDetailing() {
  return (
    <section id="auto-detailing" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
           <div className="relative aspect-video">
            <Image
              src="https://placehold.co/600x400.png"
              fill
              alt="Auto Detailing"
              className="rounded-xl object-cover shadow-2xl"
              data-ai-hint="car detailing professional"
            />
           </div>
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mobile Auto Detailing
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Experience the ultimate convenience with our on-demand mobile car wash service. We bring our premium detailing packages right to your location.
            </p>
            <div className="grid gap-6 mt-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">On-demand booking</h3>
                  <p className="text-muted-foreground">Schedule a wash anytime, anywhere through our app.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="w-8 h-8 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">Premium detailing packages</h3>
                  <p className="text-muted-foreground">Choose from a range of packages to suit your needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Leaf className="w-8 h-8 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">Eco-friendly products</h3>
                  <p className="text-muted-foreground">We use high-quality, environmentally safe products.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">Service at your location</h3>
                  <p className="text-muted-foreground">Home, office, or anywhere else - we come to you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
