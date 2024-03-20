import React from 'react'
import { BsArrowRight, BsCurrencyDollar } from 'react-icons/bs'

function Banner() {
  return (
    <div>
        <div className="banner">
            <div className="container">
                <div className="detail">
                    <h4>Dernier technologie</h4>
                    <h3>Iphone 14 prox max 2024 tendance</h3>
                    <p>$ 1000</p>
                    <br />
                    <a href="" className='link'>Shop Now <BsArrowRight /></a>
                </div>

                <div className="img_box">
                    <img src="/4416.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner