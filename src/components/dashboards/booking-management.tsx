
"use client"

import * as React from "react"
import { MoreHorizontal, Search } from "lucide-react"
import axios from "axios";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const API_URL = "/api";

type Booking = {
    id: string;
    user_id: string;
    vehicle_id: string;
    service_id: string;
    booking_date: string;
    status: "Upcoming" | "In Progress" | "Completed" | "Cancelled";
    // Dummy data for now, would be joined in a real app
    customer: { name: string, avatar: string };
    service: string;
    crew: { name: string, avatar: string } | null;
    amount: number;
}

const crewMembers = [
    { id: "crew-1", name: "Mike Ross" },
    { id: "crew-2", name: "Harvey Specter" },
    { id: "crew-3", name: "Louis Litt" },
    { id: "crew-4", name: "Jessica Pearson" },
]


export function BookingManagement() {
  const [bookings, setBookings] = React.useState<Booking[]>([]);
  const [activeTab, setActiveTab] = React.useState("all");
  const { toast } = useToast();

  const fetchBookings = React.useCallback(async () => {
    try {
        const response = await axios.get(`${API_URL}/bookings`);
        if (response.data.status === 'success') {
            // Placeholder data mapping
            const mappedBookings = response.data.data.map((booking: any) => ({
                ...booking,
                customer: { name: "Customer " + booking.user_id, avatar: "https://placehold.co/100x100.png" },
                service: "Service " + booking.service_id,
                crew: null,
                amount: 50.00
            }));
            setBookings(mappedBookings);
        } else {
            toast({ variant: "destructive", title: "Failed to fetch bookings", description: response.data.message });
        }
    } catch(error: any) {
        toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  }, [toast]);

  React.useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const handleUpdateStatus = async (bookingId: string, status: string, booking_date: string) => {
    try {
        const response = await axios.put(`${API_URL}/bookings`, { id: bookingId, status, booking_date });
        if (response.data.status === 'success') {
            toast({ title: "Booking Updated", description: `Booking marked as ${status}.` });
            fetchBookings();
        } else {
            toast({ variant: "destructive", title: "Update Failed", description: response.data.message });
        }
    } catch (error: any) {
        toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (activeTab === 'all') return true;
    return booking.status.toLowerCase().replace(" ", "-") === activeTab;
  });

  const getStatusVariant = (status: string) => {
    switch(status) {
        case "Completed": return "secondary";
        case "Upcoming": return "default";
        case "In Progress": return "outline";
        case "Cancelled": return "destructive";
        default: return "default";
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Management</CardTitle>
        <CardDescription>
          View, manage, and track all customer bookings.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <TabsList className="grid grid-cols-4 w-full sm:w-auto">
              <TabsTrigger value="all" className="w-full">All</TabsTrigger>
              <TabsTrigger value="upcoming" className="w-full">Upcoming</TabsTrigger>
              <TabsTrigger value="in-progress" className="w-full">In Progress</TabsTrigger>
              <TabsTrigger value="completed" className="w-full">Completed</TabsTrigger>
            </TabsList>
            <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search bookings..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
            </div>
          </div>
          <TabsContent value={activeTab}>
             <div className="rounded-md border mt-4">
                <div className="overflow-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden lg:table-cell">Service</TableHead>
                                <TableHead className="hidden md:table-cell">Date & Time</TableHead>
                                <TableHead className="hidden sm:table-cell">Status</TableHead>
                                <TableHead>Assigned Crew</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {filteredBookings.length > 0 ? (
                            filteredBookings.map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={booking.customer.avatar} alt={booking.customer.name} data-ai-hint="person avatar"/>
                                            <AvatarFallback>{booking.customer.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="font-medium">{booking.customer.name}</div>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden lg:table-cell">{booking.service}</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {new Date(booking.booking_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, {new Date(booking.booking_date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <Badge variant={getStatusVariant(booking.status)}>{booking.status}</Badge>
                                </TableCell>
                                <TableCell>
                                    {booking.crew ? (
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-7 w-7">
                                                <AvatarImage src={booking.crew.avatar} alt={booking.crew.name} data-ai-hint="person avatar"/>
                                                <AvatarFallback>{booking.crew.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="hidden sm:inline">{booking.crew.name}</span>
                                        </div>
                                    ) : (
                                        <Badge variant="outline">Unassigned</Badge>
                                    )}
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem>View Details</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuLabel>Assign Crew</DropdownMenuLabel>
                                        {crewMembers.map(crew => (
                                            <DropdownMenuItem key={crew.id}>{crew.name}</DropdownMenuItem>
                                        ))}
                                        <DropdownMenuSeparator />
                                        <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                                        <DropdownMenuItem onClick={() => handleUpdateStatus(booking.id, "Completed", booking.booking_date)}>Mark as Completed</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleUpdateStatus(booking.id, "In Progress", booking.booking_date)}>Mark as In Progress</DropdownMenuItem>
                                        <DeleteBookingDialog bookingId={booking.id} onBookingDeleted={fetchBookings} />
                                    </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                            ))
                        ) : (
                            <TableRow>
                            <TableCell colSpan={6} className="h-24 text-center">
                                No bookings found.
                            </TableCell>
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function DeleteBookingDialog({ bookingId, onBookingDeleted }: { bookingId: string, onBookingDeleted: () => void }) {
    const { toast } = useToast();
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${API_URL}/bookings`, { data: { id: bookingId } });
            if (response.data.status === 'success') {
                toast({ title: "Booking Cancelled", description: "The booking has been removed." });
                onBookingDeleted();
            } else {
                toast({ variant: "destructive", title: "Failed to cancel booking", description: response.data.message });
            }
        } catch (error: any) {
            toast({ variant: "destructive", title: "API Error", description: error.message });
        }
    };
    
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem className="text-destructive" onSelect={e => e.preventDefault()}>Cancel Booking</DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently cancel this booking. This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

