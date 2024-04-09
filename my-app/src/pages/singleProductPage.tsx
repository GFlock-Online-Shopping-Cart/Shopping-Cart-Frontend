import { useEffect, useState } from "react";
import { getPublicResource } from "../services/apiCallServise";
import { NavBarButtons } from "../components/navBar";
import { SingleProduct } from "../components/singleProduct";
import { useParams } from "react-router-dom";

export const SingleProductPage = () => {
    const { productId } = useParams();

    const getProductbyId = async () => {

        const getProduct = await getPublicResource(`product/getProductById/${productId}`, "GET");
        return getProduct.data.data;
    };

    const [singleProductData, setsingleProductData] = useState<ProductType | undefined>();;
    useEffect(() => {
        getProductbyId().then((result: any) => {
            setsingleProductData(result);
        })
    })

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