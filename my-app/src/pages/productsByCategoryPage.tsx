import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPublicResource } from "../services/apiCallServise";
import { NavBarButtons } from "../components/navBar";
import { SearchBar } from "../components/searchBar";
import { CategoryProductsCard } from "../components/categoryProductsCard";

interface RouteParams {
  [key: string]: string | undefined;
  categoryId: string;
}

export const ProductsByCategoryPage = () => {

  const { categoryId } = useParams<RouteParams>();

  const getProductsByCategoryId = async (categoryId: number) => {
    const getProductsByCategoryId = await getPublicResource(
      `category/getProductsBycategoryId/${categoryId}`,
      "GET"
    );
    return getProductsByCategoryId?.data?.data;
  };

  const [categoryProductsData, setCategoryProductsData] = useState<Array<CategoryProductsType>>([]);
  useEffect(() => {
    getProductsByCategoryId(Number(categoryId)).then((result: any) => {
      setCategoryProductsData(result);
    });
  }, [categoryId]);
  
  return (
    <>
      <div className="bg-black">
        <NavBarButtons />
      </div>

      <div className="flex gap-[1rem] justify-center">
        <SearchBar />
      </div>

      <div className="items-center grid grid-cols-4 gap-4 px-[3rem]">
        {(categoryProductsData || []).map(
          (productData) => {
            console.log("productData:", productData);
            
            return (
                <CategoryProductsCard
                  key={productData.category_id}
                  productCategoryItems={productData}
                />
              )
          }
        )}
      </div>
    </>
  );
};
