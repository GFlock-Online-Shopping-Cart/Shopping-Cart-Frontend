import { IoSearchSharp } from "react-icons/io5";

export const SearchBar = () => {
  return (
    <div className="flex p-[1rem] justify-center items-center gap-[1rem]">
      <input type="text" placeholder="Search in GFlock..." className="w-[30rem] p-[0.3rem] bg-[#EEEEEE] rounded-md border-solid border-2 black"/>
      <IoSearchSharp className="text-2xl"/>
    </div>
  )
};
