import React, { useState } from "react";
import { QuantityAdjuster } from "./quantityAdjuster";
import { ButtonComponent } from "./button";

interface AddToCartRequest {
  productId: number;
  quantity: number;
}

interface ItemProps {
  productItem: ProductType;
  cartItem: AddToCartRequest;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => Promise<void>;
}

export const SingleProduct: React.FC<ItemProps> = ({
  productItem,
  cartItem,
  onAddToCart,
  onQuantityChange,
}) => {
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(quantity);
  };

  const handleAddToCart = async () => {
    await onAddToCart();
  };

  return (
    <>
      <div className="flex gap-[4rem] p-[2rem] items-center justify-center screen-height">
        <div>
          <img
            className="items-center justify-center flex w-[20rem] h-[20rem]"
            src={productItem.productImage}
            alt="product-image"
          />
        </div>

        <div>
          <h1 className="text-[3rem] font-bold">{productItem.productName}</h1>
          <p className="text-[1.5rem]">{productItem.description}</p>
          <p className="text-[3rem] text-red-600 font-bold">
            Rs.{productItem.price}.00
          </p>
          <div className="mr-4 flex-col items-center">
            <QuantityAdjuster
              quantity={cartItem.quantity}
              onQuantityChange={handleQuantityChange}
            />
            <ButtonComponent
              buttonName="Add to Cart"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </>
  );
};
