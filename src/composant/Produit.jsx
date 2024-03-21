import React, { useState } from 'react'
import { BsCurrencyDollar, BsEye } from 'react-icons/bs'
import {FiTruck} from "react-icons/fi"
import "../styles/prod.css"
import liste from "./produits"
import {AiOutlineHeart, AiOutlineShoppingCart,AiOutlineCloseCircle} from "react-icons/ai"
import Banner from './Banner'
import { useNavigate, useRoutes } from 'react-router-dom'



function Produit() {


    const [prod,setProd] = useState(liste)
    const [detail,setDetail] = useState([])
    const [close,setClose] = useState(false)
    // const [card,setCard] = useState([])
    const history = useNavigate()


    // const addToCart = (produit) => {
    //     setCard([...card, produit]);

    //   };


      const goToCartPage = (prod) => {
        history('/card', { state: { produit: prod }  });
      };

    const afficheDetail=(produits)=>
    {
        setDetail([produits])
        setClose(true)
        console.log("Voici le prod detail",produits);
    }

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



{
    close? (
    <>
        <div className="detail_prod">
            <br />
            <div className="container">
                <button onClick={()=>setClose(false)} className='close'>x</button>

                <h2>Vous venez de selectionnez ce produit</h2>

                {
                    detail.map((item)=>
                    {
                        return(
                            <>
                                <div className="detail">
                                    <div className="img_box">
                                        <img src={`${item.image}`} alt={item.titre} />
                                    </div>
                                    
                                    <div className="info">
                                        <h3>{item.titre}</h3>
                                        <h5>{item.categorie}</h5>
                                        <p>{item.prix}</p>
                                    </div>
                                    {/* <button className='add' onClick={()=>addToCart(item)}>Ajouter au pannier</button> */}
                                    <button className='add' onClick={()=>goToCartPage(item)}>Ajouter au pannier</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </>):null
}


        <div className="produits">
            <h2>Nos meilleurs produits</h2>
            <hr className='line' />
            <br />
            <div className="container">
                {
                    prod.map((item)=>
                    {
                        return(
                            <>
                                <div className='box' key={item.id}>
                                    <div className="img_box">
                                        <img src={item.image} alt="" />
                                        <div className="icon">
                                            <li><AiOutlineShoppingCart /></li>
                                            <li onClick={()=>afficheDetail(item)}><BsEye /></li>
                                            <li><AiOutlineHeart /></li>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <p>{item.categorie}</p>
                                        <h3>{item.titre}</h3>
                                        <h4>{item.prix}</h4>
                                    </div>
                                </div>
                            </>)
                    })
                }
            </div>
        </div>

        <Banner />
    </>
  )
}

export default Produit