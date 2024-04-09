import React from 'react'
import Carrito from './Carrito'

function Header({carrito,removeFromCart,increaseQuantity,decreaseQuantity,cleanCart}) {
  return (
    <header className="py-5 header">
    <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
                <a href="index.html">
                    <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                </a>
            </div>

            <Carrito 
            carrito={carrito}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            cleanCart={cleanCart}
            
            />

        </div>
    </div>
</header>
  )
}

export default Header
