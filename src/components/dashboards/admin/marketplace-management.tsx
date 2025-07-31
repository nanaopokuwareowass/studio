
"use client"

import * as React from "react"
import {
  File,
  PlusCircle,
  MoreHorizontal,
  Search
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const productsData = [
  {
    id: "PROD-001",
    name: "All-Purpose Cleaner",
    image: "https://placehold.co/400x400.png",
    status: "In Stock",
    price: 15.99,
    stock: 120,
    category: "Cleaners",
  },
  {
    id: "PROD-002",
    name: "Carnauba Wax",
    image: "https://placehold.co/400x400.png",
    status: "In Stock",
    price: 25.50,
    stock: 78,
    category: "Waxes & Polishes",
  },
  {
    id: "PROD-003",
    name: "Microfiber Towel Set",
    image: "https://placehold.co/400x400.png",
    status: "Low Stock",
    price: 12.00,
    stock: 15,
    category: "Tools & Accessories",
  },
  {
    id: "PROD-004",
    name: "Tire Shine Gel",
    image: "https://placehold.co/400x400.png",
    status: "In Stock",
    price: 18.75,
    stock: 200,
    category: "Tire & Wheel Care",
  },
  {
    id: "PROD-005",
    name: "Interior Detailer",
    image: "https://placehold.co/400x400.png",
    status: "Out of Stock",
    price: 14.99,
    stock: 0,
    category: "Interior Care",
  },
];

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "In Stock":
      return "secondary";
    case "Low Stock":
      return "default";
    case "Out of Stock":
      return "destructive";
    default:
      return "outline";
  }
};


export function MarketplaceManagement() {
  return (
    <div className="grid flex-1 items-start gap-4">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">Products</TabsTrigger>
              <TabsTrigger value="active">Orders</TabsTrigger>
              <TabsTrigger value="draft">Inventory</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Discounts
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <AddProductDialog />
            </div>
          </div>
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                  Manage your products and view their sales performance.
                </CardDescription>
                 <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-10 w-full md:w-80" />
                </div>
              </CardHeader>
              <CardContent>
                 <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="hidden w-[100px] sm:table-cell">
                            <span className="sr-only">Image</span>
                          </TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Price
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Stock
                          </TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {productsData.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell className="hidden sm:table-cell">
                               <div className="relative h-16 w-16">
                                    <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="rounded-md object-cover"
                                    data-ai-hint="product image"
                                    />
                               </div>
                            </TableCell>
                            <TableCell className="font-medium">
                                <div className="font-medium">{product.name}</div>
                                <div className="text-sm text-muted-foreground">{product.category}</div>
                            </TableCell>
                            <TableCell>
                              <Badge variant={getStatusBadgeVariant(product.status)}>{product.status}</Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              ${product.price.toFixed(2)}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {product.stock}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-5</strong> of <strong>{productsData.length}</strong>{" "}
                  products
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  )
}

function AddProductDialog() {
  return (
     <Dialog>
        <DialogTrigger asChild>
            <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
                </span>
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
                Fill in the details below to add a new product to the marketplace.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                Name
                </Label>
                <Input id="name" placeholder="e.g. Premium Carnauba Wax" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                Description
                </Label>
                <Textarea id="description" placeholder="Describe the product..." className="col-span-3" />
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                Category
                </Label>
                 <Select>
                    <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="cleaners">Cleaners</SelectItem>
                        <SelectItem value="waxes">Waxes & Polishes</SelectItem>
                        <SelectItem value="tools">Tools & Accessories</SelectItem>
                        <SelectItem value="interior">Interior Care</SelectItem>
                        <SelectItem value="tire">Tire & Wheel Care</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                Price
                </Label>
                <Input id="price" type="number" placeholder="19.99" className="col-span-3" />
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="stock" className="text-right">
                Stock
                </Label>
                <Input id="stock" type="number" placeholder="100" className="col-span-3" />
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                Image
                </Label>
                <Input id="image" type="file" className="col-span-3" />
            </div>
            </div>
            <DialogFooter>
            <Button type="submit">Save Product</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
