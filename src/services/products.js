import { Product } from '../db/models/products.js';

export const getProducts = async () => {
  const products = await Product.find();
  return products;
};
export const getProductById = async (productId) => {
  const products = await Product.findById(productId);
  return products;
};
export const postProduct = async (payload) => {
  const products = await Product.create(payload);
  return products;
};
export const updateProduct = async (productId, payload, options = {}) => {
  const rawResult = await Product.findOneAndUpdate(
    { _id: productId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    products: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
export const deleteProduct = async (productId) => {
  const products = await Product.findOneAndDelete({
    _id: productId,
  });
  return products;
};
