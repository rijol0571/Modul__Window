// bu product.jsx bn bog'liq

import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Star = ({ rating }) => {
  let setStar = (rating) => {
    let fullStars = Math.floor(rating); 
    let HalfStar = rating - fullStars >= 0.5; 
    let emptyStars = 5 - Math.ceil(rating);


    const stars = [
      ...Array(fullStars).fill(<FaStar className="text-yellow-500" />),
      ...(HalfStar ? [<FaStarHalfAlt className="text-yellow-500" />] : []),
      ...Array(emptyStars).fill(<FaRegStar className="text-gray-300" />),
    ];


    return stars.map((star, index) => (
      <span key={index}>{star}</span>
    ));
  };

  return (
    <div className="flex items-center gap-1">
      {setStar(rating)}
    </div>
  );
};

export default Star;
