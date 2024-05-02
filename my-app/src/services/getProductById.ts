import { getPublicResource } from "./api/apiCallServise";

export const getProductById = async (productId: number) => {
  try {
    const getProduct = await getPublicResource(`product/getProductById/${productId}`, "GET");

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
