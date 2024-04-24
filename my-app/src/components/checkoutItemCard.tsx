import React from "react";

interface CheckoutItemProps {
  cartItems: CartType;
}

export const CheckoutItemCard: React.FC<CheckoutItemProps> = ({
  cartItems,
}) => {
  return (
    <>
      <div className="flex gap-6 rounded-lg py-[0.5rem] shadow-lg items-center shadow-black md:shadow-xl md:shadow-black-500 m-[2rem]">
        <div>
          <img
            src={cartItems.product.productImage}
            alt="cart-item"
            className="w-[6rem] h-[6rem] "
          />
        </div>
        <div>
          <p className="text-[1.1rem] font-bold">
            {cartItems.product.productName}
          </p>
          <p>{cartItems.product.description}</p>
          <div className="flex gap-8">
            <p className="text-[1.1rem] ">Rs.{cartItems.product.price}.00</p>
            <p className="text-[1rem]">Quantity : {cartItems.quantity}</p>
          </div>
          <p>
            Total Product Price :{" "}
            <span className="text-[1.1rem] font-bold text-red-500">
              {" "}
              Rs.{cartItems.quantity * cartItems.product.price}.00
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
