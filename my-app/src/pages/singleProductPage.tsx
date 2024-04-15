import { useEffect, useState } from "react";
import { getPublicResource } from "../services/apiCallServise";
import { NavBarButtons } from "../components/navBar";
import { SingleProduct } from "../components/singleProduct";
import { useParams } from "react-router-dom";

export const SingleProductPage = () => {
    const { productId } = useParams();

    const getProductbyId = async () => {

        try {
    const getProduct = await getPublicResource(`product/getProductById/${productId}`, "GET");
    console.log("Product Id", productId);
    
    if (getProduct && getProduct.data) {
      return getProduct.data.data;
    } else {
      console.error("Failed to fetch product data");
      return null;
    }
  } catch (error) {
    console.error("Error fetching product data: ", error);
    return null;
  }
    };

    const [singleProductData, setsingleProductData] = useState<ProductType | undefined>();;
    useEffect(() => {
        getProductbyId().then((result: any) => {
            setsingleProductData(result);
        })
    }, [])

    return (
        <>
            <div className="bg-black">
                <NavBarButtons />
            </div>
            {
                singleProductData ? (
                    <SingleProduct
                        key={singleProductData.id}
                        productItem={singleProductData}
                    />
                ) : (
                    <div>Loading...</div>
                )
            }
        </>
    )
}