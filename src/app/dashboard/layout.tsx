"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarInset, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarSeparator, SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Bell, Briefcase, Calendar, LayoutGrid, LifeBuoy, LogOut, Settings, ShoppingBag, Truck, User, Users, LineChart, Store, Map, Menu, Wrench, CreditCard, BarChart3, Heart, Home, BellRing, History, Tablet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const MainSidebarContent = () => (
    <>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Image
              src="/images/logo.svg"
              alt="DT GUYS PRO"width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-semibold text-xl group-data-[collapsible=icon]:hidden">DT GUYS PRO</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
              <SidebarMenuItem>
                  <Link href="/dashboard" passHref>
                      <SidebarMenuButton>
                          <Home />
                          <span>Dashboard</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                  <Link href="/dashboard/my-bookings" passHref>
                      <SidebarMenuButton>
                          <Briefcase />
                          <span>My Bookings</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/my-vehicles" passHref>
                      <SidebarMenuButton>
                          <Image
                            src="/images/logo.svg"
                            alt="Vehicle Icon"width={28}
                            height={28}
                            className="w-7 h-7"
                          />
                          <span>My Vehicles</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                  <Link href="/dashboard/payment-history" passHref>
                      <SidebarMenuButton>
                          <History />
                          <span>Payment History</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                  <Link href="/dashboard/marketplace" passHref>
                      <SidebarMenuButton>
                          <Store />
                          <span>Marketplace</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/notifications" passHref>
                      <SidebarMenuButton>
                          <BellRing />
                          <span>Notifications</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/settings" passHref>
                      <SidebarMenuButton>
                          <Settings />
                          <span>Settings</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>

              <SidebarSeparator />

              <SidebarMenuItem>
                  <Link href="/dashboard/crew" passHref>
                      <SidebarMenuButton>
                          <Briefcase />
                          <span>Assigned Washes</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/crew" passHref>
                      <SidebarMenuButton>
                          <Calendar />
                          <span>My Schedule</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/crew/pos" passHref>
                      <SidebarMenuButton>
                          <Tablet />
                          <span>POS</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>

            <SidebarSeparator />

              <SidebarMenuItem>
                  <Link href="/dashboard/admin" passHref>
                      <SidebarMenuButton>
                          <LineChart />
                          <span>Overview</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/admin/reports" passHref>
                      <SidebarMenuButton>
                          <BarChart3 />
                          <span>Analytics</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link href="/dashboard/admin/users" passHref>
                      <SidebarMenuButton>
                          <Users />
                          <span>User Management</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/bookings" passHref>
                      <SidebarMenuButton>
                          <Truck />
                          <span>Bookings Management</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                  <Link href="/dashboard/admin/services" passHref>
                      <SidebarMenuButton>
                          <Wrench />
                          <span>Service Management</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/admin/marketplace" passHref>
                      <SidebarMenuButton>
                          <Store />
                          <span>Marketplace Management</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/admin/location" passHref>
                      <SidebarMenuButton>
                          <Map />
                          <span>Location Management</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                  <Link href="/dashboard/admin/payments" passHref>
                      <SidebarMenuButton>
                          <CreditCard />
                          <span>Payment Management</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
                <SidebarMenuItem>
                  <Link href="/dashboard/admin/settings" passHref>
                      <SidebarMenuButton>
                          <Settings />
                          <span>Settings</span>
                      </SidebarMenuButton>
                  </Link>
              </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <Link href="#" passHref>
                        <SidebarMenuButton>
                            <LifeBuoy />
                            <span>Support</span>
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
    </>
);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar className="hidden md:flex md:flex-col">
        <MainSidebarContent />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center justify-between p-4 bg-background border-b">
           <div className="flex items-center gap-4">
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
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 flex flex-col w-[300px] sm:w-[340px]">
                      <MainSidebarContent />
                    </SheetContent>
                </Sheet>
           </div>
        </header>
        <main className="flex-1 p-4 md:p-6 bg-secondary/40">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
