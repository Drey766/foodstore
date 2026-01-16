'use client'

import { ShoppingBasket } from '@mui/icons-material'
import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.header__logo}>Looogo</div>
            <div className={styles.header__clickables}>
                <ul className={styles.header__items}>
                    <li className={styles.header__li}>About us</li>
                    <li className={styles.header__li}>Menu</li>
                    <li className={styles.header__li}>Reviews</li>
                    <li className={styles.header__li}>Blog</li>
                    <li className={styles.header__li}>Contacts</li>
                </ul>
                <div className={styles.header__buttons}>
                    <Link href='#' className={styles.header__links}><ShoppingBasket /> </Link>
                    <button>Reserve a table</button>
                </div>
            </div>
        </div>
    </div>
  )
}
