import React, { useState } from "react";
import { Footer } from "./components/Footer";
import Header from './components/Header';
import { Producto } from "./components/Producto";
import { Carrito } from './components/Carrito';
function App() {


  //crear listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa', precio: 50 },
    { id: 2, nombre: 'Polera', precio: 30 },
    { id: 3, nombre: 'Short', precio: 60 },
    { id: 4, nombre: 'Pantalon', precio: 10 },
  ]);

  //Obtener la fecha 
  const fecha = new Date().getFullYear();


  //State para un carrito de compras
  const [carrito, agregarProducto] = useState([]);
  return (
    <>
      <Header
        titulo='Tienda Virtual'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
      <Footer
        fecha={fecha}
      />
    </>
  );
}

export default App;
