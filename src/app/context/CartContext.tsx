'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, MenuItem, CartContextType } from '../types/index';

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartState {
  items: CartItem[];
  totalItems: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: MenuItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        totalItems: state.totalItems + 1,
      };

    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      const filteredItems = state.items.filter((item) => item.id !== action.payload);

      return {
        ...state,
        items: filteredItems,
        totalItems: state.totalItems - (itemToRemove?.quantity || 0),
      };

    case 'UPDATE_QUANTITY':
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });

      const currentItem = state.items.find((item) => item.id === action.payload.id);
      const quantityDiff = action.payload.quantity - (currentItem?.quantity || 0);

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDiff,
      };

    case 'CLEAR_CART':
      return {
        items: [],
        totalItems: 0,
      };

    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalItems: 0,
  });

  const addToCart = (item: MenuItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (itemId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotal = (): number => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        totalItems: state.totalItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
