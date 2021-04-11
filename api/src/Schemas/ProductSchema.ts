import {Schema, model} from 'mongoose'

// here is to define the schema on how to insert data to mongodb
const productSchema = new Schema ({
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, default: 0.0, required: true },
    countInStock: { type: Number, default: 0, required: true },
}, {
    // versionKey te removes sub-dash of moongose..? abd timestamps to keep time updated of videos
    versionKey: false,
    timestamps:true

})
// export and execue func model to take two attributes: name of the model and the schema
export default model('Product', productSchema);