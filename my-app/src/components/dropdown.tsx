import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { getPublicResource } from "../services/api/apiCallServise";

interface ItemProps {
  categoryItems: CategoryType[];
  categoryId: number;
}

interface OptionType {
  value: number;
  label: string;
}

export const Dropdown: React.FC<ItemProps> = ({categoryItems, categoryId}) => {
  const navigate = useNavigate();

  const getProductsByCategoryId = async (categoryId: number) => {
    const getProductsByCategoryId = await getPublicResource(
      `category/getProductsBycategoryId/${categoryId}`,
      "GET"
    );
    return getProductsByCategoryId?.data?.data;
  };

  const options = (categoryItems || []).map((item) => ({
    value: item.id,
    label: item.categoryName,
  }));

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [productByCategoryIdData, setProductByCategoryIdData] = useState<Array<ProductType>>([]);
  
  useEffect(() => {
    getProductsByCategoryId(categoryId)
      .then((result: any) => {
      setProductByCategoryIdData(result);
    });
  }, []);

  const handleChange = async (selectedOption: any) => {
    setSelectedOption(selectedOption);
    const categoryId = selectedOption.value;
    const products = await getProductsByCategoryId(categoryId);
    setProductByCategoryIdData(products);

    navigate(`/products/categoryId/${categoryId}`);
  };

  return (
    <div className="justify-center p-[1rem] items-center gap-[1rem] cursor-pointer">
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        className="bg-[#EEEEEE] w-[15rem] cursor-pointer"
      />
    </div>
  );
};
