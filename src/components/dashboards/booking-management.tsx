
"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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

const bookingsData = [
  {
    id: "BOOK-001",
    customer: { name: "John Doe", avatar: "https://placehold.co/100x100.png" },
    service: "Full Detailing",
    date: "2024-08-01T10:00:00Z",
    status: "Upcoming",
    crew: { name: "Mike Ross", avatar: "https://placehold.co/100x100.png" },
    amount: 75.00,
  },
  {
    id: "BOOK-002",
    customer: { name: "Jane Smith", avatar: "https://placehold.co/100x100.png" },
    service: "Exterior Wash",
    date: "2024-07-28T14:00:00Z",
    status: "Completed",
    crew: { name: "Harvey Specter", avatar: "https://placehold.co/100x100.png" },
    amount: 35.00,
  },
  {
    id: "BOOK-003",
    customer: { name: "Mike Johnson", avatar: "https://placehold.co/100x100.png" },
    service: "Interior Cleaning",
    date: "2024-07-29T11:00:00Z",
    status: "In Progress",
    crew: { name: "Louis Litt", avatar: "https://placehold.co/100x100.png" },
    amount: 50.00,
  },
   {
    id: "BOOK-004",
    customer: { name: "Emily Davis", avatar: "https://placehold.co/100x100.png" },
    service: "Engine Wash",
    date: "2024-07-25T09:00:00Z",
    status: "Completed",
    crew: { name: "Mike Ross", avatar: "https://placehold.co/100x100.png" },
    amount: 40.00,
  },
  {
    id: "BOOK-005",
    customer: { name: "Robert Zane", avatar: "https://placehold.co/100x100.png" },
    service: "Full Detailing",
    date: "2024-08-02T13:00:00Z",
    status: "Upcoming",
    crew: null,
    amount: 75.00,
  },
];

const crewMembers = [
    { id: "crew-1", name: "Mike Ross" },
    { id: "crew-2", name: "Harvey Specter" },
    { id: "crew-3", name: "Louis Litt" },
    { id: "crew-4", name: "Jessica Pearson" },
]


export function BookingManagement() {
  const [activeTab, setActiveTab] = React.useState("all");

  const filteredBookings = bookingsData.filter(booking => {
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
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
                <Input placeholder="Search bookings..." className="w-64" />
                <Button variant="outline">Filter</Button>
            </div>
          </div>
          <TabsContent value={activeTab}>
             <div className="rounded-md border mt-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Status</TableHead>
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
                                    <span className="font-medium">{booking.customer.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>{booking.service}</TableCell>
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
                                        <span>{booking.crew.name}</span>
                                    </div>
                                ) : (
                                    <span className="text-muted-foreground">Unassigned</span>
                                )}
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <DotsHorizontalIcon className="h-4 w-4" />
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
                                    <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                                    <DropdownMenuItem>Cancel Booking</DropdownMenuItem>
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
