import express from 'express';
const router = express.Router();
import { getProductbyId, getProducts } from '../controllers/productController.js'

router.route('/'.get(getProducts))
router.route('/:id'.get(getProductbyId))

export default router;
