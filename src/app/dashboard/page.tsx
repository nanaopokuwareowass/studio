
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, DollarSign, Package, PlusCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const monthlySpending = [
  { month: "Jan", total: Math.floor(Math.random() * 200) + 50 },
  { month: "Feb", total: Math.floor(Math.random() * 200) + 50 },
  { month: "Mar", total: Math.floor(Math.random() * 200) + 50 },
  { month: "Apr", total: Math.floor(Math.random() * 200) + 50 },
  { month: "May", total: 250 },
  { month: "Jun", total: Math.floor(Math.random() * 200) + 50 },
]

const recentActivities = [
    {
        id: "BOOK-001",
        type: "Full Detailing",
        date: "2024-07-28",
        amount: "75.00",
        status: "Upcoming"
    },
    {
        id: "BOOK-002",
        type: "Exterior Wash",
        date: "2024-07-15",
        amount: "35.00",
        status: "Completed"
    },
    {
        id: "MKT-001",
        type: "Microfiber Towel Set",
        date: "2024-07-12",
        amount: "12.00",
        status: "Delivered"
    },
     {
        id: "BOOK-003",
        type: "Interior Cleaning",
        date: "2024-06-20",
        amount: "50.00",
        status: "Completed"
    },
]


export default function DashboardPage() {
  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between">
        <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
                An overview of your account and recent activities.
            </p>
        </div>
        <div className="flex items-center gap-4">
            <Button variant="outline">
                <Package className="mr-2 h-4 w-4" />
                Browse Marketplace
            </Button>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Book a New Wash
            </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Bookings
            </CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              Your next wash is on July 28
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$250.00</div>
            <p className="text-xs text-muted-foreground">
              In the last 6 months
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Bookings</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Your car is looking great!
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle>Monthly Spending</CardTitle>
                <CardDescription>Your spending overview for the last 6 months.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlySpending}>
                    <XAxis
                    dataKey="month"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
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
                    <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>A log of your recent bookings and purchases.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentActivities.map((activity) => (
                             <TableRow key={activity.id}>
                                <TableCell>
                                <div className="font-medium">{activity.type}</div>
                                <div className="text-sm text-muted-foreground">{new Date(activity.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}</div>
                                </TableCell>
                                <TableCell className="text-right">
                                     <Badge 
                                        variant={activity.status === 'Completed' || activity.status === 'Delivered' ? 'secondary' : activity.status === 'Upcoming' ? 'default' : 'outline'}
                                    >
                                        {activity.status}
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
