import React from 'react'
import Carousel from 'react-multi-carousel'

export default function CarouselComp() {
    const responsive = {
        superLargeDesktop : {
            breakpoint: {max:4000, min:3000},
            items: 5
        },
        desktop: {
            breakpoint: {max:3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min:0},
            items: 1
        }
    }
  return (
    <div>
        <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true}
        infinite={true}
        
        >
            <div style={{height:'100px', width:'100px', background: "red"}}>Itme1</div>
            <div style={{height:'100px', width:'100px', background: "blue"}}>Item2</div>
            <div style={{height:'100px', width:'100px', background: "yellow"}}>Item3</div>
            <div style={{height:'100px', width:'100px', background: "green"}}>Item4</div>
        </Carousel>
    </div>
  )
}

