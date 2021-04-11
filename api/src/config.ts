import dotenv from 'dotenv'
dotenv.config();

// nove provides process to get acces to all var from env.Hello file and dotenv.config() calls it whenever the app initiate 
console.log(process.env.HELLO)

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'macysdb',
    MONGO_USER: process.env.MONGO_USER || 'macysdb',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'adming',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.PORT || 4000
}