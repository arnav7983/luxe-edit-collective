import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import lookbookHero from "@/assets/lookbook-hero.jpg";
import productBag from "@/assets/product-bag.jpg";
import productCoat from "@/assets/product-coat.jpg";
import productHeels from "@/assets/product-heels.jpg";
import productBlouse from "@/assets/product-blouse.jpg";

const Lookbook = () => {
  const lookbookImages = [
    { src: lookbookHero, title: "Essential Black", description: "Classic elegance reimagined" },
    { src: productCoat, title: "Ivory Dreams", description: "Soft sophistication" },
    { src: productBlouse, title: "Statement Jewelry", description: "Golden accents" },
    { src: productBag, title: "Leather Luxe", description: "Timeless accessories" },
    { src: productHeels, title: "Elevated Basics", description: "Foundation pieces" },
    { src: lookbookHero, title: "Evening Edit", description: "After-hours elegance" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-6 fade-in">
            <h1 className="text-5xl md:text-7xl font-serif">Spring 2025 Lookbook</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A curated collection celebrating the art of refined minimalism. Each ensemble is
              thoughtfully composed to embody timeless elegance and modern sensibility.
            </p>
          </div>

          {/* Lookbook Grid */}
          <div className="space-y-24">
            {lookbookImages.map((item, idx) => (
              <div
                key={idx}
                className={`grid md:grid-cols-2 gap-8 items-center fade-in ${
                  idx % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="luxury-card overflow-hidden bg-muted">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`space-y-4 ${
                    idx % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  <div className="inline-block px-4 py-1 bg-accent/10 text-accent text-xs tracking-widest uppercase">
                    Look {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif">{item.title}</h2>
                  <p className="text-lg text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-24 space-y-8 fade-in">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-4xl font-serif">Discover Your Style</h2>
              <p className="text-muted-foreground">
                Let our AI fashion stylist help you curate the perfect wardrobe with personalized
                recommendations tailored to your unique aesthetic.
              </p>
            </div>
            <a href="/stylist">
              <button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-accent hover:text-primary transition-colors luxury-button text-base">
                Try AI Stylist
              </button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Lookbook;
