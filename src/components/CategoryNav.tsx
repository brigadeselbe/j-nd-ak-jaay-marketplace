import { Utensils, Smartphone, Shirt, Palette, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Alimentation", icon: Utensils, color: "text-jaay-green" },
  { name: "Électronique", icon: Smartphone, color: "text-jaay-orange" },
  { name: "Mode", icon: Shirt, color: "text-jaay-green" },
  { name: "Artisanat", icon: Palette, color: "text-jaay-orange" },
  { name: "Général", icon: Package, color: "text-jaay-green" },
];

export default function CategoryNav() {
  return (
    <div className="border-b bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="ghost"
                size="sm"
                className="flex-shrink-0 gap-2 hover:bg-accent"
              >
                <Icon className={`h-4 w-4 ${category.color}`} />
                {category.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
