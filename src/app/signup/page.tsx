
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
       <div className="hidden bg-muted lg:block relative">
        <Image
          src="https://placehold.co/1200x800.png"
          alt="A pristine car wash setup"
          data-ai-hint="car wash setup"
          fill
          className="object-cover"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
         <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-3xl font-bold">Start your journey to a cleaner car.</h2>
            <p className="mt-2 max-w-md">Create an account to unlock exclusive benefits and book your first wash in minutes.</p>
         </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
             <Link href="/" className="flex items-center justify-center gap-2 mb-4">
                <Image
                    src="/images/logo.svg"
                    alt="DT GUYS PRO"
                    width={40}
                    height={40}
                />
                <span className="text-xl font-bold">DT GUYS PRO</span>
            </Link>
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to get started
            </p>
          </div>
          <form onSubmit={handleSignup} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
             <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Create account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
