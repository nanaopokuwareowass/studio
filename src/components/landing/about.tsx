import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Mission</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About DT GUYS PRO
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mission is to provide a convenient, high-quality car care experience that leaves our customers amazed. We believe in attention to detail and professionalism, all delivered right to your location.
            </p>
            <p className="text-xl font-semibold text-primary">
              We don’t just clean, we wow!
            </p>
          </div>
          <div className="grid gap-6">
            <Card className="shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Rocket className="w-8 h-8 text-primary" />
                <CardTitle>Convenience</CardTitle>
              </CardHeader>
              <CardContent>
                We are a mobile-based service, meaning we come to you wherever you are.
              </CardContent>
            </Card>
            <Card className="shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <Sparkles className="w-8 h-8 text-primary" />
                <CardTitle>Attention to Detail</CardTitle>
              </CardHeader>
              <CardContent>
                Our team is trained to provide a meticulous clean every time.
              </CardContent>
            </Card>
            <Card className="shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="w-8 h-8 text-primary" />
                <CardTitle>Professionalism</CardTitle>
              </CardHeader>
              <CardContent>
                We pride ourselves on our professional and courteous service.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
