import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../Model/productModel.js';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    // @desc Fetch all products
    // @route GET /api/v1/products
    //  @access Public
    res.status(200).json(products);
  })
);

// @desc Fetch single product
// @route GET /api/v1/products/:id
//  @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new ErroR('Product not found');
    }
  })
);

export default router;
