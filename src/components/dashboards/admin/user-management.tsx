
"use client"

import * as React from "react"
import {
  File,
  PlusCircle,
  MoreHorizontal,
  Search
} from "lucide-react"
import axios from "axios";

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
import { useToast } from "@/hooks/use-toast"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const API_URL = "/api";

type User = {
  id: string;
  name: string;
  email: string;
  role: "Customer" | "Crew" | "Admin" | "Staff";
  status: "Active" | "Inactive" | "On-leave";
  joined: string;
  avatar: string;
};

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
  const [users, setUsers] = React.useState<User[]>([]);
  const [activeTab, setActiveTab] = React.useState("all");
  const { toast } = useToast();

  const fetchUsers = React.useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      if (response.data.status === 'success') {
        // The API returns role as lowercase, let's normalize it to capitalized for consistency
        const fetchedUsers = response.data.data.map((user: any) => ({
            ...user,
            role: user.role.charAt(0).toUpperCase() + user.role.slice(1),
            // Add placeholder data for fields not in the DB
            status: "Active",
            joined: new Date().toISOString().split('T')[0], // Placeholder
            avatar: "https://placehold.co/100x100.png"
        }));
        setUsers(fetchedUsers);
      } else {
        toast({ variant: "destructive", title: "Failed to fetch users", description: response.data.message });
      }
    } catch (error: any) {
      toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  }, [toast]);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = users.filter(user => {
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
              <AddUserDialog onUserAdded={fetchUsers} />
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
                                <EditUserDialog user={user} onUserUpdated={fetchUsers} />
                                <DropdownMenuSeparator />
                                <DeleteUserDialog userId={user.id} onUserDeleted={fetchUsers}/>
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

function AddUserDialog({ onUserAdded }: { onUserAdded: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState<string | undefined>();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!name || !email || !password || !role) {
        toast({ variant: "destructive", title: "Validation Error", description: "Please fill all fields."});
        return;
    }
    try {
        const response = await axios.post(`${API_URL}/users`, { name, email, password, role: role.toLowerCase() });
        if(response.data.status === 'success') {
            toast({ title: "User Created", description: "The new user has been added successfully."});
            onUserAdded();
            setIsOpen(false);
            setName("");
            setEmail("");
            setPassword("");
            setRole(undefined);
        } else {
            toast({ variant: "destructive", title: "Failed to create user", description: response.data.message });
        }
    } catch (error: any) {
        toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  };

  return (
     <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
                    <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">Email</Label>
                    <Input id="email" type="email" placeholder="user@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">Password</Label>
                    <Input id="password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right">Role</Label>
                    <Select onValueChange={setRole} value={role}>
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Customer">Customer</SelectItem>
                            <SelectItem value="Crew">Crew</SelectItem>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Staff">Staff</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <DialogFooter>
                <Button onClick={handleSubmit}>Create User</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

function EditUserDialog({ user, onUserUpdated }: { user: User, onUserUpdated: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
  const [role, setRole] = React.useState(user.role);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!name || !email || !role) {
        toast({ variant: "destructive", title: "Validation Error", description: "Please fill all fields."});
        return;
    }
    try {
        const response = await axios.put(`${API_URL}/users`, { id: user.id, name, email, role: role.toLowerCase() });
        if(response.data.status === 'success') {
            toast({ title: "User Updated", description: "User details have been updated."});
            onUserUpdated();
            setIsOpen(false);
        } else {
            toast({ variant: "destructive", title: "Failed to update user", description: response.data.message });
        }
    } catch (error: any) {
        toast({ variant: "destructive", title: "API Error", description: error.message });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Edit User
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Update the details for {user.name}.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name-edit" className="text-right">Name</Label>
                <Input id="name-edit" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email-edit" className="text-right">Email</Label>
                <Input id="email-edit" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role-edit" className="text-right">Role</Label>
                <Select value={role} onValueChange={(value) => setRole(value as User['role'])}>
                    <SelectTrigger className="col-span-3">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Customer">Customer</SelectItem>
                        <SelectItem value="Crew">Crew</SelectItem>
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="Staff">Staff</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <DialogFooter>
            <Button onClick={handleSubmit}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function DeleteUserDialog({ userId, onUserDeleted }: { userId: string, onUserDeleted: () => void }) {
    const { toast } = useToast();

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${API_URL}/users`, { data: { id: userId } });
            if(response.data.status === 'success') {
                toast({ title: "User Deleted", description: "The user has been successfully deleted."});
                onUserDeleted();
            } else {
                toast({ variant: "destructive", title: "Failed to delete user", description: response.data.message });
            }
        } catch (error: any) {
            toast({ variant: "destructive", title: "API Error", description: error.message });
        }
    };
    
    return (
         <AlertDialog>
            <AlertDialogTrigger asChild>
                 <DropdownMenuItem className="text-destructive" onSelect={(e) => e.preventDefault()}>
                    Delete User
                </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the user account and remove their data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
