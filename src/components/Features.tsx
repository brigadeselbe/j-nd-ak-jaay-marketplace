import { Shield, Truck, CreditCard, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Paiement Sécurisé",
    description: "Wave, Orange Money, Free Money - Transactions 100% sécurisées",
    color: "text-jaay-green"
  },
  {
    icon: Truck,
    title: "Livraison Rapide",
    description: "Livraison dans toutes les régions du Sénégal",
    color: "text-jaay-orange"
  },
  {
    icon: CreditCard,
    title: "Plusieurs Moyens de Paiement",
    description: "Mobile Money, cartes bancaires, et plus encore",
    color: "text-jaay-green"
  },
  {
    icon: Headphones,
    title: "Support Client 24/7",
    description: "Une équipe dédiée pour vous accompagner",
    color: "text-jaay-orange"
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Pourquoi Choisir Jënd ak Jaay?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une plateforme moderne, sûre et adaptée aux besoins du marché sénégalais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4 ${feature.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
