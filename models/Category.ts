import { Schema, model, Document, Types } from 'mongoose';

// Define an interface for Subcategory
interface ISubcategory extends Document {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

// Define the Subcategory schema
const SubcategorySchema = new Schema<ISubcategory>({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  price: { type: Number, required: true }
});

// Define an interface for Category
interface ICategory extends Document {
  name: string;
  description: string;
  imageUrl: string;
  subcategories: Types.DocumentArray<ISubcategory>; // Array of subcategories
}

// Define the Category schema
const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  subcategories: [SubcategorySchema] // Array of embedded subcategories
});

// Create models for Category and Subcategory
const SubcategoryModel = model<ISubcategory>('Subcategory', SubcategorySchema);
const CategoryModel = model<ICategory>('Category', CategorySchema);

export { SubcategoryModel, CategoryModel, ISubcategory, ICategory };
