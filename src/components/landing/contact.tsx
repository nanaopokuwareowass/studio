import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, Twitter, Facebook, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact & Support
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center">
            <Mail className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-muted-foreground">support@dtguyspro.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-muted-foreground">+1 (800) 123-4567</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MessageSquare className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">FAQs</h3>
            <Button variant="link" asChild>
              <a href="#">Visit our FAQs</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-12">
          <a href="#"><Twitter className="w-6 h-6" /></a>
          <a href="#"><Facebook className="w-6 h-6" /></a>
          <a href="#"><Instagram className="w-6 h-6" /></a>
        </div>
      </div>
    </section>
  );
}
