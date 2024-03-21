import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import "../styles/card.css";
import { useLocation } from 'react-router-dom';

function Cart() {

  const location = useLocation()
  const produit = location.state.produit 
  console.log("Voici le prod",produit)


  return (
    <div>
      <Nav />
      <div className="card">
        <div className="container">
          <h2>Cart</h2>
          <br />
          <h3>{produit.categorie}</h3>
          <h5>{produit.id} {produit.titre}</h5>
          <p>{produit.prix}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
