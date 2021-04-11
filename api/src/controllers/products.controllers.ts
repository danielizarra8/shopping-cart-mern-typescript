//TO USE REQ AND RES WE IMPORTED EXPRES-REQUESHANDLER
import { RequestHandler } from 'express'
// to start creating videos with model already created.
import Product from '../Schemas/ProductSchema';

export const getProducts: RequestHandler = async (req, res) => {
    try {
        // to get all videos array
        const products = await Product.find();
        return res.json(products)
    } catch (error) {
        res.json(error)
    }
}

export const getProduct: RequestHandler = async (req, res ) => {
    //params is a property from express to let us extrar a value from an obj, sent from videos.http in this case
    const productFound = await Product.findById(req.params.id)
    if (!productFound) return res.status(204).json();
    return res.json(productFound);    
}

export const createProduct: RequestHandler =  async (req, res) => {
    // to check for duplicate videos and notify the user.
    const productFound = await Product.findOne({name: req.body.name})
    if (productFound){
        return res.status(301).json({message: 'The id already exists'})
    }
    // req.body is the data from our "client"
    const product = new Product(req.body)
    // to add this new obj to the db, we use the following aync away func:
    // the the db returns an obj after saving data into de db.
    const productSaved = await product.save();
    res.json(productSaved);
}

export const deleteProduct: RequestHandler = async (req, res) => {
    const productFound = await Product.findByIdAndDelete(req.params.id);
    if (!productFound) return res.status(204).json('');
    return res.json(productFound);
} 

export const updateProduct: RequestHandler = async (req, res) => {
    // to update product we need 2 atributes for the func the old video and new req.body. the new: true is to return us the new video to display.
    const productUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(productUpdated);
}
