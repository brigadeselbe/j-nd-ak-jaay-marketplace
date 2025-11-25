import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilters, { FilterState } from "./ProductFilters";
import boubouImage from "@/assets/boubou-traditionnel.jpg";

// Sample product data - will be replaced with real data later
const sampleProducts = [
  {
    id: "1",
    name: "Riz Brisure Premium - Sac 50kg",
    price: 18500,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop",
    seller: "Marché Sandaga",
    location: "Dakar, Plateau",
    rating: 4.8,
    reviews: 124,
    stock: 45
  },
  {
    id: "2",
    name: "Samsung Galaxy A54 - 128GB",
    price: 195000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop",
    seller: "Tech House SN",
    location: "Dakar, Liberté 6",
    rating: 4.6,
    reviews: 89,
    stock: 12
  },
  {
    id: "3",
    name: "Boubou Brodé Traditionnel",
    price: 45000,
    image: boubouImage,
    seller: "Couture Fatou",
    location: "Dakar, Médina",
    rating: 4.9,
    reviews: 67,
    stock: 8
  },
  {
    id: "4",
    name: "Panier Artisanal Décoratif",
    price: 8500,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&auto=format&fit=crop",
    seller: "Artisan du Sahel",
    location: "Thiès",
    rating: 4.7,
    reviews: 45,
    stock: 23
  },
  {
    id: "5",
    name: "Huile d'Arachide Pure 5L",
    price: 12000,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop",
    seller: "Produits du Terroir",
    location: "Kaolack",
    rating: 4.8,
    reviews: 156,
    stock: 34
  },
  {
    id: "6",
    name: "Chaussures en Cuir Homme",
    price: 32000,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop",
    seller: "Shoes Palace",
    location: "Dakar, Point E",
    rating: 4.5,
    reviews: 78,
    stock: 16
  },
  {
    id: "7",
    name: "Thiakry Traditionnel (pot 1kg)",
    price: 3500,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop",
    seller: "Délices de Maman",
    location: "Dakar, Ouakam",
    rating: 5.0,
    reviews: 203,
    stock: 50
  },
  {
    id: "8",
    name: "Laptop HP 15s - Core i5",
    price: 385000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop",
    seller: "Digital Shop",
    location: "Dakar, Almadies",
    rating: 4.7,
    reviews: 92,
    stock: 7
  }
];

export default function ProductGrid() {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 500000],
    categories: [],
    locations: [],
    minRating: 0,
    sortBy: "default"
  });

  const resetFilters = () => {
    setFilters({
      priceRange: [0, 500000],
      categories: [],
      locations: [],
      minRating: 0,
      sortBy: "default"
    });
  };

  // Filter products based on current filters
  const filteredProducts = sampleProducts.filter(product => {
    // Price filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // Category filter
    if (filters.categories.length > 0) {
      const categoryMap: Record<string, string> = {
        "food": "Alimentation",
        "electronics": "Électronique",
        "fashion": "Mode",
        "crafts": "Artisanat",
        "general": "Général"
      };
      const productCategory = Object.entries(categoryMap).find(([_, label]) => 
        product.seller.toLowerCase().includes(label.toLowerCase())
      )?.[0];
      if (!productCategory || !filters.categories.includes(productCategory)) {
        return false;
      }
    }

    // Rating filter
    if (filters.minRating > 0 && product.rating < filters.minRating) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Produits Populaires</h2>
            <p className="text-muted-foreground">
              {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters 
              filters={filters}
              onFiltersChange={setFilters}
              onReset={resetFilters}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  Aucun produit ne correspond à vos critères
                </p>
                <button
                  onClick={resetFilters}
                  className="text-primary hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
