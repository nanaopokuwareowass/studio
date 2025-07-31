
"use client"

import { File, MoreHorizontal, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const paymentsData = [
  { id: "PAY-001", bookingId: "BOOK-001", customer: { name: "John Doe", avatar: "https://placehold.co/100x100.png" }, date: "2024-07-28", method: "Mobile Money", amount: 75.00, status: "Paid" },
  { id: "PAY-002", bookingId: "BOOK-002", customer: { name: "Jane Smith", avatar: "https://placehold.co/100x100.png" }, date: "2024-07-28", method: "Credit Card", amount: 35.00, status: "Paid" },
  { id: "PAY-003", bookingId: "BOOK-003", customer: { name: "Mike Johnson", avatar: "https://placehold.co/100x100.png" }, date: "2024-07-29", method: "Credit Card", amount: 50.00, status: "Unpaid" },
  { id: "PAY-004", bookingId: "BOOK-004", customer: { name: "Emily Davis", avatar: "https://placehold.co/100x100.png" }, date: "2024-07-25", method: "Mobile Money", amount: 40.00, status: "Failed" },
  { id: "PAY-005", bookingId: "BOOK-005", customer: { name: "Robert Zane", avatar: "https://placehold.co/100x100.png" }, date: "2024-08-02", method: "Unspecified", amount: 75.00, status: "Unpaid" },
];

export function PaymentManagement() {
  const [activeTab, setActiveTab] = React.useState("all");

  const filteredPayments = paymentsData.filter(payment => {
    if (activeTab === 'all') return true;
    return payment.status.toLowerCase() === activeTab;
  });

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Paid": return "secondary";
      case "Unpaid": return "outline";
      case "Failed": return "destructive";
      default: return "default";
    }
  };

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Payment Management</CardTitle>
          <CardDescription>Track and manage all transactions.</CardDescription>
        </div>
        <Button variant="outline" className="gap-2">
            <File className="h-4 w-4" />
            Export
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <TabsList className="grid w-full grid-cols-4 sm:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="paid">Paid</TabsTrigger>
              <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
            </TabsList>
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by customer or ID..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
              />
            </div>
          </div>
          <TabsContent value={activeTab}>
            <div className="mt-4 rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden md:table-cell">Booking ID</TableHead>
                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                    <TableHead className="hidden md:table-cell">Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={payment.customer.avatar} alt={payment.customer.name} data-ai-hint="person avatar" />
                            <AvatarFallback>{payment.customer.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{payment.customer.name}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground">{payment.bookingId}</TableCell>
                      <TableCell className="hidden sm:table-cell text-muted-foreground">{payment.date}</TableCell>
                      <TableCell className="hidden md:table-cell">{payment.method}</TableCell>
                      <TableCell className="text-right font-medium">${payment.amount.toFixed(2)}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant={getStatusVariant(payment.status)}>{payment.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Booking</DropdownMenuItem>
                            <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
