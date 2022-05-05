import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinkIcon from "@mui/icons-material/Link";

const ProductItem = ({
  img,
  title,
  desc,
  price,
  category,
  strikedOffPrice,
}) => {
  return (
    <>
      <div className="border border-gray-300 px-6 py-4">
        <img className="cursor-pointer" src={img} alt={title} />
        <div className="text-right cursor-pointer mt-3">
          <span className="bg-gray-100 px-2 py-2 rounded-[50%]">
            <FavoriteBorderIcon className="hover:scale-[1.15]" />
          </span>
        </div>
        <h2 className="font-semibold hover:text-blue-600 cursor-pointer">
          {title}
        </h2>
        <p className="text-[14px] h-[65px] hover:text-blue-600 cursor-pointer">
          {desc}
        </p>
        <div className="flex font-bold">
          <p className="mr-4">${price}</p>
          <p className="line-through text-red-600">${strikedOffPrice}</p>
        </div>
        <p className="text-[14px] text-slate-500">
          <LinkIcon /> {category}
        </p>
      </div>
    </>
  );
};

export default ProductItem;
