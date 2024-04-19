import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { NavBarButtons } from "../components/navBar";
import { CartProductCard } from "../components/cartProductCard";
import { ButtonComponent } from "../components/button";
import { viewCart } from "../services/viewCart";
import { removeProductFromCart } from "../services/removeProductFromCart";

export const CartPage = () => {
  const [message, setMessage] = useState("");
  const [cartItemData, setCartItemData] = useState<Array<CartType>>([]);

  const { getAccessTokenSilently, user } = useAuth0();

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
    });

    return () => {
        isMounted = false;
    };
  }, [getAccessTokenSilently])

  const handleDelete = async (productId: number) => {
    await removeProductFromCart(getAccessTokenSilently, user, productId);
    const updatedCartItems = cartItemData.filter(item => item.productId !== productId);
    setCartItemData(updatedCartItems);
    console.log("Updated cart items", updatedCartItems);
    
  }
  
  return (
    <>
    <div className="bg-black">
        <NavBarButtons />
    </div>
    <div className="flex gap-4 justify-center">
        <div className="w-1/2">
            {(cartItemData || []).map((cartItemData: CartType) => (
                <CartProductCard
                    key={cartItemData.productId}
                    cartItems={cartItemData}
                    onDelete={handleDelete}
                />
            ))}
        </div>

        <div className="rounded-lg shadow-lg shadow-black md:shadow-xl md:shadow-black-500 p-[2rem] w-1/3">
            <p className="text-[1.3rem] font-bold">Order Summary</p>
            <ButtonComponent 
                buttonName="Proceed to Checkout" 
            />
        </div>
    </div>
    </>
  );
};
