import Image from "next/image";
import React from "react";
import { MdLocationOn } from "react-icons/md";

const LocClinic = () => {
  const locations = [
    {
      href: "https://maps.app.goo.gl/epMejSsVaNJDUjEf6",
      image: "/l1.png", // Replace with your image paths
      title: "Shifa Mindcare Clinic - Lahore",
      description:
        "Explore our Shifa Mindcare Clinic to receive top-notch mental health services, workshops, and personalized therapies.",
    },
    {
      href: "https://maps.app.goo.gl/qKaqJ48DRzTF7n1U9",
      image: "/l2.png", // Replace with your image paths
      title: "Healthy Mind Clinic - Lahore",
      description:
        "Visit our Healthy Mind Clinic for expert consultations, environment designed to rejuvenate your mind, and relaxation therapy programs.",
    },
    {
      href: "https://maps.app.goo.gl/JYCLXu47EvKVEyZQA",
      image: "/l3.png", // Replace with your image paths
      title: "Mind Care, C-93 - Karachi",
      description:
        "Our Mind Care, C-93 offers stress relief resources, depression management, and guided meditation practices.",
    },
    {
      href: "https://maps.app.goo.gl/K9r9LorzPVurqEZd7",
      image: "/l4.png", // Replace with your image paths
      title: "Mind Care Center And Rehabilitation Unit - Multan",
      description:
        "Mind Care Center And Rehabilitation Unit is a medical facility. The facility provides a wide range of healthcare services and features qualified and top doctors.",
    },
    {
      href: "https://maps.app.goo.gl/dkRNFM69WWUGPZAC7",
      image: "/l5.png", // Replace with your image paths
      title: "Mind Care Rehab Center(M.C.R.C) - Islamabad",
      description:
        "Visit our Mind Care Rehab Center (M.C.R.C) for expert consultations, mindfulness sessions. Experience a serene environment designed to rejuvenate your mind and soul.",
    },
    {
      href: "https://maps.app.goo.gl/Xrw9JkXQvGHz4BJg8",
      image: "/l6.png", // Replace with your image paths
      title: "Mental-Care Clinic - Peshawer",
      description:
        "Visit our Mentalcare Clinic for expert consultations, mindfulness sessions, and relaxation therapy programs. Our team of skilled professionals is dedicated to providing  mental health care in  supportive environment. ",
    },
  ];
  return (
    <div className="container mt-[5rem] mx-auto p-4">
      <div className="grid gap-[2rem] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition-shadow"
          >
            <div className="relative h-56 w-full">
              <Image
                src={location.image}
                alt={location.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {location.title}
              </h3>
              <p className="text-gray-600 text-justify mt-2">
                {location.description}
              </p>
              <a href={location.href} target="_blank" rel="noopener noreferrer">
                <button className="mt-4  text-black font-bold px-4 py-2 rounded border-2 border-[#118771]">
                  Get Address{" "}
                  <MdLocationOn
                    className="text-green-600 inline mr-2 text-xl"
                    size={25}
                  />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocClinic;
