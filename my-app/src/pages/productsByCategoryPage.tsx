import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBarButtons } from "../components/navBar";
import { SearchBar } from "../components/searchBar";
import { CategoryProductsCard } from "../components/categoryProductsCard";
import { getProductsByCategoryId } from "../services/getProductsByCategoryId";

interface RouteParams {
  [key: string]: string | undefined;
  categoryId: string;
}

export const ProductsByCategoryPage = () => {

  const { categoryId } = useParams<RouteParams>();

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
