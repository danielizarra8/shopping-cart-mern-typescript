/* eslint-disable jsx-a11y/alt-text */
import React, { ChangeEvent, FormEvent, useState, useEffect} from "react";
import { Product } from './Interfaces';
import * as productService from '../routeService';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';

interface Params {
  id: string
}
const ProductForm = () => {

    const history = useHistory();
    const params = useParams<Params>(); // params allow us to check the parameter sent to the url

    const initialState = {
        name: "", 
        description: "",
        brand: "", 
        image: "",
        price: 0,
        countInStock: 0,
    } // to clear the form when submitting a form

   const [product, setProduct] = useState<Product> (initialState);
    // HTMLInputElement is only for input, if textare, for example, needs to be specified.
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({...product, [e.target.name]: e.target.value}) // the spread operator copy the state of the user and update the state
    // the [e.target.name] capture the name of the the field of the form that changes and update it dynamically
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!params.id) { // to create ased on video id already exist
        await productService.createProduct(product);
        toast.success('New product added!');   
        setProduct(initialState); // to reset initial form
        history.push('/'); //to redirect to main page
        } else {
          await productService.updateProduct(params.id, product) // to update the product
          toast.success("Product Updated!")
          history.push('/');
        }
       // history.push('/'); to redirect to main page
    }

    const getProduct = async (id: string) => {
        const res = await productService.getProduct(id);
        const { name, description, brand, image, price, countInStock} = res.data;
        setProduct({name, description, brand, image, price, countInStock})
        }
    useEffect(() => {
      if (params.id) getProduct(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
        <div className="card-body">

          <h3>New Product</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Product name"
              className="form-control"
              onChange= {handleChange}
              value={product.name}
              autoFocus
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="brand"
              placeholder="Product Brand"
              className="form-control"
              onChange= {handleChange}
              value={product.brand}
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="image"
              placeholder="Image"
              className="form-control"
              onChange= {handleChange}
              value={product.image}
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="form-control"
              onChange= {handleChange}
              //value={product.price}
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="countInStock"
              placeholder="Stock"
              className="form-control"
              onChange= {handleChange}
              //value={product.countInStock}
            />
            </div>
            <div className="form-group">
            <input
              type="textarea"
              name="description"
              placeholder="Product description"
              className="form-control"
              onChange= {handleChange}
              value={product.description}
            />
            </div>
            {
              params.id ? (
              <button className="btn btn-info" >Update product</button>
              ) : (
              <button className="btn btn-primary">Create Product</button>
              )}
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;