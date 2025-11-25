import { Search, ShoppingCart, Menu, User, Heart, Phone, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./Logo";
import ImageSearch from "./ImageSearch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo height={40} showText={true} />
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden flex-1 max-w-2xl mx-8 md:flex items-center gap-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Rechercher des produits, vendeurs..." 
                className="pl-10 w-full"
              />
            </div>
            <ImageSearch />
            <Button variant="default" size="default">
              Chercher
            </Button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-jaay-orange text-white text-xs flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button variant="outline" size="sm" className="hidden lg:flex gap-2" asChild>
              <a href="tel:+221783854465">
                <Phone className="h-4 w-4" />
                +221 78 385 44 65
              </a>
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <User className="h-4 w-4" />
              Connexion
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="pb-4 md:hidden">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Rechercher..." 
                className="pl-10 w-full"
              />
            </div>
            <ImageSearch />
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <User className="h-4 w-4" />
              Connexion
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Heart className="h-4 w-4" />
              Favoris
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
