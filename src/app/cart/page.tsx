'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const CartPage: React.FC = () => {
  const { cart, totalItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotal } = useCart();

  const handleIncrement = (itemId: number, currentQuantity: number): void => {
    updateQuantity(itemId, currentQuantity + 1);
  };

  const handleDecrement = (itemId: number, currentQuantity: number): void => {
    if (currentQuantity > 1) {
      updateQuantity(itemId, currentQuantity - 1);
    } else {
      removeFromCart(itemId);
    }
  };

  const handleRemove = (itemId: number): void => {
    removeFromCart(itemId);
  };

  const subtotal = getTotal();
  const tax = subtotal * 0.1; // 10% tax
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + tax + deliveryFee;

  return (
    <>
      <Header />
      <main className={styles.cartPage}>
        <div className="container">
          {/* Page Header */}
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Shopping Cart</h1>
            <p className={styles.pageSubtitle}>
              {totalItems > 0 ? `You have ${totalItems} ${totalItems === 1 ? 'item' : 'items'} in your cart` : 'Your cart is empty'}
            </p>
          </div>

          {cart.length === 0 ? (
            /* Empty Cart State */
            <div className={styles.emptyCart}>
              <div className={styles.emptyCartIcon}>🛒</div>
              <h2 className={styles.emptyCartTitle}>Your cart is empty</h2>
              <p className={styles.emptyCartText}>
                Looks like you haven't added any items to your cart yet. Start exploring our delicious menu!
              </p>
              <Link href="/" className={styles.continueShoppingBtn}>
                Browse Menu
              </Link>
            </div>
          ) : (
            /* Cart with Items */
            <div className={styles.cartContent}>
              <div className={styles.cartLeft}>
                {/* Cart Items */}
                <div className={styles.cartItems}>
                  {cart.map((item, index) => (
                    <div 
                      key={item.id} 
                      className={styles.cartItem}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className={styles.itemImage}>
                        <Image className={styles.itemEmoji} src={item.image} alt={item.name} height={100} width={200}/>
                      </div>
                      
                      <div className={styles.itemDetails}>
                        <h3 className={styles.itemName}>{item.name}</h3>
                        {item.description && (
                          <p className={styles.itemDescription}>{item.description}</p>
                        )}
                        <span className={styles.itemPrice}>₹{item.price.toFixed(2)}</span>
                      </div>

                      <div className={styles.itemActions}>
                        <div className={styles.quantityControl}>
                          <button 
                            className={styles.quantityBtn}
                            onClick={() => handleDecrement(item.id, item.quantity)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className={styles.quantity}>{item.quantity}</span>
                          <button 
                            className={styles.quantityBtn}
                            onClick={() => handleIncrement(item.id, item.quantity)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <div className={styles.itemTotal}>
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </div>

                        <button 
                          className={styles.removeBtn}
                          onClick={() => handleRemove(item.id)}
                          aria-label="Remove item"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.cartActions}>
                  <Link href="/" className={styles.continueShopping}>
                    ← Continue Shopping
                  </Link>
                  <button 
                    className={styles.clearCart}
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className={styles.cartRight}>
                <div className={styles.orderSummary}>
                  <h2 className={styles.summaryTitle}>Order Summary</h2>
                  
                  <div className={styles.summaryDetails}>
                    <div className={styles.summaryRow}>
                      <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span>Tax (10%)</span>
                      <span>₹{tax.toFixed(2)}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span>Delivery Fee</span>
                      <span>₹{deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className={styles.summaryDivider}></div>
                    <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className={styles.checkoutBtn}>
                    Proceed to Checkout
                  </button>

                  <div className={styles.secureCheckout}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Secure Checkout</span>
                  </div>

                  {/* Promo Code */}
                  <div className={styles.promoCode}>
                    <input 
                      type="text" 
                      placeholder="Enter promo code"
                      className={styles.promoInput}
                    />
                    <button className={styles.promoBtn}>Apply</button>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className={styles.deliveryInfo}>
                  <h3 className={styles.deliveryTitle}>Delivery Information</h3>
                  <div className={styles.deliveryItem}>
                    <span className={styles.deliveryIcon}>🚚</span>
                    <div>
                      <p className={styles.deliveryLabel}>Free delivery</p>
                      <p className={styles.deliveryValue}>On orders above ₹500</p>
                    </div>
                  </div>
                  <div className={styles.deliveryItem}>
                    <span className={styles.deliveryIcon}>⏱️</span>
                    <div>
                      <p className={styles.deliveryLabel}>Delivery time</p>
                      <p className={styles.deliveryValue}>30-45 minutes</p>
                    </div>
                  </div>
                  <div className={styles.deliveryItem}>
                    <span className={styles.deliveryIcon}>💳</span>
                    <div>
                      <p className={styles.deliveryLabel}>Payment methods</p>
                      <p className={styles.deliveryValue}>Cash, Card, UPI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
