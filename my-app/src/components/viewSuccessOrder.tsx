import React from "react";
import { useNavigate } from "react-router-dom";

interface ViewOrderProps {
  orderDetails?: SingleOrderType;
  onViewOrder: () => Promise<void>;
}

export const ViewSuccessOrder: React.FC<ViewOrderProps> = ({ orderDetails, onViewOrder }) => {

  const handleViewOrder = async () => {
    await onViewOrder();
  };

  return (
    <button
      onClick={() => {
        handleViewOrder();
      }}
      className="px-[1rem] py-[0.5rem] w-[15rem] my-[1.5rem] rounded-md bg-black font-semibold text-white"
    >
      View Order
    </button>
  );
};
