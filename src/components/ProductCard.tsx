import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  image: string;
  image2?: string;
  description: string;
  weight: string;
  details?: string;
}

export const ProductCard = ({ name, image, image2, description, weight, details }: ProductCardProps) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleTouch = () => {
    if (image2) {
      setShowSecondImage((prev) => !prev);
    }
  };

  return (
    <Card className="card-luxury overflow-hidden group relative h-full flex flex-col">
      <div className="relative flex-shrink-0">
        <div
          className="aspect-square overflow-hidden relative cursor-pointer"
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
          onClick={handleTouch}
        >
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              image2 && showSecondImage ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {image2 && (
            <img
              src={image2}
              alt={`${name} - vista alternativa`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                showSecondImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>
        
        {/* Weight badge with luxury styling */}
        <div className="absolute top-6 right-4 z-10">
          <span className="bg-white/70 backdrop-blur-md text-sm font-bold text-accent px-3 py-2 rounded-full shadow-glow border border-accent/30">
            {weight}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6 relative flex-grow flex flex-col">
        <div className="space-y-4">
          <div className="px-3">
            <h3 className="text-base font-bold text-foreground mb-2 text-left">
              {name}
            </h3>
            <div className="w-full h-px bg-gradient-premium opacity-30" />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed font-medium px-3 text-left">
            {description}
          </p>

          {details && (
            <div className="pt-3 border-t border-caramel/20 mx-3">
              <p className="text-xs text-muted-foreground/90 leading-relaxed pt-3 text-left">
                {details}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};