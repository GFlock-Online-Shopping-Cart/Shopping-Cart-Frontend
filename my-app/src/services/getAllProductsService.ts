import { getPublicResource } from "./api/apiCallServise";

export const getAllProducts = async () => {
  const getProducts = await getPublicResource("product/products", "GET");
  return getProducts?.data?.data;
};
