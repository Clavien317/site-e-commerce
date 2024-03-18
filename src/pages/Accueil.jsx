import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import "../styles/accueil.css"
import Produit from '../composant/Produit'


function Accueil() {
  return (
    <div className='accueil'>
        <div className="top-collect">
            <div className="container">
                <div className="section1">
                    <h2>Voici les meilleurs collection de l'annees 2023</h2>
                    <br />
                    <a href="" className='link'>Shop now <BsArrowRight /></a>
                </div>

                <div className="img_box">
                    <img src="/BWKZP7B5QJQEAI2TPX6ZH3UO2A.jpg" alt="" />
                </div>
            </div>
        </div>

        <Produit />
    </div>
  )
}

export default Accueil