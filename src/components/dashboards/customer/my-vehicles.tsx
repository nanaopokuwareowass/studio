
"use client"

import * as React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const API_URL = "/api";

type Vehicle = {
    id: string;
    user_id: string;
    make: string;
    model: string;
    year: number;
    license_plate: string;
};

const savedAddresses = [
    { id: 'addr-1', name: 'Home', address: '123 Independence Ave, Accra', default: true },
    { id: 'addr-2', name: 'Work', address: '456 Silicon Rd, Accra', default: false },
]

export function MyVehicles() {
  const [vehicles, setVehicles] = React.useState<Vehicle[]>([]);
  const { toast } = useToast();

  const fetchVehicles = React.useCallback(async () => {
    try {
        const response = await axios.get(`${API_URL}/vehicles`);
        if (response.data.status === 'success') {
            setVehicles(response.data.data);
        } else {
            toast({ variant: "destructive", title: "Failed to fetch vehicles", description: response.data.message });
        }
    } catch (error: any) {
        toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  }, [toast]);

  React.useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  const handleDeleteVehicle = async (vehicleId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/vehicles`, { data: { id: vehicleId } });
      if (response.data.status === 'success') {
        toast({ title: "Vehicle Deleted" });
        fetchVehicles();
      } else {
        toast({ variant: "destructive", title: "Failed to delete vehicle", description: response.data.message });
      }
    } catch (error: any) {
      toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  };


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
                        <CardTitle className="flex items-center gap-2">
                          <Image
                            src="/images/logo.svg"
                            alt="Vehicle Icon"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                          My Vehicles
                        </CardTitle>
                        <CardDescription>Manage your saved cars.</CardDescription>
                    </div>
                    <AddVehicleDialog onVehicleAdded={fetchVehicles} />
                </CardHeader>
                <CardContent className="space-y-4">
                    {vehicles.map(vehicle => (
                         <div key={vehicle.id} className="flex items-center justify-between rounded-lg border p-4">
                            <div>
                                <p className="font-semibold">{vehicle.make} {vehicle.model} ({vehicle.year})</p>
                                <p className="text-sm text-muted-foreground">{vehicle.license_plate}</p>
                            </div>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                        <AlertDialogDescription>This will permanently delete this vehicle from your profile.</AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleDeleteVehicle(vehicle.id)} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
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


function AddVehicleDialog({ onVehicleAdded }: { onVehicleAdded: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [year, setYear] = React.useState("");
  const [licensePlate, setLicensePlate] = React.useState("");
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!make || !model || !year || !licensePlate) {
      toast({ variant: "destructive", title: "Please fill all fields" });
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/vehicles`, {
        // user_id should come from auth state in a real app
        user_id: 1, 
        make,
        model,
        year,
        license_plate: licensePlate
      });
      if (response.data.status === 'success') {
        toast({ title: "Vehicle Added", description: "Your vehicle has been saved." });
        onVehicleAdded();
        setIsOpen(false);
        setMake("");
        setModel("");
        setYear("");
        setLicensePlate("");
      } else {
        toast({ variant: "destructive", title: "Failed to add vehicle", description: response.data.message });
      }
    } catch (error: any) {
      toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  };

  return (
     <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
                    <Label htmlFor="make">Make</Label>
                    <Input id="make" value={make} onChange={(e) => setMake(e.target.value)} placeholder="e.g., Toyota" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="e.g., Camry" />
                 </div>
                <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="2022" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="license">License Plate</Label>
                    <Input id="license" value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} placeholder="GT-1234-20" />
                </div>
            </div>
            <DialogFooter>
                <Button onClick={handleSubmit}>Save Vehicle</Button>
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
