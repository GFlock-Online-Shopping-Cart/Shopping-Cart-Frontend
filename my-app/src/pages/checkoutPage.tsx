import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createChcekout } from "../services/createCheckout";
import { viewCart } from "../services/viewCart";
import { getProfileById } from "../services/getProfileById";
import { NavBarButtons } from "../components/navBar";
import { ButtonComponent } from "../components/button";
import { CheckoutItemCard } from "../components/checkoutItemCard";

interface CreateCheckoutRequest {
  checkoutPrice: number;
  userId: string;
  id: number;
  checkoutDate: string;
  checkoutItems: [];
}

interface ProfileDetails {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  streetAddress: string;
  city: string;
  province: string;
}

export const CheckoutPage = () => {
  const { getAccessTokenSilently, user, getIdTokenClaims } = useAuth0();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [cartItemData, setCartItemData] = useState<Array<CartType>>([]);
  const [profileData, setProfileData] = useState<ProfileDetails>();
  const [checkout, setCheckout] = useState<CreateCheckoutRequest>({
    id: 0,
    checkoutDate: "",
    checkoutPrice: 0,
    checkoutItems: [],
    userId: "",
  });

  
  useEffect(() => {
    let isMounted = true;
    
    viewCart(getAccessTokenSilently, user).then((result: any) => {
      
      if (!isMounted) {
        return;
      }
      
      if (Array.isArray(result)) {
        setCartItemData(result);
      } else {
        setMessage(JSON.stringify(result, null, 2));
      }

      setCheckout({
        checkoutDate: checkout.checkoutDate,
        checkoutPrice: checkout.checkoutPrice,
        checkoutItems: checkout.checkoutItems,
        id: checkout.id,
        userId: checkout.userId,
      });
    });
    const userId = user?.sub?.split('|')[1]    
    
    getProfileById(getAccessTokenSilently, user, String(userId)).then((result: any) => {
      setProfileData(result);
    });

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);
  
  const handlePlaceOrder = async () => {
    try {
      const idTokenClaims = await getIdTokenClaims();      
      const idToken = idTokenClaims?.__raw;
      const createdCheckout = await createChcekout(getAccessTokenSilently, idToken);
      
      if (createdCheckout && createdCheckout.id) {
        setCheckout(createdCheckout.id);
        navigate(`/order-successful/${createdCheckout.id}`);
      }  
      
    } catch (error: any) {
      return error.message;
    }
  };

  return (
    <>
      <div className="bg-black">
        <NavBarButtons 
          // itemCount={cartItemData.length}
        />
      </div>

      <div className="flex gap-4 justify-center">
        <div className="w-1/2">
          {(cartItemData || []).map((cartItemData: CartType) => (
            <CheckoutItemCard
              key={cartItemData.productId}
              cartItems={cartItemData}
            />
          ))}
        </div>

        <div className="rounded-lg shadow-lg shadow-black md:shadow-xl md:shadow-black-500 h-[23rem] my-[1rem] p-[2rem] w-1/3">
          <p className="font-bold text-[1.3rem]">Deliver To</p>
          <p className="font-semibold">
            {profileData?.firstName} {profileData?.lastName}
          </p>
          <p>{profileData?.streetAddress}, {profileData?.city}, {profileData?.province}</p>
          <p>{profileData?.mobileNumber}</p>
          <p className="text-[1.3rem] py-[1rem] font-bold">Order Summary</p>
          <div>
            <p className="text-[1rem] font-semibold">
              Item Count : {}
              <span className="font-bold">{(cartItemData || []).length}</span>
            </p>
            <p className="text-[1rem] font-semibold">
              Total Price : {}
              <span className="text-red-500 font-bold text-[1.3rem]">
                Rs.
                {(cartItemData || []).reduce(
                  (total, cartItemData: CartType) =>
                    +total +
                    +cartItemData.product.price * cartItemData.quantity,
                  0
                )}
                .00
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <ButtonComponent
              buttonName="Place Order"
                onClick={handlePlaceOrder}
            />
          </div>
        </div>
      </div>
    </>
  );
};
