import Navbar from '@/Components/Navbar';
import Link from 'next/link';
import React from 'react';
import Footer from '../SubComponents/Footer';

const Checkout = () => {
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col mt-2 lg:mt-[2.5rem] lg:flex-row lg:gap-5 justify-between items-start px-4 lg:px-8 py-6 lg:py-12 max-w-[95%] mx-auto">
      {/* Left Section: Shipping Information */}
      <div className="w-full lg:w-1/2 space-y-8">
        {/* Login and Signup Buttons */}
       

        {/* Shipping Information Form */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Shipping <span className='text-[#ec744a]'> Information</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179e44}"
            />
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179e44}"
            />
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179e44}"
            />
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179e44}"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179e44}"
            />
            <input
              type="text"
              placeholder="Postal code / ZIP"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179e44}"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179e44}"
            />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#179e44}"
            >
              <option>Pakistan</option>
              <option>India</option>
              <option>USA</option>
              <option>Dubai</option>
              <option>London</option>
            </select>
          </div>
        </div>

        {/* Back Button */}
        <Link href='/AddCard'>
        <button className="flex items-center mt-5 text-black">
          <span className="mr-2">&larr;</span> Back
        </button>
        </Link>
      </div>

      {/* Right Section: Payment, Delivery, and Cart */}
      <div className="w-full lg:w-1/2 space-y-8 mt-6 lg:mt-0">
        {/* Payment Method */}
        <div>
          <h2 className="text-lg font-semibold">Payment method</h2>
          <div className="flex flex-wrap gap-4 mt-2">
            {[
              { name: 'PayPal', img: '/pal.png' },
              { name: 'VISA', img: '/visa.png' },
              { name: 'MasterCard', img: '/master.png' },
              { name: 'Discover', img: '/dir.png' },
              { name: 'Maestro', img: '/mat.png' },
            ].map((method, idx) => (
              <button
                key={idx}
                className="border border-gray-300 rounded-lg px-4 py-2 flex items-center hover:border-yellow-500"
              >
                <img src={method.img} alt={method.name} className="w-20 h-10 mr-2" />
               
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Method */}
        <div>
          <h2 className="text-lg font-semibold">Delivery method</h2>
          <div className="flex flex-wrap gap-4 mt-2">
            {[
              { name: 'InPost', price: '$20.00', img: '/in.png' },
              { name: 'DPD', price: '$12.00', img: '/dpd.png' },
              { name: 'DHL', price: '$15.00', img: '/dhl.png' },
              { name: 'FedEx', price: '$10.00', img: '/fed.png' },
            ].map((delivery, idx) => (
              <button
                key={idx}
                className="border border-gray-300 rounded-lg px-4 py-2 flex items-center hover:border-yellow-500"
              >
                <img src={delivery.img} alt={delivery.name} className="w-20 h-10  mr-2" />
                {/* {delivery.name} {delivery.price} */}
              </button>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div>
          <h2 className="text-lg font-semibold">Your cart</h2>
          <div className="flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2">
            <div className="flex items-center">
              <img
                src="/mmd.png"
                alt="Search Wellness Brain"
                className="w-12 h-12 rounded-lg mr-4"
              />
              <div>
                <p className="text-sm">Search Wellness Brain</p>
                <p className="text-sm text-gray-500">Adult: 20-46 years</p>
              </div>
            </div>
            <p className="font-semibold">$89.99</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold">Total cost</p>
            <p className="text-lg font-semibold">$89.99</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
            <Link href='/Products'>
          <button className="border border-[#eb744c] text-gray-700 px-6 py-2 rounded-lg">
            CONTINUE SHOPPING
          </button>
          </Link>
          <button className="bg-[#269374] text-white px-6 py-2 rounded-lg">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Checkout;
