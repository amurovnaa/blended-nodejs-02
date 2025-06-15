import { Router } from 'express';
import {
  deleteProductController,
  getProductByIdController,
  getProductsController,
  patchProductController,
  postProductController,
} from '../controllers/products.js';

export const productsRouter = Router();

productsRouter.get('/products', getProductsController);
productsRouter.get('/products/:productId', getProductByIdController);
productsRouter.post('/products', postProductController);
productsRouter.patch('/products/:productId', patchProductController);
productsRouter.delete('/products/:productId', deleteProductController);
