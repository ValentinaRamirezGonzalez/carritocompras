import { useMemo } from "react"


function Carrito({carrito,removeFromCart,increaseQuantity,decreaseQuantity,cleanCart}) {

    const isEmpty = useMemo(()=> carrito.length === 0, [carrito])
    const carritoTotal= useMemo(()=>
        carrito.reduce((total,item)=>
            total+(item.quantity * item.price),0
        ))
      
        

    

  return (
    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
    <div 
        className="carrito"
    >
        <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

        <div id="carrito" className="bg-white p-3">
            
            {isEmpty ? (<p className="text-center">El carrito esta vacio </p>):(
                <>
                <table className="w-100 table">
                <thead>
                    <tr>
                        <th>imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map(guitar=>(
                         <tr key={guitar.id}>
                         <td>
                             <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra"/>
                         </td>
                         <td>{guitar.name}</td>
                         <td className="fw-bold">
                                 {guitar.price}
                         </td>
                         <td className="flex align-items-start gap-4">
                             <button
                                 type="button"
                                 className="btn btn-dark"
                                 onClick={()=>decreaseQuantity(guitar.id)}
                             >
                                 -
                             </button>
                                 {guitar.quantity}
                             <button
                                 type="button"
                                 className="btn btn-dark"
                                 onClick={()=>increaseQuantity(guitar.id)}
                             
                                 
                             >
                                 +
                             </button>
                         </td>
                         <td>
                             <button
                                 className="btn btn-danger"
                                 type="button"
                                 onClick={()=>removeFromCart(guitar.id)}
                             >
                                 X
                             </button>
                         </td>
                     </tr>

                    ))}
                   
                </tbody>
            </table>

            <p className="text-end">Total pagar: <span className="fw-bold">${carritoTotal}</span></p>
            <button className="btn btn-dark w-100 mt-3 p-2" onClick={cleanCart}>Vaciar Carrito</button>

            </>

            ) }
            

            
        </div>
    </div>
</nav>
   
  )
}

export default Carrito
