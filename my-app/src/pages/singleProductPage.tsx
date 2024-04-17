import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBarButtons } from "../components/navBar";
import { SingleProduct } from "../components/singleProduct";
import { getProductbyId } from "../services/getProductById";

interface RouteParams {
  [key: string]: string | undefined;
  productId: string;
}

export const SingleProductPage = () => {
  const { productId } = useParams<RouteParams>();

  const [singleProductData, setsingleProductData] = useState<ProductType | undefined>();
  useEffect(() => {
    getProductbyId(Number(productId)).then((result: any) => {
      setsingleProductData(result);
    });
  }, []);

  return (
    <>
      <div className="bg-black">
        <NavBarButtons />
      </div>
      {singleProductData ? (
        <SingleProduct
          key={singleProductData.id}
          productItem={singleProductData}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
