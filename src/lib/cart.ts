import { supabase, getSessionId } from './supabase';

export interface CartItem {
  id: string;
  session_id: string;
  product_id: string;
  product_name: string;
  product_price: number;
  product_image: string;
  product_category: string;
  size: string;
  quantity: number;
  created_at: string;
  updated_at: string;
}

export const getCartItems = async (): Promise<CartItem[]> => {
  const sessionId = getSessionId();
  const { data, error } = await supabase
    .from('cart_items')
    .select('*')
    .eq('session_id', sessionId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching cart items:', error);
    return [];
  }

  return data || [];
};

export const getCartCount = async (): Promise<number> => {
  const items = await getCartItems();
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

export const addToCart = async (product: {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  size?: string;
}) => {
  const sessionId = getSessionId();

  const existingItems = await getCartItems();
  const existingItem = existingItems.find(
    (item) => item.product_id === product.id && item.size === (product.size || 'One Size')
  );

  if (existingItem) {
    const { error } = await supabase
      .from('cart_items')
      .update({
        quantity: existingItem.quantity + 1,
        updated_at: new Date().toISOString(),
      })
      .eq('id', existingItem.id);

    if (error) {
      console.error('Error updating cart item:', error);
      throw error;
    }
  } else {
    const { error } = await supabase.from('cart_items').insert({
      session_id: sessionId,
      product_id: product.id,
      product_name: product.name,
      product_price: product.price,
      product_image: product.image,
      product_category: product.category,
      size: product.size || 'One Size',
      quantity: 1,
    });

    if (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  }
};

export const updateCartItemQuantity = async (itemId: string, quantity: number) => {
  if (quantity <= 0) {
    return removeFromCart(itemId);
  }

  const { error } = await supabase
    .from('cart_items')
    .update({
      quantity,
      updated_at: new Date().toISOString(),
    })
    .eq('id', itemId);

  if (error) {
    console.error('Error updating quantity:', error);
    throw error;
  }
};

export const removeFromCart = async (itemId: string) => {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('id', itemId);

  if (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

export const clearCart = async () => {
  const sessionId = getSessionId();
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('session_id', sessionId);

  if (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};
