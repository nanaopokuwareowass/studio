
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, CheckCircle, Clock, Navigation, FilePlus, Camera, StickyNote } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Input } from "../ui/input";

const assignedWashes = [
    {
        bookingId: "BOOK-001",
        customer: "John Doe",
        vehicle: "Toyota Camry",
        service: "Full Detailing",
        location: "123 Main St, Accra",
        dateTime: "2024-07-28T10:00:00Z",
        status: "Upcoming"
    },
    {
        bookingId: "BOOK-005",
        customer: "Alice Williams",
        vehicle: "Honda CR-V",
        service: "Exterior Wash",
        location: "456 Oak Ave, Tema",
        dateTime: "2024-07-28T14:00:00Z",
        status: "Upcoming"
    },
     {
        bookingId: "BOOK-002",
        customer: "Jane Smith",
        vehicle: "Ford F-150",
        service: "Interior Cleaning",
        location: "789 Pine Ln, Kumasi",
        dateTime: "2024-07-27T15:00:00Z",
        status: "Completed"
    },
];

type Wash = typeof assignedWashes[0];

export function CrewDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleNavigate = (location: string) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, "_blank");
  }

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Crew Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your assigned washes and view your schedule.
        </p>
      </div>

       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Washes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Assigned for today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed This Week</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">+10% from last week</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10:00 AM</div>
            <p className="text-xs text-muted-foreground">Today with John Doe</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Assigned Washes</CardTitle>
                <CardDescription>Details of your upcoming and recent jobs.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Customer & Vehicle</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {assignedWashes.map((wash) => (
                             <TableRow key={wash.bookingId} className={wash.status === 'Completed' ? 'opacity-60' : ''}>
                                <TableCell>
                                    <div className="font-medium">{wash.customer}</div>
                                    <div className="text-sm text-muted-foreground">{wash.vehicle} - {wash.location}</div>
                                </TableCell>
                                <TableCell>{wash.service}</TableCell>
                                <TableCell>{new Date(wash.dateTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</TableCell>
                                <TableCell className="text-right">
                                    {wash.status === 'Upcoming' ? (
                                        <div className="flex gap-2 justify-end">
                                            <JobDetailsDialog wash={wash} />
                                            <Button size="sm" onClick={() => handleNavigate(wash.location)} variant="outline">
                                                <Navigation className="mr-2 h-4 w-4" />
                                                Navigate
                                            </Button>
                                        </div>
                                    ) : (
                                         <Badge variant="secondary">Completed</Badge>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>My Schedule</CardTitle>
                <CardDescription>Your availability and booked slots.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                 <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    // In a real app, you would pass events to the calendar
                    // and disable dates where the crew member is unavailable.
                />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}


function JobDetailsDialog({ wash }: { wash: Wash }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">View Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Job Details: {wash.bookingId}</DialogTitle>
                    <DialogDescription>
                        Log photos and notes for the job for {wash.customer}.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                     <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2"><Camera className="h-5 w-5" /> Job Photos</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="before-photo">Before Photo</Label>
                                <div className="h-32 rounded-md border-2 border-dashed flex items-center justify-center bg-muted">
                                    <FilePlus className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <Input id="before-photo" type="file" className="text-xs"/>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="after-photo">After Photo</Label>
                                <div className="h-32 rounded-md border-2 border-dashed flex items-center justify-center bg-muted">
                                    <FilePlus className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <Input id="after-photo" type="file" className="text-xs" />
                            </div>
                        </div>
                    </div>
                     <div className="space-y-2">
                        <h4 className="font-semibold flex items-center gap-2"><StickyNote className="h-5 w-5" /> Job Notes</h4>
                        <Textarea placeholder="e.g., Noticed a scratch on the rear bumper..." />
                    </div>
                </div>
                <DialogFooter className="sm:justify-between">
                    <Button variant="outline">Mark as Completed</Button>
                    <Button>Start Wash</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
