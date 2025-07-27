import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Smartphone, ShieldCheck, DollarSign } from "lucide-react";

export function Benefits() {
  const benefits = [
    { title: "Save Time", description: "No more waiting in line at the car wash. We come to you.", icon: <Clock className="w-10 h-10" /> },
    { title: "Book Anywhere, Anytime", description: "Use our easy-to-use app to schedule your next detail.", icon: <Smartphone className="w-10 h-10" /> },
    { title: "Guaranteed Quality Service", description: "Our professionals are trained to deliver exceptional results.", icon: <ShieldCheck className="w-10 h-10" /> },
    { title: "Affordable Pricing", description: "Get premium service without the premium price tag.", icon: <DollarSign className="w-10 h-10" /> },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          Customer Benefits
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center mt-4">
          Discover the advantages of choosing DT GUYS PRO for your car care needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
