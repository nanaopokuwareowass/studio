
"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookWashModal } from "./book-wash-modal"
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";


const API_URL = "/api";

type Booking = {
    id: string;
    service: string;
    booking_date: string;
    status: "Upcoming" | "Completed" | "Cancelled";
    crew: { name: string, avatar: string } | null;
    amount: number;
}

export function MyBookings() {
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
                service: "Service " + booking.service_id,
                crew: { name: "Mike Ross", avatar: "https://placehold.co/100x100.png" },
                amount: 75.00
            }));
            setBookings(mappedBookings);
        } else {
            toast({ variant: "destructive", title: "Failed to fetch bookings", description: response.data.message });
        }
    } catch (error: any) {
        toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  }, [toast]);

  React.useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const filteredBookings = bookings.filter(booking => {
    if (activeTab === 'all') return true;
    return booking.status.toLowerCase().replace(" ", "-") === activeTab;
  });

  const getStatusVariant = (status: string) => {
    switch(status) {
        case "Completed": return "secondary";
        case "Upcoming": return "default";
        case "Cancelled": return "destructive";
        default: return "default";
    }
  }

  return (
    <Card>
      <CardHeader className="flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
            <CardTitle>My Bookings</CardTitle>
            <CardDescription>
            View and manage your car wash appointments.
            </CardDescription>
        </div>
         <BookWashModal />
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full sm:w-auto sm:grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Past</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab}>
             <div className="rounded-md border mt-4">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Service</TableHead>
                                <TableHead className="hidden sm:table-cell">Date & Time</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Assigned Crew</TableHead>
                                <TableHead className="text-right hidden md:table-cell">Amount</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {filteredBookings.length > 0 ? (
                            filteredBookings.map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell className="font-medium">{booking.service}</TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    {new Date(booking.booking_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, {new Date(booking.booking_date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                </TableCell>
                                <TableCell>
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
                                <TableCell className="text-right hidden md:table-cell">${booking.amount.toFixed(2)}</TableCell>
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
                                        <DropdownMenuItem>Reschedule</DropdownMenuItem>
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
