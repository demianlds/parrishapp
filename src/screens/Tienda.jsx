import React from 'react'
import Producto from '../components/Producto'
import reposera1 from '../img/reposera1.jpg'
import reposera2 from '../img/reposera2.jpg'




const Tienda = () => {






  return (
    <div>

      <Producto id="reposera1" nombreProducto="reposera 1" imagen={reposera1} botonProducto="Comprar" />

      <Producto id="reposera2" nombreProducto="reposera 2" imagen={reposera2} botonProducto="Comprar" />

    </div>
  )

}



export default Tienda;