import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, MapPin, Star, ArrowLeft, Phone, Share2, Shield, Truck, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import boubouImage from "@/assets/boubou-traditionnel.jpg";

// Sample products data (will be replaced with API call)
const productsData = [
  {
    id: "1",
    name: "Riz Brisure Premium - Sac 50kg",
    price: 18500,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop",
    seller: "Marché Sandaga",
    location: "Dakar, Plateau",
    rating: 4.8,
    reviews: 124,
    description: "Riz brisure de qualité premium, parfait pour vos plats quotidiens. Sac de 50kg, origine locale, vérifié et certifié.",
    stock: 45,
    category: "Alimentation"
  },
  {
    id: "2",
    name: "Samsung Galaxy A54 - 128GB",
    price: 195000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop",
    seller: "Tech House SN",
    location: "Dakar, Liberté 6",
    rating: 4.6,
    reviews: 89,
    description: "Smartphone Samsung Galaxy A54 neuf, 128GB de stockage, écran Super AMOLED, garantie 1 an.",
    stock: 12,
    category: "Électronique"
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
    description: "Magnifique boubou brodé à la main avec des motifs traditionnels sénégalais. Tissu de haute qualité, confortable et élégant pour toutes occasions.",
    stock: 8,
    category: "Mode"
  },
  {
    id: "4",
    name: "Panier Artisanal Décoratif",
    price: 8500,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&auto=format&fit=crop",
    seller: "Artisan du Sahel",
    location: "Thiès",
    rating: 4.7,
    reviews: 45,
    description: "Panier artisanal tissé à la main par des artisans locaux. Idéal pour la décoration ou le rangement.",
    stock: 23,
    category: "Artisanat"
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = productsData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
            <Button onClick={() => navigate("/")}>Retour à l'accueil</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Ajouté au panier",
      description: `${quantity} x ${product.name}`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Lien copié",
      description: "Le lien du produit a été copié dans le presse-papier",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Button
                size="icon"
                variant="ghost"
                className={`absolute top-4 right-4 rounded-full bg-white/90 hover:bg-white ${
                  isFavorite ? 'text-red-500' : 'text-gray-600'
                }`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className="h-5 w-5" fill={isFavorite ? 'currentColor' : 'none'} />
              </Button>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-jaay-orange text-jaay-orange" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} avis)</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{product.location}</span>
                </div>
              </div>

              <div className="text-4xl font-bold text-primary mb-4">
                {product.price.toLocaleString('fr-FR')} FCFA
              </div>

              <p className="text-muted-foreground mb-4">
                {product.description}
              </p>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Vendu par:</span>
                <span className="font-medium">{product.seller}</span>
              </div>

              {product.stock > 0 ? (
                <Badge variant="outline" className="text-green-600 border-green-600">
                  En stock ({product.stock} disponibles)
                </Badge>
              ) : (
                <Badge variant="outline" className="text-red-600 border-red-600">
                  Rupture de stock
                </Badge>
              )}
            </div>

            <Separator />

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantité:</span>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={quantity >= product.stock}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Ajouter au panier
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="outline" size="lg" className="w-full gap-2">
                <Phone className="h-5 w-5" />
                Contacter le vendeur
              </Button>
            </div>

            <Separator />

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-jaay-green" />
                  <p className="text-xs font-medium">Paiement sécurisé</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-jaay-green" />
                  <p className="text-xs font-medium">Livraison rapide</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <RefreshCw className="h-6 w-6 mx-auto mb-2 text-jaay-green" />
                  <p className="text-xs font-medium">Retour possible</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productsData
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(p => (
                <Card
                  key={p.id}
                  className="cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm line-clamp-2 mb-2">{p.name}</h3>
                    <p className="text-primary font-bold">{p.price.toLocaleString('fr-FR')} FCFA</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
