import { Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">The Luxe Edit</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curating timeless elegance for the modern wardrobe.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/collections" className="text-muted-foreground hover:text-accent transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections" className="text-muted-foreground hover:text-accent transition-colors">Women</Link></li>
              <li><Link to="/collections" className="text-muted-foreground hover:text-accent transition-colors">Men</Link></li>
              <li><Link to="/collections" className="text-muted-foreground hover:text-accent transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">Customer Service</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">Size Guide</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers and style inspiration.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground text-sm hover:bg-accent hover:text-primary transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 The Luxe Edit. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
