import React, { useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import {FiTruck} from "react-icons/fi"
import liste from "./produits"


function Produit() {


    const [prod,setProd] = useState(liste)

  return (
    <>
                <div className="prod_type">
            <div className="container">
                <div className="box">
                    <div className="img_box"><img src="/4416.jpg" alt="" /></div>

                    <div className="detail">
                        <p>13 produits dispo</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img_box">
                        <img src="/Telephones-double-SIM.jpg" alt="" />
                    </div>
                   

                    <div className="detail">
                        <p>23 Produits dispo</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img_box">
                        <img src="/Amazon-Fire-Max-11-Tablet-EMBED.webp" alt="" />
                    </div>

                    <div className="detail">
                        <p>23 Produits dispo</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img_box">
                        <img src="/72f6611c323b4db28d3e40974c325c5e-image.webp" alt="" />
                    </div>

                    <div className="detail">
                        <p>12 Produits dispo</p>
                    </div>
                </div>

                <div className="box">
                    <div className="img_box"><img src="/4416.jpg" alt="" /></div>

                    <div className="detail">
                        <p>13 produits dispo</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="apropos">
            <div className="container">
                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Free Shoping</h3>
                        <p>Oder Above $1000</p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Free Shoping</h3>
                        <p>Oder Above $1000</p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Free Shoping</h3>
                        <p>Oder Above $1000</p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Free Shoping</h3>
                        <p>Oder Above $1000</p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Free Shoping</h3>
                        <p>Oder Above $1000</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="produits">
            <div className="container">
                {
                    prod.map((item)=>
                    {
                        return(
                        <div key={item.id}>
                            <div className="img_box">
                                <img src={item.image} alt="" />
                            </div>
                        </div>)
                    })
                }
                <div className="box">

                </div>
            </div>
        </div> */}
    </>
  )
}

export default Produit