
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarInset, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarSeparator, SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Bell, Briefcase, Calendar, Car, LayoutGrid, LifeBuoy, LogOut, Settings, ShoppingBag, Truck, User, Users } from "lucide-react";

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
              <SidebarMenuButton href="/dashboard" isActive>
                <LayoutGrid />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarGroup>
                <SidebarGroupLabel>Customer</SidebarGroupLabel>
                <SidebarMenuItem>
                <SidebarMenuButton href="#">
                    <ShoppingBag />
                    <span>My Bookings</span>
                </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                <SidebarMenuButton href="/marketplace">
                    <ShoppingBag />
                    <span>Marketplace</span>
                </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Crew</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <SidebarMenuButton href="#">
                        <Briefcase />
                        <span>Assigned Washes</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton href="#">
                        <Calendar />
                        <span>My Schedule</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Admin</SidebarGroupLabel>
                 <SidebarMenuItem>
                    <SidebarMenuButton href="#">
                        <Users />
                        <span>User Management</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton href="#">
                        <Truck />
                        <span>Bookings Management</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <SidebarMenuButton href="#">
                        <Settings />
                        <span>Service Management</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton href="#">
                        <LifeBuoy />
                        <span>Support</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton href="#">
                        <Settings />
                        <span>Settings</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                             <div className="group/menu-item relative">
                                <button
                                data-sidebar="menu-button"
                                data-size="default"
                                className="peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                                >
                                <Avatar className="h-7 w-7">
                                    <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="person avatar" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <span className="flex flex-col">
                                    <span>User</span>
                                    <span className="text-xs text-muted-foreground">user@email.com</span>
                                </span>
                                </button>
                            </div>
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
                           <a href="/">
                             <LogOut className="mr-2 h-4 w-4"/>
                             <span>Logout</span>
                           </a>
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
