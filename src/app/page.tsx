
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { AutoDetailing } from "@/components/landing/auto-detailing";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Marketplace } from "@/components/landing/marketplace";
import { Benefits } from "@/components/landing/benefits";
import { Testimonials } from "@/components/landing/testimonials";
import { Faq } from "@/components/landing/faq";
import { Join } from "@/components/landing/join";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <AutoDetailing />
        <HowItWorks />
        <Marketplace />
        <Benefits />
        <Testimonials />
        <Faq />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
