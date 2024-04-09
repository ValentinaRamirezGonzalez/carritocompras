import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Guitarra from "./components/Guitarra";
import Header from "./components/Header";
import { db } from "./data/db";
import Carrito from "./components/Carrito";

function App() {
  const initialCart= ()=>{
    const localStorageCart= localStorage.getItem('carrito')
    return localStorageCart ? JSON.parse(localStorageCart):
    []
  }
  const [data] = useState(db);
  const [carrito,setCarrito]=useState(initialCart)


  useEffect(()=>{
    
      localStorage.setItem('carrito',JSON.stringify(carrito))
    
      

  },[carrito])


  function addToCart(item){

    const itemExists= carrito.findIndex(guitar=>
      guitar.id === item.id )

      if(itemExists>=0){
        if(carrito[itemExists].quantity >=5)return
        const updatedCart=[...carrito]
        updatedCart[itemExists].quantity++
        setCarrito(updatedCart)

      }else{
        item.quantity=1
        setCarrito([...carrito,item])

      }
      
  }

const removeFromCart=(id)=>{
  
  const Eliminar = carrito.filter(guitar=> guitar.id !== id)
  setCarrito(Eliminar)
}

function increaseQuantity(id){
  const updateCart = 
  carrito.map(item=>{
  if(item.id===id && item.quantity<5) {
    return{
      ...item,
      quantity: item.quantity+1

    }
  
  } 
  return item

  })
  setCarrito(updateCart)
}

function decreaseQuantity(id){
  const updateCart =
  carrito.map(item=>{
    if(item.id===id && item.quantity > 1){
      return{
        ...item,
        quantity:item.quantity-1
      }
    }
    return item
  })
  setCarrito(updateCart)
}

function cleanCart(){
setCarrito([])
}



  
   
  


  return (
    <>
      <Header 
      carrito={carrito} 
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      cleanCart={cleanCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitarra) => (
            <Guitarra
            key={guitarra.id}
            guitarra={guitarra}
            addToCart={addToCart}
            
             />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
