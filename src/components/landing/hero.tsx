
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[700px] flex items-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Person driving a car"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-40"
        data-ai-hint="driver smiling"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

      <div className="container relative z-20 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start space-y-6 text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
              Earn up to
              <br />
              GHS 3,031 per
              <br />
              week by driving
              <br />
              with Bolt
            </h1>
            <p className="max-w-md text-lg text-gray-300">
              Registration is easy and free. Join our community of drivers and
              start earning.
            </p>
          </div>

          <div className="w-full max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Become a driver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div className="flex gap-2">
                    <Select defaultValue="gh">
                      <SelectTrigger className="w-1/3">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gh">+233</SelectItem>
                        <SelectItem value="ng">+234</SelectItem>
                        <SelectItem value="us">+1</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      className="flex-1"
                    />
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="accra">Accra</SelectItem>
                        <SelectItem value="kumasi">Kumasi</SelectItem>
                        <SelectItem value="takoradi">Takoradi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <Label
                      htmlFor="terms"
                      className="text-xs text-muted-foreground"
                    >
                      By signing up, you accept our Terms of Service and Privacy
                      Policy. This site is protected by reCAPTCHA and the Google
                      Privacy Policy and Terms of Service apply.
                    </Label>
                  </div>
                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white" size="lg">
                    Sign up to drive
                  </Button>
                </form>
                <p className="mt-4 text-xs text-center text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="#" className="text-green-500 hover:underline" prefetch={false}>
                    Log in
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
