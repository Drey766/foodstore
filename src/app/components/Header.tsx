import styles from './header.module.css'

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
                    <button>Cart</button>
                    <button>Reserve a table</button>
                </div>
            </div>
        </div>
    </div>
  )
}
