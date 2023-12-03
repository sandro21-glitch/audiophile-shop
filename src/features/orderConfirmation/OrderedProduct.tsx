import { useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import SingleOrderProduct from "./SingleOrderProduct";
const OrderedProduct = () => {
  const checkout = useAppSelector((store) => store.checkout.checkout);
  const [showAllItems, setShowAllItems] = useState(false);
  const displayedProducts = showAllItems ? checkout : [checkout[0]];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* product side */}
      <div className="bg-color-gray p-5 rounded-l-lg flex-1">
        <div className="flex flex-col gap-5">
          {/* single Product */}
          {displayedProducts.map((product) =>
            product && product.id ? (
              <SingleOrderProduct key={product.id} product={product} />
            ) : null
          )}
        </div>
        <div className="pt-5 text-center text-[.8rem]">
          <button
            className="hover:underline text-text"
            onClick={() => setShowAllItems(!showAllItems)}
          >
            {showAllItems
              ? `View less`
              : `and ${checkout.length - 1} other item(s)`}
          </button>
        </div>
      </div>
      <div className="bg-black flex-1 p-5 rounded-r-lg flex flex-col justify-end">
        <p className="text-gray-300 mb-5 lg:mb-0">GRAND TOTAL</p>
        <p className="text-white font-semibold">$ 6,168.8</p>
      </div>
    </div>
  );
};

export default OrderedProduct;
