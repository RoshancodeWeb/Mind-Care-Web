import Link from "next/link";
import React, { useState } from "react";

const Packages = () => {
  const [selectedPlan, setSelectedPlan] = useState("Basic");
  const plans = [
    {
      name: "Basic",
      description:
        "A starter plan ideal for individuals who want to gain basic insights into mental health and learn simple strategies for managing stress and anxiety.",
      price: 69.99,
      isSelected: true,
      gradient: "bg-[#118771] ",
    },
    {
      name: "Standard",
      description:
        "Perfect for those looking for a more interactive approach to mental health management, including group support and expert insights.",
      price: 79.99,
      isSelected: false,
    },
    {
      name: "Premium",
      description:
        "The best choice for those who need a comprehensive mental health management plan, with personalized support and direct access to professionals.",
      price: 89.99,
      isSelected: false,
    },
  ];
  return (
    <div className="w-[100%]  bg-[#ececec]">
      <div className="w-full text-center mt-[5rem] mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-[2.6rem] font-bold text-black">
          Choose of Mind Care Consultation Packages
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-[2rem] text-black">
          for Your Needs
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-[3.5rem] items-center p-4 w-full lg:w-3/4 xl:w-2/3 mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={`flex items-center justify-between p-4 w-full rounded-lg shadow-md cursor-pointer
            ${
              plan.name === selectedPlan
                ? plan.gradient || "bg-[#118771]"
                : "bg-white"
            }
            ${
              plan.name === selectedPlan
                ? "border-none"
                : "border border-gray-300"
            }
            ${plan.name === selectedPlan ? "text-white" : "text-gray-800"}
          `}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={plan.name === selectedPlan}
                onChange={() => setSelectedPlan(plan.name)}
                className="form-checkbox text-green-500 h-5 w-5"
              />
              <div>
                <h3
                  className={`font-semibold ${
                    plan.name === selectedPlan ? "text-white" : "text-gray-800"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`${
                    plan.name === selectedPlan ? "text-white" : "text-gray-500"
                  } text-sm`}
                >
                  {plan.description}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`text-lg font-semibold ${
                  plan.name === selectedPlan ? "text-white" : "text-gray-800"
                }`}
              >
                ${plan.price.toFixed(2)}/<span className="text-sm">Month</span>
              </p>
              {plan.name === selectedPlan && (
                <button className="mt-3">
                  <Link
                    href="/Package"
                    className="mt-3 px-4 py-1 rounded-md bg-orange-500 text-white text-sm"
                  >
                    See pricing
                  </Link>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
