import asyncHandler from 'express-async-handler';
import Product from '../Model/productModel.js';


      /*
      @desc Fetch all products
      @route GET /api/v1/products
      @access Public
      */ 

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
})

/*
@desc Fetch single product
@route GET /api/v1/products/:id
@access Public
*/ 
const getProductbyId = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new ErroR('Product not found');
  }
})

export {getProducts, getProductbyId}

