
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, CreditCard, Palette, User, Clock, Check } from "lucide-react";
import Image from "next/image";

export function SettingsPage() {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your business settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="time-slots">Time Slots</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment-gateways">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Update your company information and branding.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="DT GUYS PRO" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="logo">Company Logo</Label>
                <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-md border p-1">
                        <Image src="/logo-placeholder.svg" fill alt="Current Logo" className="object-contain" data-ai-hint="company logo"/>
                    </div>
                    <Input id="logo" type="file" className="max-w-xs" />
                </div>
              </div>
              <div className="space-y-4">
                <Label className="flex items-center gap-2"><Palette className="h-5 w-5"/> Theme Colors</Label>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="primary-color">Primary</Label>
                        <Input id="primary-color" type="color" defaultValue="#1E293B" className="p-1 h-10"/>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="background-color">Background</Label>
                        <Input id="background-color" type="color" defaultValue="#FFFFFF" className="p-1 h-10"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="accent-color">Accent</Label>
                        <Input id="accent-color" type="color" defaultValue="#F1F5F9" className="p-1 h-10"/>
                    </div>
                 </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="time-slots">
           <Card>
            <CardHeader>
              <CardTitle>Working Hours & Time Slots</CardTitle>
              <CardDescription>
                Set your business availability for bookings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {weekDays.map(day => (
                    <div key={day} className="flex flex-col md:flex-row items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                           <Switch id={`switch-${day}`} defaultChecked={day !== 'Sunday'} />
                           <Label htmlFor={`switch-${day}`} className="text-lg font-medium">{day}</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Select defaultValue="08:00">
                                <SelectTrigger className="w-32">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="08:00">8:00 AM</SelectItem>
                                    <SelectItem value="09:00">9:00 AM</SelectItem>
                                </SelectContent>
                            </Select>
                            <span>-</span>
                             <Select defaultValue="18:00">
                                <SelectTrigger className="w-32">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="17:00">5:00 PM</SelectItem>
                                    <SelectItem value="18:00">6:00 PM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                ))}
                 <div className="space-y-2 pt-4">
                    <Label htmlFor="slot-duration">Booking Slot Duration (minutes)</Label>
                    <Input id="slot-duration" type="number" defaultValue={30} className="max-w-xs" />
                </div>
            </CardContent>
            <CardFooter>
              <Button>Save Time Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
           <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage how you and your customers get notified.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <h3 className="font-medium">Customer Notifications</h3>
                        <p className="text-sm text-muted-foreground">Booking confirmations, reminders, etc.</p>
                    </div>
                     <div className="flex items-center space-x-4">
                        <Label htmlFor="email-customer" className="flex items-center gap-2 cursor-pointer"><Switch id="email-customer" defaultChecked /> Email</Label>
                        <Label htmlFor="sms-customer" className="flex items-center gap-2 cursor-pointer"><Switch id="sms-customer" /> SMS</Label>
                    </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <h3 className="font-medium">Admin Notifications</h3>
                        <p className="text-sm text-muted-foreground">New bookings, cancellations, etc.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Label htmlFor="email-admin" className="flex items-center gap-2 cursor-pointer"><Switch id="email-admin" defaultChecked /> Email</Label>
                        <Label htmlFor="sms-admin" className="flex items-center gap-2 cursor-pointer"><Switch id="sms-admin" defaultChecked /> Push</Label>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
              <Button>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment-gateways">
            <Card>
                <CardHeader>
                <CardTitle>Payment Gateways</CardTitle>
                <CardDescription>
                    Configure how you accept online payments.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-start gap-6 rounded-lg border p-4">
                        <div className="relative h-12 w-24">
                           <Image src="/stripe-logo.svg" fill alt="Stripe" className="object-contain" data-ai-hint="Stripe logo"/>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-semibold text-lg">Stripe</h3>
                            <p className="text-sm text-muted-foreground">Accept card payments globally.</p>
                            <div className="mt-4 space-y-2">
                                <Label htmlFor="stripe-key">API Key</Label>
                                <Input id="stripe-key" placeholder="sk_test_..."/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                             <Switch id="stripe-switch" defaultChecked />
                             <Label htmlFor="stripe-switch">Enable</Label>
                        </div>
                    </div>
                     <div className="flex items-start gap-6 rounded-lg border p-4">
                        <div className="relative h-12 w-24">
                           <Image src="/paystack-logo.svg" fill alt="Paystack" className="object-contain" data-ai-hint="Paystack logo"/>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-semibold text-lg">Paystack</h3>
                            <p className="text-sm text-muted-foreground">Accept payments in Africa.</p>
                             <div className="mt-4 space-y-2">
                                <Label htmlFor="paystack-key">API Key</Label>
                                <Input id="paystack-key" placeholder="pk_test_..."/>
                            </div>
                        </div>
                         <div className="flex flex-col items-center gap-2">
                             <Switch id="paystack-switch" />
                             <Label htmlFor="paystack-switch">Enable</Label>
                        </div>
                    </div>
                </CardContent>
                 <CardFooter>
                    <Button>Save Payment Settings</Button>
                </CardFooter>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
