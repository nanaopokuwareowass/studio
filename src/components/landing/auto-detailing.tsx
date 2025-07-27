import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Calendar, Car, Leaf, MapPin } from "lucide-react";

export function AutoDetailing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mobile Auto Detailing
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Experience the ultimate convenience with our on-demand mobile car wash service. We bring our premium detailing packages right to your location.
            </p>
            <div className="grid gap-4 mt-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold">On-demand booking</h3>
                  <p className="text-muted-foreground">Schedule a wash anytime, anywhere.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold">Premium detailing packages</h3>
                  <p className="text-muted-foreground">Choose from a range of packages to suit your needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Leaf className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold">Eco-friendly products</h3>
                  <p className="text-muted-foreground">We use high-quality, environmentally safe products.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold">Service at your location</h3>
                  <p className="text-muted-foreground">Home, office, or anywhere else - we come to you.</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            width={600}
            height={400}
            alt="Auto Detailing"
            className="rounded-lg object-cover"
            data-ai-hint="car detailing professional"
          />
        </div>
      </div>
    </section>
  );
}
