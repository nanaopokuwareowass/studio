
"use client"

import * as React from "react"
import {
  File,
  PlusCircle,
  MoreHorizontal,
  Search,
} from "lucide-react"
import axios from "axios";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const API_URL = "/api";

type Service = {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
}

export function ServiceManagement() {
  const [services, setServices] = React.useState<Service[]>([]);
  const { toast } = useToast();

  const fetchServices = React.useCallback(async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        if (response.data.status === 'success') {
            setServices(response.data.data);
        } else {
            toast({ variant: "destructive", title: "Failed to fetch services", description: response.data.message });
        }
    } catch (error: any) {
        toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  }, [toast]);

  React.useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return (
    <div className="grid flex-1 items-start gap-4">
        <Card>
            <CardHeader>
            <CardTitle>Service Management</CardTitle>
            <CardDescription>
                Add, edit, and manage the services your business offers.
            </CardDescription>
             <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search services..." className="pl-10 w-full" />
                </div>
                <div className="ml-auto flex items-center gap-2 w-full sm:w-auto">
                    <Button size="sm" variant="outline" className="h-8 gap-1 w-full sm:w-auto">
                        <File className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Export
                        </span>
                    </Button>
                    <AddServiceDialog onServiceAdded={fetchServices} />
                </div>
            </div>
            </CardHeader>
            <CardContent>
             <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Service Name</TableHead>
                        <TableHead className="hidden md:table-cell">Description</TableHead>
                        <TableHead className="hidden sm:table-cell">Price</TableHead>
                        <TableHead className="hidden sm:table-cell">Duration (min)</TableHead>
                        <TableHead>
                        <span className="sr-only">Actions</span>
                        </TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                        <TableCell className="font-medium">
                            {service.name}
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-muted-foreground">
                            {service.description}
                        </TableCell>
                         <TableCell className="hidden sm:table-cell">
                            ${parseFloat(String(service.price)).toFixed(2)}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            {service.duration}
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
                                <EditServiceDialog service={service} onServiceUpdated={fetchServices} />
                                <DropdownMenuItem>Disable</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DeleteServiceDialog serviceId={service.id} onServiceDeleted={fetchServices} />
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </div>
            </CardContent>
        </Card>
    </div>
  )
}

function AddServiceDialog({ onServiceAdded }: { onServiceAdded: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!name || !description || !price || !duration) {
      toast({ variant: "destructive", title: "Validation Error", description: "Please fill all fields." });
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/services`, { name, description, price, duration });
      if (response.data.status === 'success') {
        toast({ title: "Service Created", description: "The new service has been added." });
        onServiceAdded();
        setIsOpen(false);
        setName("");
        setDescription("");
        setPrice("");
        setDuration("");
      } else {
        toast({ variant: "destructive", title: "Failed to create service", description: response.data.message });
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
                Add Service
                </span>
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Add New Service</DialogTitle>
            <DialogDescription>
                Fill in the details for the new service.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input id="name" placeholder="e.g. Headlight Restoration" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">Description</Label>
                    <Textarea id="description" placeholder="Describe the service..." value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="price" className="text-right">Price</Label>
                    <Input id="price" type="number" placeholder="45.00" value={price} onChange={(e) => setPrice(e.target.value)} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="duration" className="text-right">Duration (min)</Label>
                    <Input id="duration" type="number" placeholder="60" value={duration} onChange={(e) => setDuration(e.target.value)} className="col-span-3" />
                </div>
            </div>
            <DialogFooter>
                <Button onClick={handleSubmit}>Save Service</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

function EditServiceDialog({ service, onServiceUpdated }: { service: Service, onServiceUpdated: () => void }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState(service.name);
    const [description, setDescription] = React.useState(service.description);
    const [price, setPrice] = React.useState(String(service.price));
    const [duration, setDuration] = React.useState(String(service.duration));
    const { toast } = useToast();

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`${API_URL}/services`, { id: service.id, name, description, price, duration });
            if (response.data.status === 'success') {
                toast({ title: "Service Updated", description: "The service has been updated." });
                onServiceUpdated();
                setIsOpen(false);
            } else {
                toast({ variant: "destructive", title: "Failed to update service", description: response.data.message });
            }
        } catch (error: any) {
            toast({ variant: "destructive", title: "API Error", description: error.message });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Service</DialogTitle>
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
                        <Label htmlFor="price-edit" className="text-right">Price</Label>
                        <Input id="price-edit" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="duration-edit" className="text-right">Duration (min)</Label>
                        <Input id="duration-edit" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit}>Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

function DeleteServiceDialog({ serviceId, onServiceDeleted }: { serviceId: string, onServiceDeleted: () => void }) {
    const { toast } = useToast();
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${API_URL}/services`, { data: { id: serviceId } });
            if (response.data.status === 'success') {
                toast({ title: "Service Deleted", description: "The service has been removed." });
                onServiceDeleted();
            } else {
                toast({ variant: "destructive", title: "Failed to delete service", description: response.data.message });
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
                        This will permanently delete this service. This action cannot be undone.
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
