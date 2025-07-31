
"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function Notifications() {
  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground">
                Manage how you receive alerts and updates from us.
            </p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Notification Channels</CardTitle>
                <CardDescription>Choose your preferred communication methods.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label className="text-base">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                            Receive booking confirmations, receipts, and updates via email.
                        </p>
                    </div>
                    <Switch defaultChecked />
                </div>
                 <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label className="text-base">SMS Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                            Get important alerts like "Crew is on the way" via text message.
                        </p>
                    </div>
                    <Switch />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label className="text-base">Promotional Updates</Label>
                        <p className="text-sm text-muted-foreground">
                           Receive news about special offers and new services.
                        </p>
                    </div>
                    <Switch defaultChecked />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save Preferences</Button>
            </CardFooter>
        </Card>
    </div>
  )
}
