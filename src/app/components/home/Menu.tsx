import { Button } from '@mui/material'
import React from 'react'
import data from '@/app/data/data.json'
import Dish from './Dish'
import './Menu.css'

function Menu() {
  return (
    <section className='menu'>
        <div className="menu__container">
            <h4 className="menu__title">Our regular menu</h4>
            <div className="menu__options">
                <Button>Starters</Button>
                <Button>Main Dishes</Button>
                <Button>Burgers</Button>
                <Button>Pizza</Button>
                <Button>Drinks</Button>
                <Button>Desserts</Button>
            </div>
            <div className="menu__foods">
                {data.items.map((item) => (
                    <Dish key={item.id} title={item.name} text={item.description} price={item.price} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Menu