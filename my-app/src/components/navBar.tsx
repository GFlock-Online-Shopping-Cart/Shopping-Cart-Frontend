import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import { LoginButton } from "./loginButton";
import { SignupButton } from "./signupButton";
import { LogoutButton } from "./logoutButton";
import React, { useContext, useState, useEffect } from "react";
import { viewCart } from "../services/viewCart";


export const NavBarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const { getAccessTokenSilently, user } = useAuth0();

  const [cartItems, setCartItems] = useState<Array<CartType>>([]);

    useEffect(() => {
        viewCart(getAccessTokenSilently, user).then((result: any) => {
            setCartItems(result);
        })
    }, [getAccessTokenSilently]);


  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleMyOrderClick = () => {
    navigate("/order-history")
  }
  return (
    <div className="flex justify-between px-[2rem] h-[50px]">
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 cursor-pointer" onClick={handleLogoClick}>
          <img className="w-[30px] h-[30px]" src="/logo.jpg" alt="logo" />
          <h2 className="text-white text-2xl font-extrabold">GFlock</h2>
        </div>
      </div>
      <div className="flex justify-end">
        {!isAuthenticated && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}

        {isAuthenticated && (
          <>
            <div
              onClick={handleCartClick}
              className="text-xl text-white flex items-center pr-[1rem] cursor-pointer"
            >
            <div className="flex justify-center mr-7 items-center" onClick={handleMyOrderClick}>
              <p className="text-white font-semibold text-[0.9rem]">My Orders</p>
            </div>
              <div className= "relative">
                {Number(cartItems.length) > 0  && (
                  <p className="bg-red-700 rounded-full w-5 h-5 font-semibold text-[0.9rem] flex justify-center items-center absolute ml-5">{(cartItems || []).length}</p>
                )}
                <HiShoppingCart className="h-8 w-8 pt-2"/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img className=" w-8 h-8 rounded-full mx-2 cursor-pointer" src={user?.picture} alt="" />
            </div>
            <LogoutButton />
          </>
        )}
      </div>
    </div>
  );
};
