import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useParams } from "react-router-dom";
import { NavBarButtons } from "../components/navBar";
import { ButtonComponent } from "../components/button";
import { ViewSuccessOrder } from "../components/viewSuccessOrder";
import { getCheckoutById } from "../services/getCheckoutById";

interface RouteParams {
  [key: string]: string | undefined;
  checkoutId: string;
}

export const OrderSuccessfulPage = () => {
  const { checkoutId } = useParams<RouteParams>();
  
  const { getAccessTokenSilently, user } = useAuth0();
  const navigate = useNavigate();

  const [orderSuccess, setOrderSuccess] = useState<SingleOrderType | undefined>();

  const handleContinueShopping = async () => {
    navigate("/");
  };

  
  const handleViewOrder = async () => {
    try {
      getCheckoutById(getAccessTokenSilently, user, Number(checkoutId));
      navigate(`/single-checkout/${checkoutId}`);
    } catch (error: any) {
      return error.message;
    }
  };


  console.log("OrderSuccess", orderSuccess);
  
  return (
    <>
      <div className="bg-black">
        <NavBarButtons />
      </div>

      <div className="text-center">
        <div className="flex justify-center">
          <img
            className="w-[20rem] h-[20rem]"
            src="https://shopping-cart-s3-bucket.s3.ap-south-1.amazonaws.com/Product+Images/35202437_hand_drawn_tick.svg"
            alt=""
          />
        </div>
        <p className="font-bold text-[2rem]">Thank you for your Order</p>
        <p>
          Your order has been successfully created. Order details has been sent
          to your email address.
        </p>
        <div className=" flex gap-8 justify-center">
          <ViewSuccessOrder
            orderDetails={orderSuccess}
            onViewOrder={handleViewOrder}
          />
          <ButtonComponent
            buttonName="Continue Shopping"
            onClick={handleContinueShopping}
          />
        </div>
      </div>
    </>
  );
};
