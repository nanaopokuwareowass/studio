
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { File, MoreVertical, Users, Car, MapPin, DollarSign, Wrench, Package, ShoppingCart, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const revenueData = [
  { month: "Jan", revenue: 4000 }, { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 }, { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 }, { month: "Jun", revenue: 5500 },
];

const topServicesData = [
  { name: "Full Detailing", value: 400 },
  { name: "Exterior Wash", value: 300 },
  { name: "Interior Clean", value: 300 },
  { name: "Wax & Polish", value: 200 },
];

const revenueByLocationData = [
    { location: "Accra", revenue: 12500 },
    { location: "Tema", revenue: 8200 },
    { location: "Kumasi", revenue: 6800 },
    { location: "Takoradi", revenue: 4500 },
];

const topProductsData = [
  { name: "Carnauba Wax", units: 150 },
  { name: "Microfiber Towels", units: 250 },
  { name: "Tire Shine Gel", units: 180 },
  { name: "All-Purpose Cleaner", units: 210 },
];

const salesByCategoryData = [
  { name: "Cleaners", value: 4500 },
  { name: "Waxes & Polishes", value: 6200 },
  { name: "Accessories", value: 3200 },
  { name: "Tire Care", value: 2800 },
];

const COLORS = ["hsl(var(--primary))", "#16a34a", "#f97316", "#6366f1"];


export function AnalyticsReports() {
    return (
        <div className="space-y-8">
             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Analytics & Reports</h1>
                    <p className="text-muted-foreground">
                        Deep dive into your business performance.
                    </p>
                </div>
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                    <File className="h-4 w-4"/>
                    Export All Reports
                </Button>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">Car Wash Analytics</h2>
                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,254</div>
                            <p className="text-xs text-muted-foreground">+54 this month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Bookings (Month)</CardTitle>
                            <Car className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">350</div>
                            <p className="text-xs text-muted-foreground">+12% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Top Service</CardTitle>
                            <Wrench className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Full Detailing</div>
                            <p className="text-xs text-muted-foreground">400 bookings this month</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$28,850.50</div>
                            <p className="text-xs text-muted-foreground">+8% from last month</p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Monthly Revenue Trend</CardTitle>
                        <CardDescription>Track your revenue performance over the past 6 months.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                                <Tooltip formatter={(value) => `$${value}`} />
                                <Legend />
                                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Performing Services</CardTitle>
                            <CardDescription>Based on booking volume this month.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={topServicesData} layout="vertical">
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={120} tickLine={false} axisLine={false} />
                                    <Tooltip cursor={{ fill: 'hsl(var(--secondary))' }} />
                                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Revenue by Location</CardTitle>
                            <CardDescription>Breakdown of revenue from top operational areas.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={revenueByLocationData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="location" />
                                    <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                                    <Tooltip formatter={(value) => `$${value}`} />
                                    <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="space-y-6 pt-6 border-t">
                <h2 className="text-2xl font-semibold tracking-tight">Marketplace Analytics</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                     <Card>
                        <CardHeader className="flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Marketplace Sales</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$2,350.89</div>
                            <p className="text-xs text-muted-foreground">+5% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                            <ShoppingCart className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">182</div>
                            <p className="text-xs text-muted-foreground">+22% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Top Selling Product</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Microfiber Towels</div>
                            <p className="text-xs text-muted-foreground">250 units sold</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">Active Discounts</CardTitle>
                            <Percent className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">5</div>
                            <p className="text-xs text-muted-foreground">FREECLEAN is most popular</p>
                        </CardContent>
                    </Card>
                </div>
                 <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Selling Products</CardTitle>
                            <CardDescription>Based on units sold this month.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={topProductsData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="units" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Marketplace Sales by Category</CardTitle>
                            <CardDescription>Breakdown of sales across product categories.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center">
                            <ResponsiveContainer width="100%" height={300}>
                               <PieChart>
                                    <Pie data={salesByCategoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                                        {salesByCategoryData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

    
