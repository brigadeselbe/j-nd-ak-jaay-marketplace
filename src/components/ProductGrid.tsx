import ProductCard from "./ProductCard";

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
    reviews: 124
  },
  {
    id: "2",
    name: "Samsung Galaxy A54 - 128GB",
    price: 195000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop",
    seller: "Tech House SN",
    location: "Dakar, Liberté 6",
    rating: 4.6,
    reviews: 89
  },
  {
    id: "3",
    name: "Boubou Brodé Traditionnel",
    price: 45000,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop",
    seller: "Couture Fatou",
    location: "Dakar, Médina",
    rating: 4.9,
    reviews: 67
  },
  {
    id: "4",
    name: "Panier Artisanal Décoratif",
    price: 8500,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&auto=format&fit=crop",
    seller: "Artisan du Sahel",
    location: "Thiès",
    rating: 4.7,
    reviews: 45
  },
  {
    id: "5",
    name: "Huile d'Arachide Pure 5L",
    price: 12000,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop",
    seller: "Produits du Terroir",
    location: "Kaolack",
    rating: 4.8,
    reviews: 156
  },
  {
    id: "6",
    name: "Chaussures en Cuir Homme",
    price: 32000,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop",
    seller: "Shoes Palace",
    location: "Dakar, Point E",
    rating: 4.5,
    reviews: 78
  },
  {
    id: "7",
    name: "Thiakry Traditionnel (pot 1kg)",
    price: 3500,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop",
    seller: "Délices de Maman",
    location: "Dakar, Ouakam",
    rating: 5.0,
    reviews: 203
  },
  {
    id: "8",
    name: "Laptop HP 15s - Core i5",
    price: 385000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop",
    seller: "Digital Shop",
    location: "Dakar, Almadies",
    rating: 4.7,
    reviews: 92
  }
];

export default function ProductGrid() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Produits Populaires</h2>
            <p className="text-muted-foreground">Découvrez les meilleures offres du moment</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
