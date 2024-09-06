// pages/api/categories/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { CategoryModel } from '../../../models/category';
import { connectToDatabase } from '../../../utils/mongodb'; // Your MongoDB connection utility

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase(); // Ensure the database is connected

  if (req.method === 'GET') {
    const categories = await CategoryModel.find().populate('subcategories').exec();
    res.status(200).json(categories);
  } else if (req.method === 'POST') {
    const { name, description, imageUrl, subcategories } = req.body;

    const newCategory = new CategoryModel({
      name,
      description,
      imageUrl,
      subcategories
    });

    await newCategory.save();
    res.status(201).json(newCategory);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
