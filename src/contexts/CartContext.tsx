import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCartItems, getCartCount, addToCart, updateCartItemQuantity, removeFromCart, CartItem } from '@/lib/cart';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  loading: boolean;
  refreshCart: () => Promise<void>;
  addItemToCart: (product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    size?: string;
  }) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const refreshCart = async () => {
    try {
      const items = await getCartItems();
      const count = await getCartCount();
      setCartItems(items);
      setCartCount(count);
    } catch (error) {
      console.error('Error refreshing cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addItemToCart = async (product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    size?: string;
  }) => {
    try {
      await addToCart(product);
      await refreshCart();
      toast({
        title: 'Added to cart',
        description: `${product.name} has been added to your cart`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add item to cart',
        variant: 'destructive',
      });
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    try {
      await updateCartItemQuantity(itemId, quantity);
      await refreshCart();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update quantity',
        variant: 'destructive',
      });
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      await removeFromCart(itemId);
      await refreshCart();
      toast({
        title: 'Removed from cart',
        description: 'Item has been removed from your cart',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to remove item',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        loading,
        refreshCart,
        addItemToCart,
        updateQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
