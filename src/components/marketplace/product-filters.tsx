
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function ProductFilters() {
  const categories = ["Cleaners", "Waxes & Polishes", "Tools & Accessories", "Interior Care", "Tire & Wheel Care"];
  const brands = ["Chemical Guys", "Meguiar's", "Adam's Polishes", "Griot's Garage", "Turtle Wax"];

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4">Category</h3>
          <div className="space-y-3">
            {categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={`cat-${category}`} />
                <Label htmlFor={`cat-${category}`} className="font-normal">{category}</Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Price Range</h3>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-full"
          />
           <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>$0</span>
            <span>$100+</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Brand</h3>
           <div className="space-y-3">
            {brands.map(brand => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox id={`brand-${brand}`} />
                <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
