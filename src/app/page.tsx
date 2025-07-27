import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Detailing } from "@/components/landing/detailing";
import { Marketplace } from "@/components/landing/marketplace";
import { About } from "@/components/landing/about";
import { Footer } from "@/components/landing/footer";
import { AnimatedSection } from "@/components/animated-section";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <AnimatedSection>
          <Detailing />
        </AnimatedSection>
        <AnimatedSection>
          <Marketplace />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
