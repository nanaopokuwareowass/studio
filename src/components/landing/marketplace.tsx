import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  { name: "Car Polish", hint: "car polish", image: "https://placehold.co/400x300.png" },
  { name: "Air Fresheners", hint: "car air freshener", image: "https://placehold.co/400x300.png" },
  { name: "Microfiber Towels", hint: "microfiber towel", image: "https://placehold.co/400x300.png" },
  { name: "Premium Wax", hint: "car wax", image: "https://placehold.co/400x300.png" },
];

export function Marketplace() {
  return (
    <section id="marketplace" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium font-body">
              Marketplace
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Shop Premium Car Care
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Maintain that "wow" factor between washes with our curated selection of high-quality car care products.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden group">
              <CardContent className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={product.hint}
                />
                <div className="p-4">
                  <CardTitle className="text-lg font-bold font-headline">{product.name}</CardTitle>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="#marketplace-main">Explore All Products</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
