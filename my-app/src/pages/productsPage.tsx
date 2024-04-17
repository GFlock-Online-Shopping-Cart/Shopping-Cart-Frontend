import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dropdown } from "../components/dropdown";
import { NavBarButtons } from "../components/navBar";
import { ProductCard } from "../components/productCard";
import { SearchBar } from "../components/searchBar";
import { getAllProducts } from "../services/getAllProductsService";
import { getAllCategories } from "../services/getAllCategories";

export const ProductsPage = () => {
  const [productData, setProductData] = useState<Array<ProductType>>([]);
  useEffect(() => {
    getAllProducts().then((result: any) => {
      setProductData(result);
    });
  }, []);

  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState<Array<CategoryType>>([]);
  useEffect(() => {
    getAllCategories().then((result: any) => {
      setCategoryData(result);
    });
  }, []);


  return (
    <>
      <div className="bg-black">
        <NavBarButtons />
      </div>

      <div className="flex gap-[1rem] justify-center">
        <SearchBar />
        <Dropdown 
            categoryItems={categoryData}
            categoryId={Number(categoryId)}
        />

      </div>

      <div className="items-center grid grid-cols-4 gap-4 px-[3rem]">
        {(productData || []).map((productData: ProductType) => (
          <ProductCard
            key={productData.id}
            productItems={productData} 
          />
        ))}
      </div>
    </>
  );
};
