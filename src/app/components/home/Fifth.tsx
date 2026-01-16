import { Button } from '@mui/material'
import React from 'react'
import img1 from '@/../public/images/pexels-filipe-coelho-32247889-13640503.jpg'
import Image from 'next/image'
import './Fifth.css'

function Fifth() {
  return (
    <section className='fifth'>
        <div className="fifth__cont">
            <div className="fifth__text">
                <h5 className='fifth__heading'>Do you have any dinner plans today? Reserve your table.</h5>
                <p className="fifth__p">Make online reservations, read restaurant reviews from diners and earn points towards free meals. OpenTable is a real time online reservation.</p>
                <Button className='fifth__button'>Make reservations.</Button>
            </div>
            <div className="fifth__imgCont">
                <Image src={img1} alt='Fifth Image' className='fifth__img'/>
            </div>
        </div>
    </section>
  )
}

export default Fifth