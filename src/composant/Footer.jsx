import React from 'react'
import "../styles/footer.css"


function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <div className="section">
                    <h1>#Boutique</h1>
                    {/* <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Corrupti aliquam amet libero voluptas non voluptatum 
                        reprehenderit aspernatur atque. Excepturi et ipsum quod vero
                         neque veritatis nostrum obcaecati corrupti facere enim?
                    </p> */}
                    <ul>
                        <li>FB</li>
                        <li>Insta</li>
                        <li>Twiter</li>
                        <li>Youtube</li>
                    </ul>
                </div>

                <div className="section">
                    <h1>Mon compte</h1>
                    <ul>
                        <li>Compte</li>
                        <li>Ordre</li>
                        <li>Cart</li>
                        <li>Shoping</li>
                    </ul>
                </div>

                <div className="section">
                    <h1>Page</h1>
                    <ul>
                        <li>Accueil</li>
                        <li>Produit</li>
                        <li>Apropos</li>
                        <li>Aide</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer