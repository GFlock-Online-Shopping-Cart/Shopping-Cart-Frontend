import { getPublicResource } from "./api/apiCallServise";

export const getProductsByCategoryId = async (categoryId: number) => {
    const getProductsByCategoryId = await getPublicResource(
      `category/getProductsBycategoryId/${categoryId}`,
      "GET"
    );
    return getProductsByCategoryId?.data?.data;
  };