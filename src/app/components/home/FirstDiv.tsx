'use client'

import './FirstDiv.css'

export default function FirstDiv() {
  return (
    <div className='firstDiv'>
        <div className="firstDiv__cont">
            <div className="firstDiv__text">
                <h1 className="firstDiv__title">We serve the taste you like.</h1>
                <p className="firstDiv__p">Enjoy freshly prepared dishes made with quality ingredients and bold flavors. From comforting classics to chef-inspired specialties, every bite is crafted with care.</p>
                <div className="firstDiv__buttons">
                    <button className='firstDiv__exploreButton'>Explore Food</button>
                    <button className='firstDiv__serchButtons'>Search</button>
                </div>
            </div>
            <div className="firstDiv__foodTypesCont">
                <div className="firstDiv__foodType">
                    <span className="firstDiv__foodTypeSpan">Dishes</span>
                </div>
                <div className="firstDiv__foodType"><span className="firstDiv__foodTypeSpan">Dessert</span></div>
                <div className="firstDiv__foodType"><span className="firstDiv__foodTypeSpan">Drinks</span></div>
                <div className="firstDiv__foodType"><span className="firstDiv__foodTypeSpan">Platter</span></div>
                <div className="firstDiv__foodType"><span className="firstDiv__foodTypeSpan">Snacks</span></div>
            </div>
        </div>
    </div>
  )
}
