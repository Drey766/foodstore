import { Button } from '@mui/material'
import styles from './third.module.css'

export default function Third() {
  return (
    <div className={styles.third}>
        <div className={styles.third__container}>
            <div className={styles.third__divs}></div>
            <div className={styles.third__divs}>
                <div className={styles.third__divsCont}>
                    <h3 className={styles.third__title}>We are more than a multi-service</h3>
                    <p className={styles.third__p}>Enjoy freshly prepared dishes made with quality ingredients and bold flavors. From comforting classics to chef-inspired specialties, every bite is crafted with care.</p>
                </div>
                <div className={styles.third__servicesCont}>
                    <div className={styles.third__service}>Online order</div>
                    <div className={styles.third__service}>24/7 Service</div>
                    <div className={styles.third__service}>Clean kitchen</div>
                    <div className={styles.third__service}>Pre-reservation</div>
                    <div className={styles.third__service}>Organised foodie place</div>
                    <div className={styles.third__service}>Super chefs</div>
                </div>
                <Button className={styles.third__button}>About us</Button>
            </div>
        </div>
    </div>
  )
}

