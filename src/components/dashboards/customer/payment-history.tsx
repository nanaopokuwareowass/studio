
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";

const transactionHistory = [
    { id: 'TRN-001', date: '2024-07-28', description: 'Full Detailing (BOOK-001)', amount: 75.00, method: 'Mobile Money' },
    { id: 'TRN-002', date: '2024-07-20', description: 'Microfiber Towel Set', amount: 12.00, method: 'Credit Card' },
    { id: 'TRN-003', date: '2024-07-15', description: 'Exterior Wash (BOOK-002)', amount: 35.00, method: 'Credit Card' },
    { id: 'TRN-004', date: '2024-06-20', description: 'Interior Cleaning (BOOK-003)', amount: 50.00, method: 'Mobile Money' },
];

export function PaymentHistory() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>A record of all your transactions.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Payment Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactionHistory.map(transaction => (
                            <TableRow key={transaction.id}>
                                <TableCell>{transaction.date}</TableCell>
                                <TableCell className="font-medium">{transaction.description}</TableCell>
                                <TableCell className="hidden md:table-cell">{transaction.method}</TableCell>
                                <TableCell className="text-right font-semibold">${transaction.amount.toFixed(2)}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <Download className="h-4 w-4" />
                                        <span className="sr-only">Download Receipt</span>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </CardContent>
    </Card>
  )
}
