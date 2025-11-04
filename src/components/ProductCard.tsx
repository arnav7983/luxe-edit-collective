import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group block">
      <div className="relative overflow-hidden bg-card luxury-card">
        {/* Image Container */}
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background hover:text-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // Wishlist logic here
          }}
        >
          <Heart className="h-5 w-5" />
        </Button>

        {/* Product Info */}
        <div className="p-6 space-y-2">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">{category}</p>
          <h3 className="font-serif text-lg leading-tight group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-sm font-medium">${price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
