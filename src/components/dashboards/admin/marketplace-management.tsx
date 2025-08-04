
"use client"

import * as React from "react"
import {
  File,
  PlusCircle,
  MoreHorizontal,
  Search
} from "lucide-react"
import axios from "axios";

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
  DropdownMenuSeparator,
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
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const API_URL = "/api";

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    image?: string; // Image is optional for now
};

const getStatus = (stock: number) => {
    if (stock === 0) return "Out of Stock";
    if (stock < 20) return "Low Stock";
    return "In Stock";
}

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
  const [products, setProducts] = React.useState<Product[]>([]);
  const { toast } = useToast();

  const fetchProducts = React.useCallback(async () => {
      try {
          const response = await axios.get(`${API_URL}/products`);
          if (response.data.status === 'success') {
              setProducts(response.data.data);
          } else {
              toast({ variant: "destructive", title: "Failed to fetch products", description: response.data.message });
          }
      } catch (error: any) {
          toast({ variant: "destructive", title: "API Error", description: error.message });
      }
  }, [toast]);

  React.useEffect(() => {
      fetchProducts();
  }, [fetchProducts]);


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
              <AddProductDialog onProductAdded={fetchProducts} />
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
                        {products.map((product) => {
                            const status = getStatus(product.stock);
                            return (
                                <TableRow key={product.id}>
                                    <TableCell className="hidden sm:table-cell">
                                       <div className="relative h-16 w-16">
                                            <Image
                                            src={product.image || "https://placehold.co/400x400.png"}
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
                                      <Badge variant={getStatusBadgeVariant(status)}>{status}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                      ${parseFloat(String(product.price)).toFixed(2)}
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
                                          <EditProductDialog product={product} onProductUpdated={fetchProducts}/>
                                          <DropdownMenuSeparator />
                                          <DeleteProductDialog productId={product.id} onProductDeleted={fetchProducts}/>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                      </TableBody>
                    </Table>
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-{products.length}</strong> of <strong>{products.length}</strong>{" "}
                  products
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  )
}

function AddProductDialog({ onProductAdded }: { onProductAdded: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState<string | undefined>();
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!name || !description || !category || !price || !stock) {
      toast({ variant: "destructive", title: "Validation Error", description: "Please fill all fields." });
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/products`, { name, description, category, price, stock });
      if (response.data.status === 'success') {
        toast({ title: "Product Created", description: "The new product has been added." });
        onProductAdded();
        setIsOpen(false);
        // Reset form
        setName("");
        setDescription("");
        setCategory(undefined);
        setPrice("");
        setStock("");
      } else {
        toast({ variant: "destructive", title: "Failed to create product", description: response.data.message });
      }
    } catch (error: any) {
      toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  };

  return (
     <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Premium Carnauba Wax" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">Description</Label>
                    <Textarea id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the product..." className="col-span-3" />
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">Category</Label>
                     <Select onValueChange={setCategory} value={category}>
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Cleaners">Cleaners</SelectItem>
                            <SelectItem value="Waxes & Polishes">Waxes & Polishes</SelectItem>
                            <SelectItem value="Tools & Accessories">Tools & Accessories</SelectItem>
                            <SelectItem value="Interior Care">Interior Care</SelectItem>
                            <SelectItem value="Tire & Wheel Care">Tire & Wheel Care</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="price" className="text-right">Price</Label>
                    <Input id="price" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="19.99" className="col-span-3" />
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="stock" className="text-right">Stock</Label>
                    <Input id="stock" type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="100" className="col-span-3" />
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="image" className="text-right">Image</Label>
                    <Input id="image" type="file" className="col-span-3" />
                </div>
            </div>
            <DialogFooter>
                <Button onClick={handleSubmit}>Save Product</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

function EditProductDialog({ product, onProductUpdated }: { product: Product, onProductUpdated: () => void }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState(product.name);
    const [description, setDescription] = React.useState(product.description);
    const [category, setCategory] = React.useState(product.category);
    const [price, setPrice] = React.useState(String(product.price));
    const [stock, setStock] = React.useState(String(product.stock));
    const { toast } = useToast();

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`${API_URL}/products`, { id: product.id, name, description, category, price, stock });
            if (response.data.status === 'success') {
                toast({ title: "Product Updated", description: "The product has been updated." });
                onProductUpdated();
                setIsOpen(false);
            } else {
                toast({ variant: "destructive", title: "Failed to update product", description: response.data.message });
            }
        } catch (error: any) {
            toast({ variant: "destructive", title: "API Error", description: error.message });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <DropdownMenuItem onSelect={e => e.preventDefault()}>Edit</DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name-edit" className="text-right">Name</Label>
                        <Input id="name-edit" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description-edit" className="text-right">Description</Label>
                        <Textarea id="description-edit" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category-edit" className="text-right">Category</Label>
                        <Select value={category} onValueChange={(value) => setCategory(value)}>
                            <SelectTrigger className="col-span-3"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Cleaners">Cleaners</SelectItem>
                                <SelectItem value="Waxes & Polishes">Waxes & Polishes</SelectItem>
                                <SelectItem value="Tools & Accessories">Tools & Accessories</SelectItem>
                                <SelectItem value="Interior Care">Interior Care</SelectItem>
                                <SelectItem value="Tire & Wheel Care">Tire & Wheel Care</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price-edit" className="text-right">Price</Label>
                        <Input id="price-edit" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="stock-edit" className="text-right">Stock</Label>
                        <Input id="stock-edit" type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="col-span-3" />
                    </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="image-edit" className="text-right">Image</Label>
                        <Input id="image-edit" type="file" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit}>Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

function DeleteProductDialog({ productId, onProductDeleted }: { productId: string, onProductDeleted: () => void }) {
    const { toast } = useToast();
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${API_URL}/products`, { data: { id: productId } });
            if (response.data.status === 'success') {
                toast({ title: "Product Deleted", description: "The product has been removed." });
                onProductDeleted();
            } else {
                toast({ variant: "destructive", title: "Failed to delete product", description: response.data.message });
            }
        } catch (error: any) {
            toast({ variant: "destructive", title: "API Error", description: error.message });
        }
    };
    
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem className="text-destructive" onSelect={e => e.preventDefault()}>Delete</DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete this product. This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

