import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBarButtons } from "../components/navBar";
import { CartProductCard } from "../components/cartProductCard";
import { ButtonComponent } from "../components/button";
import { viewCart } from "../services/viewCart";
import { removeProductFromCart } from "../services/removeProductFromCart";
import { modifyCart } from "../services/modifyCart";

interface modifyCartRequest {
  productId: number;
  quantity: number;
  price: number;
}

export const CartPage = () => {
  const [message, setMessage] = useState("");
  const [cartItemData, setCartItemData] = useState<Array<CartType>>([]);
  const [updateCartItem, setUpdateCartItem] = useState<modifyCartRequest>({
    productId: 0,
    quantity: 1,
    price: 0,
  });

  const { getAccessTokenSilently, user } = useAuth0();
  const navigate = useNavigate();

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
  }, [getAccessTokenSilently]);

  const handleDelete = async (productId: number) => {
    await removeProductFromCart(getAccessTokenSilently, user, productId);
    const updatedCartItems = cartItemData.filter(
      (item) => item.productId !== productId
    );
    setCartItemData(updatedCartItems);
  };

  const handleQuantityChange = (quantity: number) => {
    setUpdateCartItem((prevState) => ({ ...prevState, quantity }));
  };

  const handleModify = async (productId: number, quantity: number) => {
    await modifyCart(getAccessTokenSilently, productId, quantity);
  };

  const handleProceedToCheckout = async () => {
    navigate('/checkout');
  }

  useEffect(() => {
    setUpdateCartItem(updateCartItem);
  }, []);

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
              onQuantityChange={handleQuantityChange}
              onModify={handleModify}
            />
          ))}
        </div>

        <div className="rounded-lg shadow-lg shadow-black md:shadow-xl md:shadow-black-500 h-[15rem] my-[1rem] p-[2rem] w-1/3">
          <p className="text-[1.3rem] py-[1rem] font-bold">Order Summary</p>
          <div>
            <p className="text-[1rem] font-semibold">Item Count : {}
              <span className="font-bold">
                {(cartItemData || []).length}
              </span>
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
              buttonName="Proceed to Checkout" 
              onClick={handleProceedToCheckout}
            />
            
          </div>
        </div>
      </div>
    </>
  );
};
