import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm mb-4">Get In Touch</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact & Support
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
            <Mail className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-muted-foreground mt-1">support@dtguyspro.com</p>
             <Button variant="link" asChild className="mt-2">
              <a href="mailto:support@dtguyspro.com">Send Email</a>
            </Button>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
            <Phone className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-muted-foreground mt-1">+1 (800) 123-4567</p>
             <Button variant="link" asChild className="mt-2">
              <a href="tel:+18001234567">Call Us</a>
            </Button>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
            <MessageSquare className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-semibold">FAQs</h3>
            <p className="text-muted-foreground mt-1">Find answers quickly.</p>
            <Button variant="link" asChild className="mt-2">
              <a href="#">Visit our FAQs</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}