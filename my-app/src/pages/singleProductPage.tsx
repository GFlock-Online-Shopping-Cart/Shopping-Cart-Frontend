import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavBarButtons } from "../components/navBar";
import { SingleProduct } from "../components/singleProduct";
import { getProductById } from "../services/getProductById";
import { addToCart } from "../services/addToCart";
import { useAuth0 } from "@auth0/auth0-react";

interface RouteParams {
  [key: string]: string | undefined;
  productId: string;
}

interface AddToCartRequest {
  productId: number;
  quantity: number;
}

export const SingleProductPage = () => {
  const { productId } = useParams<RouteParams>();

  const [singleProductData, setsingleProductData] = useState<ProductType | undefined>();
  const [newCartItem, setNewCartItem] = useState<AddToCartRequest>({
    productId: 0,
    quantity: 1,
  });  
  const navigate = useNavigate();
  const { getAccessTokenSilently, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleQuantityChange = (quantity: number) => {
    setNewCartItem((prevState) => ({ ...prevState, quantity }));
  };

  
  const handleAddToCart = async () => {
    try {
      if(!isAuthenticated) {
        await loginWithRedirect({
          appState: {
            returnTo: `/single-product/${productId}`
          }
        })
      }
      await addToCart(getAccessTokenSilently, newCartItem);
      navigate("/cart"); 
      
    } catch (error: any) {
      return error.message;
    }
  };

  useEffect(() => {
    getProductById(Number(productId)).then((result: any) => {
      setsingleProductData(result);
      
      setNewCartItem({
        productId: result.id,
        quantity: 1    
      });
    });
  }, [productId]);  

  return (
    <>
      <div className="bg-black">
        <NavBarButtons />
      </div>
      
      {singleProductData ? (
        <SingleProduct
          key={productId}
          productItem={singleProductData}
          cartItem={newCartItem}
          onAddToCart={handleAddToCart}
          onQuantityChange={handleQuantityChange}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
