import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartItems, updateQuantity, removeItem, loading } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.product_price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-32 pb-24">
          <div className="container mx-auto px-6">
            <div className="text-center py-24">
              <p className="text-muted-foreground">Loading cart...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif mb-12 text-center fade-in">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-24 space-y-6 fade-in">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
              <h2 className="text-2xl font-serif text-muted-foreground">Your cart is empty</h2>
              <Link to="/collections">
                <Button size="lg" className="luxury-button">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="luxury-card bg-card border border-border p-6 fade-in"
                  >
                    <div className="flex gap-6">
                      <div className="w-32 h-32 bg-muted overflow-hidden flex-shrink-0">
                        <img
                          src={item.product_image}
                          alt={item.product_name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-serif text-lg mb-1">{item.product_name}</h3>
                              <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-5 w-5" />
                            </Button>
                          </div>
                          <p className="text-lg font-medium">${item.product_price.toLocaleString()}</p>
                        </div>

                        <div className="flex items-center gap-2 mt-4">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="luxury-card bg-card border border-border p-8 space-y-6 sticky top-32 fade-in">
                  <h2 className="text-2xl font-serif">Order Summary</h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-xs text-accent">
                        Free shipping on orders over $500
                      </p>
                    )}
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-medium">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full luxury-button text-base"
                    onClick={() => {
                      if (user) {
                        navigate("/checkout");
                      } else {
                        navigate("/signin", { state: { from: { pathname: "/checkout" } } });
                      }
                    }}
                  >
                    Proceed to Checkout
                  </Button>

                  <Link to="/collections">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full luxury-button border-foreground"
                    >
                      Continue Shopping
                    </Button>
                  </Link>

                  <div className="text-xs text-muted-foreground text-center space-y-1 pt-4">
                    <p>Secure checkout with 256-bit encryption</p>
                    <p>Easy returns within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
