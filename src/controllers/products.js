import createHttpError from 'http-errors';
import {
  deleteProduct,
  getProductById,
  getProducts,
  postProduct,
  updateProduct,
} from '../services/products.js';

export const getProductsController = async (req, res) => {
  const products = await getProducts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};
export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};
export const postProductController = async (req, res) => {
  const product = await postProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product',
    data: product,
  });
};
export const patchProductController = async (req, res) => {
  const { productId } = req.params;
  const result = await updateProduct(productId, req.body);

  if (!result) {
    throw createHttpError(404, 'Product not found');
  }
  console.log(result);
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result.products,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(204).send();
};
