'use client'
import React, { useEffect, useState } from 'react'
import './Second.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dish from './Dish'
import data from '@/app/data/data.json'

interface DataTypes {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    isPopular: boolean;
    image: string;
}

export default function Second() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const [foods, setFoods] = useState<DataTypes[]>([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        const foodData = data.items || []
        setFoods(foodData)
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (foods.length === 0) {
        return <p>No items found</p>
    }

    return (
        <div className='second'>
            <div className="second__container">
                <div className="second__heading">
                    <h2 className="second__title">Popular dishes</h2>
                </div>
                <Carousel 
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {foods.map((food) => (
                        <Dish 
                            key={food.id}
                            {...food}
                            title={food.name}
                            text={food.description}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}