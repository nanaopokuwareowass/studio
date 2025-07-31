
"use client"

import * as React from "react"
import {
  File,
  PlusCircle,
  MoreHorizontal,
  Search
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const usersData = [
  { id: "USR-001", name: "John Doe", email: "john.d@example.com", role: "Customer", status: "Active", joined: "2023-01-15", avatar: "https://placehold.co/100x100.png" },
  { id: "USR-002", name: "Jane Smith", email: "jane.s@example.com", role: "Customer", status: "Active", joined: "2023-02-20", avatar: "https://placehold.co/100x100.png" },
  { id: "USR-003", name: "Mike Ross", email: "mike.r@example.com", role: "Crew", status: "Active", joined: "2023-03-10", avatar: "https://placehold.co/100x100.png" },
  { id: "USR-004", name: "Harvey Specter", email: "harvey.s@example.com", role: "Crew", status: "On-leave", joined: "2023-03-10", avatar: "https://placehold.co/100x100.png" },
  { id: "USR-005", name: "Jessica Pearson", email: "jessica.p@example.com", role: "Admin", status: "Active", joined: "2023-01-01", avatar: "https://placehold.co/100x100.png" },
  { id: "USR-006", name: "Louis Litt", email: "louis.l@example.com", role: "Crew", status: "Inactive", joined: "2023-05-22", avatar: "https://placehold.co/100x100.png" },
];

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Active": return "secondary";
    case "Inactive": return "destructive";
    case "On-leave": return "outline";
    default: return "default";
  }
};

const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "Admin": return "default";
      case "Crew": return "secondary";
      case "Customer": return "outline";
      default: return "outline";
    }
  };


export function UserManagement() {
  const [activeTab, setActiveTab] = React.useState("all");

  const filteredUsers = usersData.filter(user => {
    if (activeTab === 'all') return true;
    if (activeTab === 'customers') return user.role === 'Customer';
    if (activeTab === 'crew') return user.role === 'Crew';
    if (activeTab === 'staff') return user.role === 'Admin' || user.role === 'Staff';
    return true;
  });

  return (
    <div className="grid flex-1 items-start gap-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All Users</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="crew">Crew</TabsTrigger>
              <TabsTrigger value="staff">Admin/Staff</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <AddUserDialog />
            </div>
          </div>
          <TabsContent value={activeTab}>
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  View, manage, and edit users in the system.
                </CardDescription>
                 <div className="relative mt-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search users by name or email..." className="pl-10 w-full md:w-80" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead className="hidden md:table-cell">Role</TableHead>
                        <TableHead className="hidden md:table-cell">Joined Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>
                            <span className="sr-only">Actions</span>
                        </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="person avatar"/>
                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium">{user.name}</div>
                                        <div className="text-sm text-muted-foreground">{user.email}</div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                            <Badge variant={getRoleBadgeVariant(user.role)}>{user.role}</Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                            {new Date(user.joined).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                            <Badge variant={getStatusBadgeVariant(user.status)}>{user.status}</Badge>
                            </TableCell>
                            <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View Profile</DropdownMenuItem>
                                <DropdownMenuItem>Edit User</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Delete User</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  )
}

function AddUserDialog() {
  return (
     <Dialog>
        <DialogTrigger asChild>
            <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add User
                </span>
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
                Fill in the details to add a new user. An invitation will be sent to their email.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input id="name" placeholder="John Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">Email</Label>
                    <Input id="email" type="email" placeholder="user@example.com" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right">Role</Label>
                    <Select>
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="customer">Customer</SelectItem>
                            <SelectItem value="crew">Crew</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">Create User</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
