import express from "express";
import asyncHandler from "express-async-handler"
import Product from "../model/productModel.js";

const Routes = express.Router()

Routes.get( '/', asyncHandler( async (req, res) => {
  const products = await Product.find({})

  res.json(products)
}))

Routes.get( '/:id', asyncHandler( async(req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({message : 'Does not Exist'})
    }
}))

export default Routes