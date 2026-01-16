import React from 'react'
import reviewpic from '@/../public/images/febrian-zakaria-SiQgni-cqFg-unsplash.jpg'
import Image from 'next/image'
import './Review.css'

export default function Review() {
  return (
    <div className='review'>
        <div className="review__container">
            <p className="review__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti repellat voluptatem quas vitae, suscipit necessitatibus odit natus fuga beatae incidunt distinctio ipsum molestiae molestias amet ex! Provident sit ex facilis!</p>
            <Image src={reviewpic} alt='Review picture' className='review__pic'/>
            <span className="review__name">Savvanah Nguyen</span>
        </div>
    </div>
  )
}

