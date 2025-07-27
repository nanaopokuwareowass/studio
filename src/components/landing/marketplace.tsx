import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AirVent, VenetianMask, SprayCan, Wind, ArrowRight } from "lucide-react";

export function Marketplace() {
  const products = [
    { name: "Air Fresheners", icon: <Wind className="w-8 h-8 text-primary" />, image: "https://placehold.co/300x300.png", hint: "car interior" },
    { name: "Waxes and Polishes", icon: <SprayCan className="w-8 h-8 text-primary" />, image: "https://placehold.co/300x300.png", hint: "car exterior" },
    { name: "Microfiber Towels", icon: <VenetianMask className="w-8 h-8 text-primary" />, image: "https://placehold.co/300x300.png", hint: "cleaning supplies" },
    { name: "Wheel Cleaners", icon: <AirVent className="w-8 h-8 text-primary" />, image: "https://placehold.co/300x300.png", hint: "car tire" },
  ];

  return (
    <section id="marketplace" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mb-4">Shop Products</div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Car Care Marketplace
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Browse our selection of premium car care products to keep your vehicle in pristine condition between washes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden transition-transform transform-gpu hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    fill
                    alt={product.name}
                    className="object-cover"
                    data-ai-hint={product.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {product.icon}
                <CardTitle className="mt-4">{product.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Button size="lg" asChild>
            <a href="#">
              Visit Marketplace <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}