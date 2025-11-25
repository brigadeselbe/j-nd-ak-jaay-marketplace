import { useState, useRef } from "react";
import { Camera, Upload, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function ImageSearch() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = () => {
    if (!selectedImage) return;
    
    setIsSearching(true);
    
    // Simulate image search
    setTimeout(() => {
      setIsSearching(false);
      setOpen(false);
      toast({
        title: "Recherche par image",
        description: "Fonction de recherche par image en développement. Revenez bientôt!",
      });
      setSelectedImage(null);
    }, 2000);
  };

  const handleClear = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Camera className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rechercher par image</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {!selectedImage ? (
            <div className="space-y-4">
              <div
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Cliquez pour choisir une image
                </p>
                <p className="text-xs text-muted-foreground">
                  ou glissez-déposez une image ici
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full gap-2"
                onClick={() => {
                  toast({
                    title: "Fonctionnalité à venir",
                    description: "La capture photo sera bientôt disponible",
                  });
                }}
              >
                <Camera className="h-4 w-4" />
                Prendre une photo
              </Button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileSelect}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Image sélectionnée"
                  className="w-full rounded-lg"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                  onClick={handleClear}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <Button
                className="w-full gap-2"
                onClick={handleSearch}
                disabled={isSearching}
              >
                <Search className="h-4 w-4" />
                {isSearching ? "Recherche en cours..." : "Rechercher des produits similaires"}
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={handleClear}
                disabled={isSearching}
              >
                Choisir une autre image
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
