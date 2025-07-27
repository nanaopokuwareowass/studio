import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AirVent, VenetianMask, SprayCan, Wind } from "lucide-react";

export function Marketplace() {
  const products = [
    { name: "Air Fresheners", icon: <Wind className="w-8 h-8" />, image: "https://placehold.co/300x200.png", hint: "car interior" },
    { name: "Waxes and Polishes", icon: <SprayCan className="w-8 h-8" />, image: "https://placehold.co/300x200.png", hint: "car exterior" },
    { name: "Microfiber Towels", icon: <VenetianMask className="w-8 h-8" />, image: "https://placehold.co/300x200.png", hint: "cleaning supplies" },
    { name: "Wheel Cleaners", icon: <AirVent className="w-8 h-8" />, image: "https://placehold.co/300x200.png", hint: "car tire" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Car Care Marketplace
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Browse our selection of premium car care products to keep your vehicle in pristine condition between washes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {products.map((product) => (
            <Card key={product.name}>
              <CardHeader>
                <div className="flex justify-center mb-4">{product.icon}</div>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={product.image}
                  width={300}
                  height={200}
                  alt={product.name}
                  className="rounded-lg object-cover mx-auto"
                  data-ai-hint={product.hint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Button size="lg" asChild>
            <a href="#">Visit Marketplace</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
