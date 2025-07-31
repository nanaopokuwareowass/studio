
"use client"

import * as React from "react"
import {
  File,
  PlusCircle,
  MoreHorizontal,
  Search,
  DropdownMenuSeparator,
} from "lucide-react"

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
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const servicesData = [
  { id: "SRV-001", name: "Exterior Wash", description: "A thorough wash of the car's exterior.", price: 35.00, duration: 45 },
  { id: "SRV-002", name: "Interior Cleaning", description: "Deep cleaning of the car's interior.", price: 50.00, duration: 60 },
  { id: "SRV-003", name: "Full Detailing", description: "Complete interior and exterior cleaning.", price: 75.00, duration: 120 },
  { id: "SRV-004", name: "Engine Wash", description: "Safe cleaning of the engine bay.", price: 40.00, duration: 50 },
  { id: "SRV-005", name: "Wax & Polish", description: "Application of wax for shine and protection.", price: 60.00, duration: 90 },
];


export function ServiceManagement() {
  return (
    <div className="grid flex-1 items-start gap-4">
        <Card>
            <CardHeader>
            <CardTitle>Service Management</CardTitle>
            <CardDescription>
                Add, edit, and manage the services your business offers.
            </CardDescription>
             <div className="flex items-center gap-2 pt-2">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search services..." className="pl-10 w-full md:w-80" />
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-8 gap-1">
                        <File className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Export
                        </span>
                    </Button>
                    <AddServiceDialog />
                </div>
            </div>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Service Name</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                    <TableHead className="hidden md:table-cell">Price</TableHead>
                    <TableHead className="hidden md:table-cell">Duration (min)</TableHead>
                    <TableHead>
                    <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {servicesData.map((service) => (
                    <TableRow key={service.id}>
                    <TableCell className="font-medium">
                        {service.name}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">
                        {service.description}
                    </TableCell>
                     <TableCell className="hidden md:table-cell">
                        ${service.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
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
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Disable</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </CardContent>
        </Card>
    </div>
  )
}

function AddServiceDialog() {
  return (
     <Dialog>
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
                    <Input id="name" placeholder="e.g. Headlight Restoration" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">Description</Label>
                    <Textarea id="description" placeholder="Describe the service..." className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="price" className="text-right">Price</Label>
                    <Input id="price" type="number" placeholder="45.00" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="duration" className="text-right">Duration (min)</Label>
                    <Input id="duration" type="number" placeholder="60" className="col-span-3" />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">Save Service</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
