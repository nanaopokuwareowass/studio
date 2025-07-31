
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, Home, MapPin, MoreVertical, PlusCircle, Trash2 } from "lucide-react";

const savedVehicles = [
    { id: 'veh-1', name: 'My Toyota Camry', type: 'Sedan', license: 'GT-1234-20', default: true },
    { id: 'veh-2', name: 'Weekend SUV', type: 'SUV', license: 'AS-5678-22', default: false },
];

const savedAddresses = [
    { id: 'addr-1', name: 'Home', address: '123 Independence Ave, Accra', default: true },
    { id: 'addr-2', name: 'Work', address: '456 Silicon Rd, Accra', default: false },
]

export function MyVehicles() {
  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">My Vehicles & Addresses</h1>
            <p className="text-muted-foreground">
                Manage your saved vehicles and locations for faster bookings.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
                <CardHeader className="flex-row items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2"><Car className="h-6 w-6"/> My Vehicles</CardTitle>
                        <CardDescription>Manage your saved cars.</CardDescription>
                    </div>
                    <AddVehicleDialog />
                </CardHeader>
                <CardContent className="space-y-4">
                    {savedVehicles.map(vehicle => (
                         <div key={vehicle.id} className="flex items-center justify-between rounded-lg border p-4">
                            <div>
                                <p className="font-semibold">{vehicle.name} {vehicle.default && <span className="text-xs text-primary font-medium ml-2">(Default)</span>}</p>
                                <p className="text-sm text-muted-foreground">{vehicle.type} - {vehicle.license}</p>
                            </div>
                            <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                        </div>
                    ))}
                </CardContent>
            </Card>

             <Card>
                <CardHeader className="flex-row items-center justify-between">
                     <div>
                        <CardTitle className="flex items-center gap-2"><MapPin className="h-6 w-6" /> My Addresses</CardTitle>
                        <CardDescription>Manage your saved locations.</CardDescription>
                    </div>
                    <AddAddressDialog />
                </CardHeader>
                <CardContent className="space-y-4">
                    {savedAddresses.map(address => (
                         <div key={address.id} className="flex items-center justify-between rounded-lg border p-4">
                            <div>
                                <p className="font-semibold">{address.name} {address.default && <span className="text-xs text-primary font-medium ml-2">(Default)</span>}</p>
                                <p className="text-sm text-muted-foreground">{address.address}</p>
                            </div>
                            <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    </div>
  )
}


function AddVehicleDialog() {
  return (
     <Dialog>
        <DialogTrigger asChild>
            <Button size="sm">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Vehicle
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Add New Vehicle</DialogTitle>
            <DialogDescription>
                Save a new vehicle to your profile.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="space-y-2">
                    <Label htmlFor="nickname">Nickname</Label>
                    <Input id="nickname" placeholder="e.g., My Work Car" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="type">Car Type</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a car type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="sedan">Sedan</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="pickup">Pickup</SelectItem>
                            <SelectItem value="hatchback">Hatchback</SelectItem>
                            <SelectItem value="van">Van</SelectItem>
                            <SelectItem value="coupe">Coupe</SelectItem>
                        </SelectContent>
                    </Select>
                 </div>
                <div className="space-y-2">
                    <Label htmlFor="license">License Plate</Label>
                    <Input id="license" placeholder="GT-1234-20" />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">Save Vehicle</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

function AddAddressDialog() {
  return (
     <Dialog>
        <DialogTrigger asChild>
            <Button size="sm">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Address
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Add New Address</DialogTitle>
            <DialogDescription>
                Save a new address for faster bookings.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="space-y-2">
                    <Label htmlFor="address-name">Name</Label>
                    <Input id="address-name" placeholder="e.g., Home" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address-line1">Address</Label>
                    <Input id="address-line1" placeholder="123 Main Street" />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">Save Address</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
