import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Product from '../models/productsModel.js'

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req,res) => {
    const products = await Product.find({});
    res.send(products);
}));

productRouter.post('/seed', expressAsyncHandler(async(req,res) => {

    let rating = Math.floor(Math.random()*10)
    if(rating > 5){
        rating = rating - 5
    }

    let rev = Math.floor(Math.random()*100)

    const products = [{
        image: req.body.image,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        rating: rating,
        numRev: rev,
        stock: req.body.stock
    }]
    const createdProducts = await Product.insertMany(products)
    res.send( {createdProducts} );
}))


productRouter.get('/:id', expressAsyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id);

    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: "Product not found."});
    }
}))

export default productRouter;