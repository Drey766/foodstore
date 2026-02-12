import { StaticImageData } from "next/image";

export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  category?: string;
  price: number;
  rating: number;
  image: StaticImageData;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  totalItems: number;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export interface Chef {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
}

export interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}
