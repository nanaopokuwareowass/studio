"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { CalendarIcon, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"


const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  location: z.string().min(5, { message: "Please enter a valid location." }),
  carType: z.string({ required_error: "Please select a car type." }),
  serviceType: z.string({ required_error: "Please select a service type." }),
  preferredDate: z.date({ required_error: "A date is required." }),
  preferredTime: z.string({ required_error: "A time is required." }),
  specialInstructions: z.string().optional(),
})

export function Hero() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      location: "",
      specialInstructions: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Booking Submitted!",
      description: "We've received your request and will be in touch shortly.",
    })
    console.log(values)
  }
  
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // You can use a geocoding service to get the address from lat/lng
          // For now, we'll just set the input to the coordinates
          form.setValue("location", `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
          toast({
            title: "Location Captured!",
            description: "Your current location has been set.",
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({
            variant: "destructive",
            title: "Location Error",
            description: "Could not retrieve your location. Please enter it manually.",
          });
        }
      );
    } else {
       toast({
        variant: "destructive",
        title: "Unsupported",
        description: "Geolocation is not supported by your browser.",
      });
    }
  };


  return (
    <section id="home" className="relative w-full pt-20 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-32">
       <div className="absolute inset-0 -z-10">
        <Image
          src="https://storage.googleapis.com/gweb-aip-images/us-central1/aip-4775438853924192256/264A7E0011C6F893707B0F3354C15A42.jpg"
          alt="Background"
          fill
          className="object-cover"
          data-ai-hint="car wash"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl !leading-tight text-primary-foreground">
              We don’t just clean, we wow!
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl max-w-2xl mx-auto lg:mx-0">
              DT GUYS PRO is your premier mobile car wash and car care business, delivering top-notch service right to your doorstep.
            </p>
             <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="#marketplace">Explore Products</a>
              </Button>
            </div>
          </div>

          <Card className="w-full max-w-lg mx-auto shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tight text-center">Book Your Wash Instantly</CardTitle>
              <CardDescription className="text-center">Fill out the form below to schedule your car wash.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+233 24 123 4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location (GPS / Address)</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input placeholder="Osu, Accra" {...field} className="pr-10" />
                          </FormControl>
                           <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                              onClick={handleGetLocation}
                            >
                              <MapPin className="h-5 w-5 text-muted-foreground" />
                              <span className="sr-only">Use current location</span>
                            </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="carType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Car Type</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a car type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sedan">Sedan</SelectItem>
                              <SelectItem value="suv">SUV</SelectItem>
                              <SelectItem value="pickup">Pickup</SelectItem>
                              <SelectItem value="hatchback">Hatchback</SelectItem>
                              <SelectItem value="van">Van</SelectItem>
                              <SelectItem value="coupe">Coupe</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="exterior">Exterior Wash</SelectItem>
                              <SelectItem value="full">Full Detailing</SelectItem>
                              <SelectItem value="interior">Interior Cleaning</SelectItem>
                              <SelectItem value="engine">Engine Wash</SelectItem>
                              <SelectItem value="wax">Wax & Polish</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Preferred Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full justify-start text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date() || date < new Date("1900-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="08:00">8:00 AM</SelectItem>
                                <SelectItem value="09:00">9:00 AM</SelectItem>
                                <SelectItem value="10:00">10:00 AM</SelectItem>
                                <SelectItem value="11:00">11:00 AM</SelectItem>
                                <SelectItem value="12:00">12:00 PM</SelectItem>
                                <SelectItem value="13:00">1:00 PM</SelectItem>
                                <SelectItem value="14:00">2:00 PM</SelectItem>
                                <SelectItem value="15:00">3:00 PM</SelectItem>
                                <SelectItem value="16:00">4:00 PM</SelectItem>
                                <SelectItem value="17:00">5:00 PM</SelectItem>
                                <SelectItem value="18:00">6:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                   </div>
                  <FormField
                    control={form.control}
                    name="specialInstructions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Instructions (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., Focus on pet hair removal"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full">Confirm Booking</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
