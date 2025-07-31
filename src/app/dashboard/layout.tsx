
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarInset, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarSeparator, SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Bell, Briefcase, Calendar, Car, LayoutGrid, LifeBuoy, LogOut, Settings, ShoppingBag, Truck, User, Users, LineChart, Store, Map } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="font-semibold text-xl group-data-[collapsible=icon]:hidden">DT GUYS PRO</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
             <SidebarMenuItem>
                <Link href="/dashboard">
                    <SidebarMenuButton>
                        <LayoutGrid />
                        <span>Dashboard</span>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>

            <SidebarGroup>
                <SidebarGroupLabel>Customer</SidebarGroupLabel>
                <SidebarMenuItem>
                    <Link href="/dashboard">
                        <SidebarMenuButton>
                            <ShoppingBag />
                            <span>My Bookings</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link href="/dashboard/marketplace">
                        <SidebarMenuButton>
                            <Store />
                            <span>Marketplace</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Crew</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <Link href="/dashboard/crew">
                        <SidebarMenuButton>
                            <Briefcase />
                            <span>Assigned Washes</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <Link href="/dashboard/crew">
                        <SidebarMenuButton>
                            <Calendar />
                            <span>My Schedule</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Admin</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <Link href="/dashboard/admin">
                        <SidebarMenuButton>
                            <LineChart />
                            <span>Admin Dashboard</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                     <Link href="#">
                        <SidebarMenuButton>
                            <Users />
                            <span>User Management</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <Link href="/dashboard/bookings">
                        <SidebarMenuButton>
                            <Truck />
                            <span>Bookings Management</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <Link href="/dashboard/admin/marketplace">
                        <SidebarMenuButton>
                            <Store />
                            <span>Marketplace Management</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <Link href="/dashboard/admin/location">
                        <SidebarMenuButton>
                            <Map />
                            <span>Location Management</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <Link href="#">
                        <SidebarMenuButton>
                            <LifeBuoy />
                            <span>Support</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link href="#">
                        <SidebarMenuButton>
                            <Settings />
                            <span>Settings</span>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                             <SidebarMenuButton>
                                <Avatar className="h-7 w-7">
                                    <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="person avatar" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <span className="flex flex-col">
                                    <span>User</span>
                                    <span className="text-xs text-muted-foreground">user@email.com</span>
                                </span>
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="right" align="start">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center justify-between p-4 bg-background border-b">
           <div className="flex items-center gap-4">
            <SidebarTrigger className="md:hidden" />
            <h1 className="text-xl font-semibold hidden md:block">Welcome Back!</h1>
           </div>
           <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                         <Button variant="ghost" size="icon" className="rounded-full">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="person avatar" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <span className="sr-only">User menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4"/>
                            <span>Profile</span>
                        </DropdownMenuItem>
                         <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4"/>
                            <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                           <Link href="/">
                             <LogOut className="mr-2 h-4 w-4"/>
                             <span>Logout</span>
                           </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
           </div>
        </header>
        <main className="flex-1 p-6 bg-secondary/40">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
