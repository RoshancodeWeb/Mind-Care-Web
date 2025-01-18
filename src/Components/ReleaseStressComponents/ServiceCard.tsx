
'use Client';
import React from 'react';

const ServiceCard = ({ imageSrc, title, description, articleFile }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between transform transition-transform duration-300 lg:hover:scale-105 lg:hover:shadow-xl">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    <a
      href={articleFile}
      download
      className="text-blue-500 hover:underline mt-auto"
    >
     
<button className="cursor-pointer transition-all bg-[#118771] text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
  Learn More &rarr;
</button> 
    </a>
  </div>
  
  );
};

export default ServiceCard;
