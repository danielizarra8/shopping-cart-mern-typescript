import React, { useState, useEffect } from 'react';
import * as routeService from '../routeService';
import { useHistory } from 'react-router-dom';

export const Products = ({ setCart, cart }) =>{
  const [products, setProducts] = useState([]);
  const history = useHistory();// to save windows browser history data

  const loadProducts = async () => {
    const res = await routeService.getProducts();
    const orderProduct = res.data.map(product => { // to sort out product by date created
      return{
          ...product,
          createdAt: product.createdAt? new Date(product.createdAt): new Date(),
          updatedAt: product.updatedAt? new Date(product.updatedAt): new Date()
      }
  })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    setProducts(orderProduct)

  }
  useEffect(() => {
    loadProducts();
}, [])


  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
  const handleDelete = async (id) => {
    await routeService.deleteProduct(id);
    loadProducts(); // this rerender the list of product from the productlist
}

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
                <div className="d-flex justify-content-between">
                    <span style={{cursor:'pointer'}} className="text-danger" onClick={() => product._id && handleDelete(product._id)}>X</span>
                </div>            
                  <h3>{product.name}</h3>
                    <div className="details-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                  <p>{product.brand}</p>
                  <p>{product.price}</p>  
                  <p>{product.countInStock}</p>
                  <p>{product.description}</p> 
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button onClick={() => history.push(`/update/${product._id}`)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
}