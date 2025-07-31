
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Car, MapPin, Navigation, UserCheck } from "lucide-react";
import Image from "next/image";


const activeBookings = [
    {
        id: 'BOOK-001',
        customer: 'John Doe',
        location: '123 Main St, Accra',
        service: 'Full Detailing',
        agent: 'Mike Ross',
        status: 'In Progress',
        coords: { lat: 5.6037, lng: -0.1870 }
    },
    {
        id: 'BOOK-003',
        customer: 'Jane Smith',
        location: '456 Oak Ave, Tema',
        service: 'Interior Cleaning',
        agent: 'Harvey Specter',
        status: 'Upcoming',
        coords: { lat: 5.6598, lng: 0.0163 }
    },
];

const agentsOnDuty = [
    {
        id: 'AGENT-01',
        name: 'Mike Ross',
        avatar: 'https://placehold.co/100x100.png',
        currentTask: 'BOOK-001 at 123 Main St',
        status: 'Active',
    },
    {
        id: 'AGENT-02',
        name: 'Harvey Specter',
        avatar: 'https://placehold.co/100x100.png',
        currentTask: 'En route to 456 Oak Ave',
        status: 'Driving',
    },
     {
        id: 'AGENT-03',
        name: 'Louis Litt',
        avatar: 'https://placehold.co/100x100.png',
        currentTask: 'Idle',
        status: 'Available',
    }
]

export function LocationManagement() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            <Card className="lg:col-span-1 h-[calc(100vh-10rem)] flex flex-col">
                <CardHeader>
                    <CardTitle>Live Operations</CardTitle>
                    <CardDescription>
                        Real-time overview of bookings and agents.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col overflow-hidden p-0">
                    <ScrollArea className="flex-grow">
                        <div className="p-6 pt-0">
                             <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Car className="h-5 w-5" /> Active Bookings
                            </h3>
                            <div className="space-y-4">
                                {activeBookings.map((booking) => (
                                    <div key={booking.id} className="p-3 bg-muted/50 rounded-lg">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="font-semibold">{booking.customer}</p>
                                                <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                                                   <MapPin className="h-3.5 w-3.5" /> {booking.location}
                                                </p>
                                            </div>
                                            <Badge variant={booking.status === 'In Progress' ? 'default' : 'secondary'}>{booking.status}</Badge>
                                        </div>
                                        <Separator className="my-2" />
                                        <div className="flex justify-between items-center text-sm">
                                            <p className="text-muted-foreground">{booking.service}</p>
                                            <Button variant="ghost" size="sm" className="h-7 gap-1">
                                                Directions <Navigation className="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Separator className="my-6" />

                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <UserCheck className="h-5 w-5" /> Agents on Duty
                            </h3>
                             <div className="space-y-4">
                                {agentsOnDuty.map((agent) => (
                                     <div key={agent.id} className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50">
                                         <Avatar className="h-10 w-10">
                                            <AvatarImage src={agent.avatar} alt={agent.name} data-ai-hint="person avatar"/>
                                            <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-grow">
                                            <p className="font-semibold">{agent.name}</p>
                                            <p className="text-sm text-muted-foreground">{agent.currentTask}</p>
                                        </div>
                                        <Badge variant={agent.status === 'Active' ? 'outline' : agent.status === 'Available' ? 'secondary' : 'default'} >{agent.status}</Badge>
                                     </div>
                                ))}
                            </div>
                        </div>

                    </ScrollArea>
                </CardContent>
            </Card>

            <Card className="lg:col-span-2 h-[60vh] lg:h-[calc(100vh-10rem)] overflow-hidden">
                <div className="relative w-full h-full">
                    {/* Placeholder for map integration */}
                    <Image
                        src="https://storage.googleapis.com/gweb-aip-images/us-central1/aip-4775438853924192256/7D3F971E86E2073B4BED4E3F786C10D4.jpg"
                        fill
                        alt="Map of the city"
                        className="object-cover"
                        data-ai-hint="city map"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                     <CardHeader className="absolute top-0 left-0 text-white">
                        <CardTitle className="text-2xl drop-shadow-md">Route &amp; Location Map</CardTitle>
                        <CardDescription className="text-white/80 drop-shadow-md">Live view of all operations.</CardDescription>
                    </CardHeader>
                </div>
            </Card>
        </div>
    )
}
