import Image from 'next/image'
import './Dish.css'
import pic1 from '@/../public/images/pexels-filipe-coelho-32247889-13640503(1).jpg'
import { Button } from '@mui/material'
import { Star } from '@mui/icons-material'

interface DishProps {
    title: string,
    text: string,
    price: any
}

export default function Dish({title, text, price}: DishProps) {
    

  return (
    <div className='dish'>
        <div className="dish__container">
            <Image src={pic1} alt='dish picture' className='dish__pic' />
            <div className="dish__text">
                <span className='dish__name'>{title}</span>
                <span className="dish__rating"><Star /> <Star /> <Star /> <Star /> </span>
                <p className="dish__p">{text}.</p>
            </div>
            <div className="dish__cartOpts">
                <span className="dish__price">${price}</span>
                <Button>Add to cart</Button>
            </div>
        </div>
    </div>
  )
}

