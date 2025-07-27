import Image from "next/image";
import { Leaf, MapPin, Clock, Sparkles } from "lucide-react";

export function Detailing() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Eco-Friendly",
      description: "We use water-saving techniques and biodegradable products.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "At Your Location",
      description: "Convenience is key. We come to your home, office, or anywhere.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick Response",
      description: "Book online and our team will be there in no time.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Premium Care",
      description: "Our professionals treat every vehicle like their own.",
    },
  ];

  return (
    <section id="detailing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium font-body">
              Auto Detailing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Expert Mobile Car Wash Services
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Experience the ultimate convenience with our on-demand mobile detailing. We bring the sparkle to you, ensuring a pristine finish without you ever having to leave your location.
            </p>
            <ul className="grid gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold font-headline">{feature.title}</h3>
                    <p className="text-muted-foreground font-body">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Car Detailing"
              width={600}
              height={600}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              data-ai-hint="car detailing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
