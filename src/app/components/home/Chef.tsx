import React from 'react'
import styles from './chef.module.css'
import chefPic from '@/../public/images/louis-hansel-v3OlBE6-fhU-unsplash.jpg'
import Image from 'next/image'

export default function Chef() {
  return (
    <div className={styles.chef}>
        <div className={styles.chef__container}>
            <Image src={chefPic} alt='Chefs picture' className={styles.chef__picture} />
            <span className={styles.chef__name}>Peter Dostovski</span>
        </div>
    </div>
  )
}

