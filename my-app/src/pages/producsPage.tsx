import { useEffect, useState } from "react";
import { getPublicResource } from "../services/apiCallServise";
import { Dropdown } from "../components/dropdown";
import { NavBarButtons } from "../components/navBar";
import { ProductCard } from "../components/productCard";
import { SearchBar } from "../components/searchBar";
import { useNavigate } from "react-router-dom";

export const ProducsPage = () => {
  const getAllProducts = async () => {
    const getProducts = await getPublicResource("product/products", "GET");
    return getProducts.data.data;
  };

  const getAllCategories = async () => {
    const getCategories = await getPublicResource("category/getAllCategories", "GET");
    return getCategories.data.data;
  };

  const [productData, setProductData] = useState<Array<ProductType>>([]);
  useEffect(() => {
    getAllProducts().then((result: any) => {
      setProductData(result);
    });
  });

  const [categoryData, setCategoryData] = useState<Array<CategoryType>>([]);
  useEffect(() => {
    getAllCategories().then((result: any) => {
      setCategoryData(result);
    })
  })

  return (
    <>
      <div className="bg-black">
        <NavBarButtons />
      </div>

      <div className="flex gap-[1rem] justify-center">
        <SearchBar />
        <Dropdown 
            categoryItems={categoryData}
        />

      </div>

      <div className="items-center grid grid-cols-4 gap-4 px-[3rem]">
        {productData.map((productData: ProductType) => (
          <ProductCard
            key={productData.id}
            productItems={productData} 
          />
        ))}
      </div>
    </>
  );
};
