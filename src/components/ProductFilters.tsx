import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface FilterState {
  priceRange: [number, number];
  categories: string[];
  locations: string[];
  minRating: number;
  sortBy: string;
}

interface ProductFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
}

const categories = [
  { id: "food", label: "Alimentation" },
  { id: "electronics", label: "Électronique" },
  { id: "fashion", label: "Mode" },
  { id: "crafts", label: "Artisanat" },
  { id: "general", label: "Général" },
];

const locations = [
  { id: "dakar-plateau", label: "Dakar, Plateau" },
  { id: "dakar-liberte", label: "Dakar, Liberté 6" },
  { id: "dakar-medina", label: "Dakar, Médina" },
  { id: "dakar-ouakam", label: "Dakar, Ouakam" },
  { id: "thies", label: "Thiès" },
  { id: "kaolack", label: "Kaolack" },
];

export default function ProductFilters({ filters, onFiltersChange, onReset }: ProductFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(c => c !== categoryId)
      : [...filters.categories, categoryId];
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleLocationToggle = (locationId: string) => {
    const newLocations = filters.locations.includes(locationId)
      ? filters.locations.filter(l => l !== locationId)
      : [...filters.locations, locationId];
    onFiltersChange({ ...filters, locations: newLocations });
  };

  const activeFiltersCount = 
    filters.categories.length + 
    filters.locations.length + 
    (filters.minRating > 0 ? 1 : 0) +
    (filters.sortBy !== "default" ? 1 : 0);

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtres
          {activeFiltersCount > 0 && (
            <Badge variant="secondary">{activeFiltersCount}</Badge>
          )}
        </Button>
      </div>

      {/* Filters Card */}
      <Card className={`${isExpanded ? 'block' : 'hidden'} lg:block`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Filtres</CardTitle>
            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={onReset} className="gap-2">
                <X className="h-4 w-4" />
                Réinitialiser
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sort By */}
          <div className="space-y-2">
            <Label>Trier par</Label>
            <Select 
              value={filters.sortBy} 
              onValueChange={(value) => onFiltersChange({ ...filters, sortBy: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Par défaut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Par défaut</SelectItem>
                <SelectItem value="price-asc">Prix croissant</SelectItem>
                <SelectItem value="price-desc">Prix décroissant</SelectItem>
                <SelectItem value="rating">Meilleures notes</SelectItem>
                <SelectItem value="recent">Plus récents</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <Label>Prix (FCFA)</Label>
            <Slider
              min={0}
              max={500000}
              step={5000}
              value={filters.priceRange}
              onValueChange={(value) => onFiltersChange({ ...filters, priceRange: value as [number, number] })}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{filters.priceRange[0].toLocaleString('fr-FR')} FCFA</span>
              <span>{filters.priceRange[1].toLocaleString('fr-FR')} FCFA</span>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <Label>Catégories</Label>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={filters.categories.includes(category.id)}
                    onCheckedChange={() => handleCategoryToggle(category.id)}
                  />
                  <label
                    htmlFor={category.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <Label>Localisation</Label>
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={location.id}
                    checked={filters.locations.includes(location.id)}
                    onCheckedChange={() => handleLocationToggle(location.id)}
                  />
                  <label
                    htmlFor={location.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {location.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <Label>Note minimum</Label>
            <Select
              value={filters.minRating.toString()}
              onValueChange={(value) => onFiltersChange({ ...filters, minRating: parseFloat(value) })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Toutes les notes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Toutes les notes</SelectItem>
                <SelectItem value="4">4+ étoiles</SelectItem>
                <SelectItem value="4.5">4.5+ étoiles</SelectItem>
                <SelectItem value="4.8">4.8+ étoiles</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
