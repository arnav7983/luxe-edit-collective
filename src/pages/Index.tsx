import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-luxury.jpg";
import productBag from "@/assets/product-bag.jpg";
import productCoat from "@/assets/product-coat.jpg";
import productHeels from "@/assets/product-heels.jpg";
import productBlouse from "@/assets/product-blouse.jpg";

const Index = () => {
  const featuredProducts = [
    { id: "1", name: "Structured Leather Tote", price: 1250, image: productBag, category: "Bags" },
    { id: "2", name: "Cashmere Double-Breasted Coat", price: 2890, image: productCoat, category: "Outerwear" },
    { id: "3", name: "Classic Stiletto Pumps", price: 890, image: productHeels, category: "Shoes" },
    { id: "4", name: "Silk Button-Down Blouse", price: 680, image: productBlouse, category: "Tops" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 fade-in">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">
              Timeless
              <br />
              Elegance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Curated luxury fashion for those who appreciate refined simplicity and enduring style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/collections">
                <Button size="lg" className="luxury-button text-base px-8">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/stylist">
                <Button
                  variant="outline"
                  size="lg"
                  className="luxury-button text-base px-8 border-foreground hover:bg-accent hover:border-accent"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  AI Stylist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif">Curated Selection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each piece is thoughtfully selected to embody sophistication and timeless appeal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="fade-in">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/collections">
            <Button
              variant="outline"
              size="lg"
              className="luxury-button border-foreground hover:bg-accent hover:border-accent"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Loyalty Tiers Preview */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4 fade-in">
            <h2 className="text-4xl md:text-5xl font-serif">The Luxe Society</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exclusive benefits designed to elevate your luxury shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { tier: "Bronze", benefits: "5% rewards, Early access to sales" },
              { tier: "Silver", benefits: "10% rewards, Personal stylist sessions" },
              { tier: "Gold", benefits: "15% rewards, VIP events, Complimentary alterations" },
            ].map((tier, idx) => (
              <div
                key={idx}
                className="luxury-card bg-card p-8 text-center space-y-4 fade-in border border-border"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <h3 className="text-2xl font-serif">{tier.tier}</h3>
                <p className="text-sm text-muted-foreground">{tier.benefits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook CTA */}
      <section className="py-24 container mx-auto px-6">
        <Link
          to="/lookbook"
          className="block luxury-card overflow-hidden bg-muted group fade-in"
        >
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="p-12 md:p-16 space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif">
                Spring 2025
                <br />
                Lookbook
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover the season's most elegant ensembles, curated with intention and artistry
              </p>
              <Button variant="outline" className="luxury-button border-foreground hover:bg-accent hover:border-accent">
                View Lookbook
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="h-96 md:h-full bg-secondary overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center">
                <span className="text-6xl font-serif text-accent/20">Spring '25</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
