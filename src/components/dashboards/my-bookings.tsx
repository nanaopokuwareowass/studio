
"use client"

import * as React from "react"
import { MoreHorizontal, PlusCircle } from "lucide-react"

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

const bookingsData = [
  {
    id: "BOOK-001",
    service: "Full Detailing",
    date: "2024-08-01T10:00:00Z",
    status: "Upcoming",
    crew: { name: "Mike Ross", avatar: "https://placehold.co/100x100.png" },
    amount: 75.00,
  },
  {
    id: "BOOK-002",
    service: "Exterior Wash",
    date: "2024-07-28T14:00:00Z",
    status: "Completed",
    crew: { name: "Harvey Specter", avatar: "https://placehold.co/100x100.png" },
    amount: 35.00,
  },
  {
    id: "BOOK-003",
    service: "Interior Cleaning",
    date: "2024-07-29T11:00:00Z",
    status: "Completed",
    crew: { name: "Louis Litt", avatar: "https://placehold.co/100x100.png" },
    amount: 50.00,
  },
   {
    id: "BOOK-004",
    service: "Engine Wash",
    date: "2024-07-25T09:00:00Z",
    status: "Completed",
    crew: { name: "Mike Ross", avatar: "https://placehold.co/100x100.png" },
    amount: 40.00,
  },
];


export function MyBookings() {
  const [activeTab, setActiveTab] = React.useState("all");

  const filteredBookings = bookingsData.filter(booking => {
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
      <CardHeader className="flex-row items-center justify-between">
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
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Service</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Assigned Crew</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                             <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {filteredBookings.length > 0 ? (
                        filteredBookings.map((booking) => (
                        <TableRow key={booking.id}>
                            <TableCell className="font-medium">{booking.service}</TableCell>
                            <TableCell>
                                {new Date(booking.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}, {new Date(booking.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
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
                             <TableCell className="text-right">${booking.amount.toFixed(2)}</TableCell>
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
                                    <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
