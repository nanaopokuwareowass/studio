
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Search, ShoppingCart, Trash2, X } from "lucide-react";
import Image from "next/image";

const products = [
  { id: "PROD-001", name: "All-Purpose Cleaner", price: 15.99, image: "https://placehold.co/400x400.png", hint: "cleaning supplies" },
  { id: "PROD-002", name: "Carnauba Wax", price: 25.50, image: "https://placehold.co/400x400.png", hint: "car wax" },
  { id: "PROD-003", name: "Microfiber Towel Set", price: 12.00, image: "https://placehold.co/400x400.png", hint: "microfiber towels" },
  { id: "PROD-004", name: "Tire Shine Gel", price: 18.75, image: "https://placehold.co/400x400.png", hint: "car tire" },
  { id: "PROD-005", name: "Interior Detailer", price: 14.99, image: "https://placehold.co/400x400.png", hint: "car interior" },
  { id: "PROD-006", name: "Leather Conditioner", price: 20.00, image: "https://placehold.co/400x400.png", hint: "leather seat" },
];

type CartItem = {
  product: typeof products[0];
  quantity: number;
};

export function CrewPOS() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product: typeof products[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };
  
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
        removeFromCart(productId);
        return;
    }
    setCart((prevCart) => prevCart.map(item => item.product.id === productId ? {...item, quantity} : item));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.06; // 6% tax
  const total = subtotal + tax;

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
      <div className="lg:col-span-2">
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Products</CardTitle>
                 <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        placeholder="Search products..." 
                        className="pl-10 w-full md:w-80"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
                <ScrollArea className="h-full pr-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredProducts.map(product => (
                            <Card key={product.id} className="overflow-hidden">
                                <div className="relative aspect-square">
                                    <Image src={product.image} alt={product.name} fill className="object-cover" data-ai-hint={product.hint} />
                                </div>
                                <div className="p-3">
                                    <h3 className="font-semibold truncate text-sm">{product.name}</h3>
                                    <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                                    <Button size="sm" className="w-full mt-2 h-8" onClick={() => addToCart(product)}>
                                        <PlusCircle className="mr-2 h-4 w-4" /> Add
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6"/>
                Order Summary
            </CardTitle>
            <CardDescription>
                {cart.length} item{cart.length !== 1 && 's'} in cart
            </CardDescription>
          </CardHeader>
          <CardContent>
            {cart.length > 0 ? (
                <ScrollArea className="h-[40vh]">
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead>Qty</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                                <TableHead><span className="sr-only">Remove</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {cart.map(item => (
                                <TableRow key={item.product.id}>
                                    <TableCell className="font-medium p-2">
                                        <p className="truncate w-28">{item.product.name}</p>
                                        <p className="text-xs text-muted-foreground">${item.product.price.toFixed(2)}</p>
                                    </TableCell>
                                    <TableCell className="p-2">
                                        <Input 
                                            type="number" 
                                            value={item.quantity} 
                                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                                            className="h-8 w-16"
                                            min={1}
                                        />
                                    </TableCell>
                                    <TableCell className="text-right p-2">${(item.product.price * item.quantity).toFixed(2)}</TableCell>
                                     <TableCell className="p-2 text-right">
                                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removeFromCart(item.product.id)}>
                                            <X className="h-4 w-4 text-destructive"/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            ) : (
                <div className="text-center py-10 text-muted-foreground">
                    <ShoppingCart className="h-10 w-10 mx-auto mb-2"/>
                    <p>Cart is empty</p>
                </div>
            )}
            
          </CardContent>
            {cart.length > 0 && (
                <>
                <Separator />
                <CardFooter className="flex-col items-stretch space-y-4 p-4">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax (6%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                     <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <Button size="lg" className="w-full">Charge Customer</Button>
                </CardFooter>
                </>
            )}
        </Card>
      </div>
    </div>
  );
}
