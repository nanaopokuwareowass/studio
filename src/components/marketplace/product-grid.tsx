
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export function ProductGrid() {
  const products = [
    { name: "All-Purpose Cleaner", price: 15.99, image: "https://placehold.co/400x400.png", hint: "cleaning supplies" },
    { name: "Carnauba Wax", price: 25.50, image: "https://placehold.co/400x400.png", hint: "car wax" },
    { name: "Microfiber Towel Set", price: 12.00, image: "https://placehold.co/400x400.png", hint: "microfiber towels" },
    { name: "Tire Shine Gel", price: 18.75, image: "https://placehold.co/400x400.png", hint: "car tire" },
    { name: "Interior Detailer", price: 14.99, image: "https://placehold.co/400x400.png", hint: "car interior" },
    { name: "Wheel & Rim Cleaner", price: 22.00, image: "https://placehold.co/400x400.png", hint: "car rim" },
    { name: "Leather Conditioner", price: 20.00, image: "https://placehold.co/400x400.png", hint: "leather seat" },
    { name: "Glass Cleaner", price: 10.50, image: "https://placehold.co/400x400.png", hint: "car window" },
    { name: "Car Wash Soap", price: 19.99, image: "https://placehold.co/400x400.png", hint: "car soap" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.name} className="overflow-hidden transition-transform transform-gpu hover:-translate-y-2 hover:shadow-xl flex flex-col">
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
          <CardContent className="p-4 flex-grow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-muted-foreground mt-1">
              ${product.price.toFixed(2)}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
