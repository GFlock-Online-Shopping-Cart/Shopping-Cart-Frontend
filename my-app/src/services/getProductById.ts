import { useParams } from "react-router-dom";
import { getPublicResource } from "./api/apiCallServise";
// const { productId } = useParams();


export const getProductById = async (productId: number) => {
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
