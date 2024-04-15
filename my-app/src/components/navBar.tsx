import { useAuth0 } from "@auth0/auth0-react";
import { HiShoppingCart } from "react-icons/hi2";
import { LoginButton } from "./loginButton";
import { SignupButton } from "./signupButton";
import { LogoutButton } from "./logoutButton";

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-between px-[2rem] h-[50px]">
      <div className="flex gap-3 items-center">
        <img className="w-[30px] h-[30px]" src="logo.jpg" alt="logo" />
        <h2 className="text-white text-2xl font-extrabold">GFlock</h2>
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
          <div className="text-xl text-white flex items-center pr-[1rem] cursor-pointer">
            <HiShoppingCart />
          </div>
            <LogoutButton />
          </>
        )}
      </div>
    </div>
  );
};
