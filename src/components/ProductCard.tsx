import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  seller: string;
  location: string;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({ 
  id,
  name, 
  price, 
  image, 
  seller, 
  location, 
  rating = 4.5, 
  reviews = 0 
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <Card 
      className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-2 right-2 rounded-full bg-white/90 hover:bg-white ${
            isFavorite ? 'text-red-500' : 'text-gray-600'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart className="h-4 w-4" fill={isFavorite ? 'currentColor' : 'none'} />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-base mb-2 line-clamp-2 hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </div>

        {reviews > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-3 w-3 fill-jaay-orange text-jaay-orange" />
            <span className="text-xs font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-3 pt-3 border-t">
          <div>
            <div className="text-xl font-bold text-primary">
              {price.toLocaleString('fr-FR')} FCFA
            </div>
            <div className="text-xs text-muted-foreground">{seller}</div>
          </div>
          <Button 
            size="sm" 
            className="gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Ajouter</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
