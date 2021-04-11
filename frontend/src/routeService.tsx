import axios from 'axios';
import { Product } from './components/Interfaces';

//your server address
const API = 'http://localhost:5000';

export const getProducts = async () => {
    return await axios.get<Product[]>(`${API}/products`);
 // to capture the data from axios (the db)
}
export const createProduct = async (product: Product) => {
    return await axios.post(`${API}/products`, product);
}

export const getProduct = async(id: string) => {
    return await axios.get<Product>(`${API}/products/${id}`)
}

export const updateProduct = async (id: string, product: Product) => {
    return await axios.put<Product>(`${API}/products/${id}`, product);
}

export const deleteProduct = async (id: string) => {
    return await axios.delete<Product>(`${API}/products/${id}`);
}