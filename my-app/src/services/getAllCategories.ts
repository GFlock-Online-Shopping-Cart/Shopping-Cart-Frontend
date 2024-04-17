import { getPublicResource } from "./api/apiCallServise";

export const getAllCategories = async () => {
    const getCategories = await getPublicResource("category/getAllCategories", "GET");
    return getCategories?.data?.data;
  };