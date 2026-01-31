import React from 'react'
import styles from '../styles/DishCard.module.css'
import { useCart } from '../context/CartContext'
import { MenuItem } from '../types'


export interface DishCardProps {
  id: number;
  name: string;
  description?: string;
  category?: string;
  price: number;
  rating: number;
  image: string;
  food: MenuItem
}


export default function DishCard({description,image,name,rating,price,food,id}: DishCardProps) {
    const { addToCart } = useCart();
    const handleAddToCart = (dish: MenuItem): void => {
        addToCart(dish);
      };
    
  return (
    <div>
        <div 
              className={styles.dishCard}
            >
              <div className={styles.dishImage}>
                <span className={styles.dishEmoji}>{image}</span>
              </div>
              <h3 className={styles.dishName}>{name}</h3>
              <p className={styles.dishDescription}>{description}</p>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>
                    {i < Math.floor(rating) ? '⭐' : '☆'}
                  </span>
                ))}
              </div>
              <div className={styles.dishFooter}>
                <span className={styles.price}>₹{price.toFixed(2)}</span>
                <button 
                  className={styles.addBtn}
                  onClick={() => handleAddToCart(food)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
    </div>
  )
}

