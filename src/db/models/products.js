import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      enum: ['books', 'electronics', 'clothing', 'other'],
      require: true,
      default: 'other',
    },
    description: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model('products', productSchema);
