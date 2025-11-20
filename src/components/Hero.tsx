import { Button } from "@/components/ui/button";
import { ArrowRight, Store, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-jaay-green via-jaay-green to-jaay-orange py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-jaay-orange rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Achetez et Vendez Localement au Sénégal
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            La marketplace sénégalaise qui connecte vendeurs et acheteurs. 
            Découvrez des produits locaux de qualité, soutenez l'économie locale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-jaay-green hover:bg-white/90 font-semibold gap-2 shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Commencer à acheter
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold gap-2"
            >
              <Store className="h-5 w-5" />
              Devenir vendeur
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
              <div className="text-sm text-white/80">Vendeurs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">10k+</div>
              <div className="text-sm text-white/80">Produits</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">25k+</div>
              <div className="text-sm text-white/80">Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">14</div>
              <div className="text-sm text-white/80">Régions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
