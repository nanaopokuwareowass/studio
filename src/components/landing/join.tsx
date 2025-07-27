import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function Join() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Partner With Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join as a Detailer or Vendor
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Are you a professional auto detailer or a vendor of quality car care products? Join our network and grow your business with DT GUYS PRO. We provide the platform to connect you with customers who need your services and products.
            </p>
            <Button size="lg" className="mt-4">
               <a href="#contact">Get Started</a>
            </Button>
          </div>
          <div className="relative w-full h-80 lg:h-96">
             <Image
              src="https://storage.googleapis.com/gweb-aip-images/us-central1/aip-4775438853924192256/9A293AA236872583F8D8A70129B72F41.jpg"
              fill
              alt="Join Us"
              className="rounded-xl object-cover shadow-2xl"
              data-ai-hint="car wash team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
