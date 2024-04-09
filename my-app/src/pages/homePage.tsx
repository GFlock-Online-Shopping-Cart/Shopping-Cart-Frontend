import { Dropdown } from "../components/dropdown";
import { NavBarButtons } from "../components/navBar";
import { ProductCard } from "../components/productCard";
import { SearchBar } from "../components/searchBar";

export const Homepage = () => {
  return (
    <>
      <div className="bg-black py-[0.5rem]">
        <NavBarButtons />
      </div>

      <div className="flex gap-[1rem] justify-center">
        <SearchBar />
        {/* <Dropdown/> */}
      </div>
      <div className="items-center grid grid-cols-4 gap-4">
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </>
  );
};
