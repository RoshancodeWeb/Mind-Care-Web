'use client';
import Link from "next/link";
import { useState } from "react";

const AddCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState("");

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev) =>
      type === "increase" ? Math.min(prev + 1, 100) : Math.max(prev - 1, 1)
    );
  };

  const totalCost = 89.99 * quantity;

  return (
    <div>
    <div className="  lg:mt-[3rem] lg:mb-[3rem] mt-[2rem]  py-8 px-4 md:px-16 lg:px-32">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-semibold mb-8">Shopping Cart</h1>

      {/* Cart Table */}
      <div className="overflow-x-auto ">
        <table className="w-full table-auto  ">
          <thead className="text-gray-500  text-sm uppercase">
            <tr>
              <th className="text-left px-4 py-2">Product</th>
              {/* <th className="text-left py-2">Color</th> */}
              <th className="text-left pl-24 md:px-0 lg:px-4 py-2">Type</th>
              <th className="text-left px-4 py-2">Amount</th>
              <th className="text-left px-6 md:px-0 lg:px-4 py-2">Price</th>
              <th className="text-left px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="bg-white   text-gray-700">
            <tr>
              <td className="py-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/mmd.png" // Replace with actual product image
                    alt="medi"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Search Wellness Brain</p>
                    <p className="text-sm text-gray-500">#1</p>
                  </div>
                </div>
              </td>
              {/* <td className="py-4 text-gray-500">-</td> */}
              <td className="py-4 pl-24 pr-16 sm:px-0 md:px-0 lg:px-0 text-gray-500">Adult: 20-46 years</td>
              <td className="py-4">
                <div className="flex items-center  rounded-lg overflow-hidden">
                  <button
                    className="px-4 rounded-md text-lg font-semibold  text-white  bg-[#2871bb] transition-all duration-300"
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    -
                  </button>
                  <span className="px-4 rounded-md bg-gray-100 text-gray-800 font-medium text-lg">
                    {quantity}
                  </span>
                  <button
                    className="px-4 rounded-md bg-[#2871bb] text-lg font-semibold text-white transition-all duration-300"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-4 px-6 lg:px-0 md:px-0 font-semibold text-gray-700">${totalCost.toFixed(2)}</td>
              <td className="py-4">
                <button className="text-red-500 hover:text-red-700">
                  &#10005;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>



      {/* Footer Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-6">
      <Link href='/Products'>
        <button className="flex items-center text-gray-700 hover:text-gray-900 transition">
         
          <span className="mr-2">&#8592;</span> Continue Shopping
         
        </button>
        </Link>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="text-gray-700">
            Total cost: <span className="font-semibold">${totalCost.toFixed(2)}</span>
          </p>
          <Link href='/Checkout'>
          <button className="bg-[#179e44] text-white px-6 py-2 rounded-lg  transition-all">
            Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddCard;
