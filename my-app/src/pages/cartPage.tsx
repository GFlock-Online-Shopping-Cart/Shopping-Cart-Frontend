import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getProtectedResource } from "../services/apiCallServise";
import { NavBarButtons } from "../components/navBar";
import { CartProductCard } from "../components/cartProductCard";
import { ButtonComponent } from "../components/button";

export const CartPage = () => {
  const [message, setMessage] = useState("");
  const [cartItemData, setCartItemData] = useState<Array<CartType>>([]);

  const { getAccessTokenSilently, user } = useAuth0();
  
  useEffect(() => {
    let isMounted = true;
    const viewCart = async () => {
        const accessToken = await getAccessTokenSilently(); //fetch a new access token from the Auth0
        const { data, error } = await getProtectedResource(accessToken, "cart/view-cart", "GET", user as any);
        console.log("Access Token", accessToken);    
          
        if (!isMounted) {
            return;
        }
        
        if (data) {
          setMessage(JSON.stringify(data, null, 2));
          console.log("data :", data.data);
          return data.data;
        }
    
        if (error) {
          setMessage(JSON.stringify(error, null, 2));
        }
    };


    viewCart().then((result: any) => {
        if (Array.isArray(result)) {
            setCartItemData(result);
        } else {
            console.error('Data is not an array:', result);
        }
        // setCartItemData(result);
    })
    return () => {
        isMounted = false;
    };
  }, [getAccessTokenSilently])

//   useEffect(() => {
//     return () => {
//       isMounted = false;
//     };
//   }, [getAccessTokenSilently]);
  

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
                />
            ))}
        </div>

        <div className="rounded-lg shadow-lg shadow-black md:shadow-xl md:shadow-black-500 p-[2rem] w-1/3">
            <p className="text-[1.3rem] font-bold">Order Summary</p>
            <ButtonComponent buttonName="Proceed to Checkout" />
        </div>
    </div>
    </>
  );
};
