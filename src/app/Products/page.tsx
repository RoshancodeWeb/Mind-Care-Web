// pages/products.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import ProductDesc from "../../Components/ProductComponents/ProductDesc";
import Navbar from "@/Components/Navbar";

const Products = () => {
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  // const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const productTypes = [
    "Child: Up to 12 years",
    "Adult: 20-46 years",
    "Teenager: 13-19 years",
    "Old: 47 and Up",
  ];
  // const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const allProducts = [
    {
      id: 1,
      name: "Search Wellness Brain",
      price: 89.99,
      type: "Adult: 20-46 years",
      image: "/mmd.png",
      link: "/ProductPage",
    },
    {
      id: 2,
      name: "Organic Kids (Alcohol Free)",
      price: 79.99,
      type: "Child: Up to 12 years",
      image: "/mma.png",
    },
    {
      id: 3,
      name: "Neuriva Brain Health",
      price: 59.99,
      type: "Teenager: 13-19 years",
      image: "/mmb.png",
    },
    {
      id: 4,
      name: "Himalaya Mind Care",
      price: 99.99,
      type: "Adult: 20-46 years",
      image: "/mmc.png",
    },
    {
      id: 5,
      name: "Optimind Health",
      price: 99.99,
      type: "Old: 47 and Up",
      image: "/mme.png",
    },
    {
      id: 6,
      name: "Brahmi Brain Care",
      price: 99.99,
      type: "Old: 47 and Up",
      image: "/mmf.png",
    },
    {
      id: 7,
      name: "Neuriva Energy",
      price: 99.99,
      type: "Teenager: 13-19 years",
      image: "/mmg.png",
    },
    {
      id: 8,
      name: "Riffya Mind Care",
      price: 99.99,
      type: "Adult: 20-46 years",
      image: "/mmh.png",
    },
    {
      id: 9,
      name: "Neuro Care Kids",
      price: 99.99,
      type: "Child: Up to 12 years",
      image: "/mmi.png",
    },
    {
      id: 10,
      name: "Organic Multivitamin",
      price: 99.99,
      type: "Child: Up to 12 years",
      image: "/mmj.png",
    },
    {
      id: 11,
      name: "Op.Can Brain",
      price: 99.99,
      type: "Teenager: 13-19 years",
      image: "/mmk.png",
    },
    {
      id: 12,
      name: "Op.Brain-f Interest",
      price: 99.99,
      type: "Old: 47 and Up",
      image: "/mml.png",
    },
  ];

  const filteredProducts = allProducts.filter(
    (product) =>
      (selectedType.length === 0 || selectedType.includes(product.type)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  return (
    <div>
      <Navbar/>
      <ProductDesc />
      <div className="  mx-auto p-4 lg:w-[95%] mt-[4rem]">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Product Type</h3>
              {productTypes.map((type) => (
                <label key={type} className="block mb-2">
                  <input
                    type="checkbox"
                    className="mr-2 text-[#017e6e] checked:border-[#eb744c] h-5 w-5"
                    checked={selectedType.includes(type)}
                    onChange={() =>
                      setSelectedType((prev) =>
                        prev.includes(type)
                          ? prev.filter((t) => t !== type)
                          : [...prev, type]
                      )
                    }
                  />
                  {type}
                </label>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Price</h3>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full"
              />
              <p className="mt-2 text-sm">
                ${priceRange[0]} - ${priceRange[1]}
              </p>
            </div>
          </aside>

          {/* Product List */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
                Mind Care Top Items ({filteredProducts.length})
              </h2>
              <div className="relative w-full sm:w-[480px] bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full pl-8 pr-24 py-3 text-sm sm:text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
                  placeholder="Search for components, styles, creators..."
                />
                <button className="absolute right-1 top-1 bottom-1 px-4 sm:px-6 bg-[#269374] text-white font-medium text-sm sm:text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4]">
                  Search
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link href={product.link || "#"} key={product.id}>
                  <div className="border bg-white rounded-lg p-4 flex flex-col items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover mb-4 rounded-md"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-center">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold mb-4">${product.price}</p>
                    <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                      ❤️
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
