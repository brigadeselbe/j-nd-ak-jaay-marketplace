import Logo from "./Logo";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Logo height={48} showText={true} />
            <p className="mt-4 text-sm text-muted-foreground">
              La marketplace sénégalaise qui connecte vendeurs et acheteurs pour une économie locale forte.
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Devenir vendeur</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politique de retour</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+221783854465" className="hover:text-primary transition-colors">
                  +221 78 385 44 65
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@jendakjaay.sn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Jënd ak Jaay. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
