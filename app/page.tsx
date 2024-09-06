"use client";
import React, { useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Box from "./Components/Box/Box";
import Subcategory from "./Components/Box/Subcategory";

export default function Home() {
  interface SubcategoryItem {
    name: string;
    imgUrl: string;
    price: string;
    desc: string;
  }
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const handleCategorySelect = (index: number) => {
    setSelectedCategory(index);
  };

  const list_Electronics: SubcategoryItem[] = [
    { name: "smartphones", imgUrl: "https://c.media-amazon.com/images/I/41PlXp6us8L._SX300_SY300_QL70_FMwebp_.jpg", price: "10000", desc: "This is a Product." },
    { name: "Laptops", imgUrl: "https://c.media-amazon.com/images/I/41CRO6G8M5L._SX300_SY300_QL70_FMwebp_.jpg", price: "100000", desc: "This is a Product." },
    { name: "Charger Adapter", imgUrl: "https://c.media-amazon.com/images/I/41eKbHQyNCL._SL1200_.jpg", price: "1000", desc: "This is a Product." },
  ];
  const list_Furniture: SubcategoryItem[] = [
    { name: "chair", imgUrl: "", price: "", desc: "This is a Product." },
    { name: "table", imgUrl: "", price: "", desc: "This is a Product." },
    { name: "Drawer", imgUrl: "", price: "", desc: "This is a Product." }
  ];

  const list_Clothes: SubcategoryItem[] = [
    { name: "T-shirts", imgUrl: "", price: "", desc: "This is a Product." },
    { name: "Shirts", imgUrl: "", price: "", desc: "This is a Product." },
    { name: "Jeans", imgUrl: "", price: "", desc: "This is a Product." }
  ];

  const list_Kitchen: SubcategoryItem[] = [
    { name: "Knife", imgUrl: "", price: "", desc: "This is a Product." },
    { name: "Fry Pan", imgUrl: "", price: "", desc: "This is a Product." },
    { name: "Soccer", imgUrl: "", price: "", desc: "This is a Product." }
  ];

  // Function to render components based on selectedCategory
  const renderComponent = () => {
    switch (selectedCategory) {
      case 0: return <Subcategory list={list_Electronics} />;
        break;
      case 1: return <Subcategory list={list_Furniture} />;
        break;
      case 2: return <Subcategory list={list_Clothes} />;
        break;
      case 3: return <Subcategory list={list_Kitchen} />;
        break;
      default:
        return <div>Select a category</div>;
    }
  };

  return (
    <main>
      <Navbar />
      <Box onCategorySelect={handleCategorySelect} />
      <div className="rendered-component">
        {renderComponent()} {/* Render based on selectedCategory */}
      </div>
    </main>
  );
}
