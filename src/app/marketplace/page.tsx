
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Marketplace } from "@/components/marketplace/marketplace";

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20">
        <Marketplace />
      </main>
      <Footer />
    </div>
  );
}
