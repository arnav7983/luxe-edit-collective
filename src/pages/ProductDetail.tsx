import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Check, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import productBag from "@/assets/product-bag.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("");

  // Mock product data
  const product = {
    id: id || "1",
    name: "Structured Leather Tote",
    price: 1250,
    description:
      "Crafted from the finest Italian leather, this structured tote combines timeless elegance with modern functionality. Features a spacious interior, gold-tone hardware, and a detachable shoulder strap for versatile styling.",
    images: [productBag, productBag, productBag],
    category: "Bags",
    sizes: ["One Size"],
    details: [
      "100% Italian leather",
      "Gold-tone hardware",
      "Interior zip pocket",
      "Detachable shoulder strap",
      "Dust bag included",
    ],
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Images */}
            <div className="space-y-4 fade-in">
              <div className="aspect-[3/4] overflow-hidden bg-muted luxury-card">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden bg-muted luxury-card">
                    <img src={img} alt={`${product.name} ${idx + 2}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8 fade-in">
              <div>
                <p className="text-sm tracking-widest text-muted-foreground uppercase mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl md:text-5xl font-serif mb-4">{product.name}</h1>
                <p className="text-3xl font-light mb-6">${product.price.toLocaleString()}</p>

                {/* Reviews */}
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">(48 reviews)</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div className="space-y-3">
                  <label className="text-sm font-medium">Size</label>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        onClick={() => setSelectedSize(size)}
                        className="min-w-[60px]"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full luxury-button text-base"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full luxury-button border-foreground hover:bg-accent hover:border-accent"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>

              {/* Details */}
              <div className="border-t border-border pt-8 space-y-4">
                <h3 className="font-serif text-xl">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="border-t border-border pt-8 text-sm text-muted-foreground space-y-2">
                <p>Free shipping on orders over $500</p>
                <p>Easy returns within 30 days</p>
                <Link to="/about" className="text-accent hover:underline">
                  View full shipping & returns policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
