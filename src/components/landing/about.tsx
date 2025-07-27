import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Our Philosophy
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              At DT GUYS PRO, we believe a clean car is a happy car. Our mission is to provide unparalleled mobile detailing services and premium car care products that deliver a "wow" experience every time. We are committed to convenience, quality, and eco-friendly practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}