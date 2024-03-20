import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'

function Banner() {
  return (
    <div>
        <div className="banner">
            <div className="container">
                <div className="detail">
                    <h4>Dernier technologie</h4>
                    <p><BsCurrencyDollar /></p>
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