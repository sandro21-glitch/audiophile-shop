import { useState, useEffect } from "react";
import { Product } from "../features/products/productsSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addToCart } from "../features/cart/cartSlice";
const AddToCart = ({ singleProduct }: { singleProduct: Product }) => {
  const [itemCount, setItemCount] = useState(1);
  const dispatch = useAppDispatch();
  const handleIncreaseAmount = () => {
    setItemCount((prevCount) => prevCount + 1);
  };
  const handleDecreaseAmount = () => {
    if (itemCount <= 1) return;
    setItemCount((prevCount) => prevCount - 1);
  };

  const handleAddProductCart = () => {
    const cartProduct = {
      id: singleProduct.id,
      shortName: singleProduct.shortName,
      cartImage: singleProduct.cartImage,
      price: singleProduct.price,
      amount: itemCount,
    };
    dispatch(addToCart(cartProduct));
  };

  useEffect(() => {
    setItemCount(1);
  }, [singleProduct]);

  return (
    <div className="">
      {/* item count control */}
      <div className="w-[7.5rem] h-[3rem] bg-color-gray inline-flex justify-center items-center mx-auto">
        <button
          onClick={handleDecreaseAmount}
          className="w-[50%] h-full mx-auto p-0 hover:bg-textLight transition-colors ease-in duration-150"
        >
          -
        </button>
        <span className="px-2 text-[.8rem] font-bold">{itemCount}</span>
        <button
          onClick={handleIncreaseAmount}
          className="w-[50%] h-full mx-auto p-0 hover:bg-textLight transition-colors ease-in duration-150"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddProductCart}
        type="button"
        className="h-[3rem] uppercase ml-5 bg-orange-brown px-5 text-[.8rem] text-white font-medium hover:bg-orange-brown-light transition-colors ease-in duration-150"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
