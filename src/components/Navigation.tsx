import { useState } from "react";
import { ShoppingBag, Search, User, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const { cartCount } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/collections?search=${encodeURIComponent(searchQuery)}`;
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif tracking-tight hover:opacity-70 transition-opacity">
            The Luxe Edit
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/collections" className="text-sm tracking-wider hover:text-accent transition-colors">
              COLLECTIONS
            </Link>
            <Link to="/lookbook" className="text-sm tracking-wider hover:text-accent transition-colors">
              LOOKBOOK
            </Link>
            <Link to="/stylist" className="text-sm tracking-wider hover:text-accent transition-colors">
              AI STYLIST
            </Link>
            <Link to="/about" className="text-sm tracking-wider hover:text-accent transition-colors">
              ABOUT
            </Link>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent transition-colors">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="hover:text-accent transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-border bg-background">
          <div className="container mx-auto px-6 py-4">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button type="submit" variant="default">
                Search
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
              >
                <X className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
