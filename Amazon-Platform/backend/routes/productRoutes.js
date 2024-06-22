import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);  // Ensure the create route is protected by both protect and admin middleware

router.route('/:id/reviews')
  .post(protect, createProductReview);  // Reviews should be protected but not restricted to admin

router.get('/top', getTopProducts);

router.route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)  // Ensure delete and update are protected and restricted to admin
  .put(protect, admin, updateProduct);

export default router;
