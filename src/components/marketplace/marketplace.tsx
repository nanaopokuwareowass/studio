
import { ListFilter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProductGrid } from "@/components/marketplace/product-grid";
import { ProductFilters } from "@/components/marketplace/product-filters";
import { Input } from "@/components/ui/input";

export function Marketplace() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight">Marketplace</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Your one-stop shop for premium car care products.
          </p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-initial">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 w-full md:w-64"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="lg" className="gap-2">
                <ListFilter className="h-5 w-5" />
                <span>Sort by</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Newest
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Popularity
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Price: Low to High
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Price: High to Low
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="hidden lg:block">
          <ProductFilters />
        </div>
        <div className="lg:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
