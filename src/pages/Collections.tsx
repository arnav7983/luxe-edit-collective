import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productBag from "@/assets/product-bag.jpg";
import productCoat from "@/assets/product-coat.jpg";
import productHeels from "@/assets/product-heels.jpg";
import productBlouse from "@/assets/product-blouse.jpg";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Clothing", "Bags", "Shoes", "Accessories"];

  const allProducts = [
    { id: "1", name: "Structured Leather Tote", price: 1250, image: productBag, category: "Bags" },
    { id: "2", name: "Cashmere Double-Breasted Coat", price: 2890, image: productCoat, category: "Clothing" },
    { id: "3", name: "Classic Stiletto Pumps", price: 890, image: productHeels, category: "Shoes" },
    { id: "4", name: "Silk Button-Down Blouse", price: 680, image: productBlouse, category: "Clothing" },
    { id: "5", name: "Leather Crossbody Bag", price: 980, image: productBag, category: "Bags" },
    { id: "6", name: "Wool Blend Trench Coat", price: 2450, image: productCoat, category: "Clothing" },
    { id: "7", name: "Pointed-Toe Ankle Boots", price: 1150, image: productHeels, category: "Shoes" },
    { id: "8", name: "Cashmere Sweater", price: 890, image: productBlouse, category: "Clothing" },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Collections</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Timeless pieces designed to elevate your wardrobe with effortless sophistication
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="luxury-button"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="fade-in">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
