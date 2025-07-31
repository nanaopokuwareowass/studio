
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookingForm } from "@/components/shared/booking-form";
import { PlusCircle } from "lucide-react";

export function BookWashModal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Book a New Wash
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Book a New Wash</DialogTitle>
                    <DialogDescription>
                        Fill in the details below to schedule your next car wash.
                    </DialogDescription>
                </DialogHeader>
                <div className="max-h-[70vh] overflow-y-auto p-1 pr-4">
                    <BookingForm onFormSubmit={() => setIsOpen(false)} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
