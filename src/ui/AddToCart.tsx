// import { useState } from "react";
const AddToCart = () => {
//   const [itemCount, setItemCount] = useState(0);

  return (
    <div>
      {/* item count control */}
      <div className="w-[7.5rem] h-[3rem] bg-color-gray inline-flex justify-center items-center mx-auto">
        <button className="w-[50%] h-full mx-auto p-0 hover:bg-textLight transition-colors ease-in duration-150">
          -
        </button>
        <span className="px-2">1</span>
        <button className="w-[50%] h-full mx-auto p-0 hover:bg-textLight transition-colors ease-in duration-150">
          +
        </button>
      </div>
      <button
        type="button"
        className="h-[3rem] uppercase ml-5 bg-orange-brown px-5 text-[.8rem] text-white font-medium hover:bg-orange-brown-light transition-colors ease-in duration-150"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
