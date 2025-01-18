'use client'
import { useState } from "react";
import Link from 'next/link';
import Navbar from "@/Components/Navbar";
import Footer from "../SubComponents/Footer";
// type ColorOption = "black" | "brown" | "beige" | "gray" | "white" | "blue";
type SizeOption ="" | "Child: Up to 12 years" | "Adult: 20-46 years" | "Teenager: 13-19 years" | "Old: 47 and Up";

export default function ProductPage() {

  const [quantity, setQuantity] = useState<number>(1);
//   const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeOption>("");

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
    <Navbar/>
    <div className="p-4 sm:p-6 md:p-8 lg:mt-[4rem] mt-[2rem] lg:p-12 w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex flex-col items-center">
          <img
            src="/mmd.png" // Replace with your image URL
            alt="medi"
            className="w-full bg-white max-w-sm rounded-lg shadow-lg"
          />
          <img
            src="/mmd.png" // Replace with your thumbnail URL
            alt="T-Shirt Thumbnail"
            className="w-20 mt-4 border rounded cursor-pointer hover:shadow-md"
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-4">
          <div>
            <span className="text-red-500 font-bold uppercase text-sm">Sale</span>
            <h1 className="text-2xl font-semibold">Search Wellness Brain</h1>
            <div className="flex items-center space-x-4">
              <span className="text-red-600 text-xl font-bold">$89.99</span>
              <span className="text-gray-400 line-through">$119.99</span>
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium">Color:</h3>
            {/* <div className="flex space-x-2 mt-2">
              {["black", "brown", "beige", "gray", "white", "blue"].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color ? "ring-2 ring-offset-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color as ColorOption)}
                ></button>
              ))}
            </div> */}
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium">Product Type: <span className="text-blue-600 underline cursor-pointer"> See Product Table</span></h3>
            <select
              className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value as SizeOption)}
            >
              <option value="">Choose Product Type</option>
              <option value="Child: Up to 12 years">Child: Up to 12 years</option>
              <option value="Adult: 20-46 years">Adult: 20-46 years</option>
              <option value="Teenager: 13-19 years">Teenager: 13-19 years</option>
              <option value="Old: 47 and Up">Old: 47 and Up</option>
            </select>
          </div>

          {/* Quantity Selection */}
          <div className="flex items-center space-x-4">
            <h3 className="text-sm font-medium">Quantity:</h3>
            <div className="flex items-center border rounded-lg overflow-hidden">
  <button
    className="px-4 rounded-md text-lg font-semibold bg-[#2871bb] text-white  transition-all duration-300"
    onClick={() => handleQuantityChange("decrease")}
  >
    -
  </button>
  <span className="px-4 py-2 rounded-sm bg-gray-100 text-gray-800 font-medium text-lg">
    {quantity}
  </span>
  <button
    className="px-4 rounded-md text-lg font-semibold bg-[#2871bb] text-white transition-all duration-300"
    onClick={() => handleQuantityChange("increase")}
  >
    +
  </button>
</div>

          </div>

          {/* Add to Cart Button */}
          <div className="flex items-center space-x-4">
          <Link href='/AddCard'>
            <button className="bg-[#179e44] text-white px-6 py-3 rounded-lg shadow  focus:outline-none focus:ring-2 focus:ring-yellow-500">
             
              Add to Cart
             
            </button>
            </Link>
            <button className="w-10 h-10 border rounded-full flex items-center justify-center text-gray-500 hover:text-red-500">
              ♥
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
