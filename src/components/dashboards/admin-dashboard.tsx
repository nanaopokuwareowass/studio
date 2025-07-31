
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Users, Car, Activity } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Line, LineChart } from "recharts";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


const recentBookings = [
    {
        bookingId: "BOOK-001",
        customer: { name: "John Doe", avatar: "https://placehold.co/100x100.png" },
        service: "Full Detailing",
        date: "2024-07-28",
        status: "Upcoming",
        amount: 75.00
    },
    {
        bookingId: "BOOK-002",
        customer: { name: "Jane Smith", avatar: "https://placehold.co/100x100.png" },
        service: "Exterior Wash",
        date: "2024-07-27",
        status: "Completed",
        amount: 35.00
    },
    {
        bookingId: "BOOK-003",
        customer: { name: "Mike Johnson", avatar: "https://placehold.co/100x100.png" },
        service: "Interior Cleaning",
        date: "2024-07-27",
        status: "Completed",
        amount: 50.00
    },
     {
        bookingId: "BOOK-004",
        customer: { name: "Emily Davis", avatar: "https://placehold.co/100x100.png" },
        service: "Engine Wash",
        date: "2024-07-26",
        status: "Completed",
        amount: 40.00
    },
];

export function AdminDashboard() {
  const [revenueData, setRevenueData] = useState<any[]>([]);

  useEffect(() => {
    // Mock data fetching
    setRevenueData([
      { date: "2024-07-01", revenue: 450 },
      { date: "2024-07-02", revenue: 580 },
      { date: "2024-07-03", revenue: 520 },
      { date: "2024-07-04", revenue: 680 },
      { date: "2024-07-05", revenue: 720 },
      { date: "2024-07-06", revenue: 650 },
      { date: "2024-07-07", revenue: 800 },
    ]);
  }, [])
    
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          A complete overview of your business operations and performance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+235</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bookings Today</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">+19% from yesterday</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Crew</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Currently on assignments</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Daily revenue for the last 7 days.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                        <XAxis
                            dataKey="date"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(str) => new Date(str).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip
                            cursor={{fill: 'hsl(var(--secondary))', radius: 'var(--radius)'}}
                            contentStyle={{
                                backgroundColor: 'hsl(var(--background))',
                                borderRadius: 'var(--radius)',
                                border: '1px solid hsl(var(--border))'
                            }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
                <CardDescription>A list of the most recent bookings.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentBookings.map((booking) => (
                             <TableRow key={booking.bookingId}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={booking.customer.avatar} alt={booking.customer.name} data-ai-hint="person avatar"/>
                                            <AvatarFallback>{booking.customer.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium">{booking.customer.name}</div>
                                            <div className="text-sm text-muted-foreground">{new Date(booking.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {booking.service}
                                </TableCell>
                                <TableCell className="text-right">
                                    ${booking.amount.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-right">
                                     <Badge 
                                        variant={booking.status === 'Completed' ? 'secondary' : booking.status === 'Upcoming' ? 'default' : 'outline'}
                                    >
                                        {booking.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

