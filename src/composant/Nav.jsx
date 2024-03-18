import React from 'react'
import {FaTruckMoving} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {BsBagCheck} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"
import {CiLogin, CiLogout} from "react-icons/ci"



function Nav() {
  return (
    <div>
        <div className="free">
            <h5><div className="icon-cars"><FaTruckMoving /></div> Livraison gratuit quand votre achat depasse 1000$</h5>
        </div>

        <div className="head-main">
            <h1 className="logo">#Boutique</h1>

            <div className="search">
                <input type="text" placeholder='Rechercher vos produit' value="" autoComplete='off'/>
                <button>Chercher</button>
            </div>

            <div className="icons">
                <div className="compte">
                    <div className="icon-user"><AiOutlineUser /></div> <p>Hello, utilisateur</p>
                </div>
                
                <div className="second-icon">
                    <a href=""><AiOutlineHeart /></a>
                    <a href=""><BsBagCheck /></a>
                </div>
            </div>
        </div>

<hr />
        <div id="header">
            <nav>
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Produit</a></li>
                    <li><a href="">Apropos</a></li>
                    <li><a href="">Aide</a></li>
                </ul>
            </nav>
            <div className="auth">
                <button className="login"><CiLogin /></button>
                {/* <button className="logout"><CiLogout /></button> */}
            </div>
        </div>

    </div>
  )
}

export default Nav