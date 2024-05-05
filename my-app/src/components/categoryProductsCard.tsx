import { useNavigate } from "react-router-dom";
import React from "react";

interface ItemProps {
  productCategoryItems: CategoryProductsType;
}


export const CategoryProductsCard: React.FC<ItemProps> = ({productCategoryItems}) => {
  const navigate = useNavigate();
  const hadndleDivClick = async (productId: number) => {
    navigate(`/single-product/${productId}`)
  }

  return (
    <div 
      className="w-[15rem] h-[23rem] m-[1rem] rounded-lg shadow-lg shadow-black md:shadow-xl md:shadow-black-500 cursor-pointer dark:md:hover:bg-[#EEEEEE] transition-transform duration-100 ease-in-out transform hover:scale-105" 
      onClick={() => hadndleDivClick(productCategoryItems.product_id)}
    >
      <img
        src={productCategoryItems.product_productImage}
        alt=""
        className="w-[15rem] h-[15rem] flex items-center"
      />
      <div className="flex flex-col items-center">
        <p className="text-[1.3rem] font-bold">
          {productCategoryItems.product_productName}
        </p>
        <p className="text-center px-[0.5rem]">
          {productCategoryItems.product_description}
        </p>
        <p className="text-[1.5rem] font-bold text-red-600">
          Rs.{productCategoryItems.product_price}.00
        </p>
      </div>
    </div>
  );
};
