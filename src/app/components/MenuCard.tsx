import React, {useState, useEffect} from 'react'
import styles from '@/app/styles/Menu.module.css'
import Image from 'next/image'
import { useCart } from '../context/CartContext';
import { MenuItem } from '../types';

interface MenuCardTypes {
    name: string,
    image: string,
    id: number,
    rating: number,
    price: number,
    item: MenuItem
}

function MenuCard({name,image,id,rating,price,item}: MenuCardTypes) {
    const { cart, addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);
          const isInBasket = cart.some(item => item.id === id);
      
          useEffect(() => {
          setIsAdded(isInBasket);
        }, [isInBasket]);
  return (
    <div 
        key={id} 
        className={styles.menuCard}
    >
        <div className={styles.menuImage}>
        <Image className={styles.menuEmoji} src={image} alt={name} width={600} height={200} />
        </div>
        <h3 className={styles.menuName}>{name}</h3>
        <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
            <span key={i} className={styles.star}>
            {i < Math.floor(rating) ? '⭐' : '☆'}
            </span>
        ))}
        </div>
        <div className={styles.menuFooter}>
        <span className={styles.price}>₹{price.toFixed(2)}</span>
        <button 
            className={styles.addBtn}
            onClick={() => addToCart(item)}
        >
            {isAdded ? 'Added' : 'Add to Cart'}
        </button>
        </div>
    </div>
  )
}

export default MenuCard