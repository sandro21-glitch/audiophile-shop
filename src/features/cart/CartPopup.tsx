import { useEffect } from "react";
import CartHeader from "./CartHeader";
import CartProducts from "./CartProducts";
import CartTotal from "./CartTotal";
import CartCheckout from "./CartCheckout";

const CartPopup = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // remove the class when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="w-screen h-screen fixed z-[9999] left-0 right-0 top-0 bottom-0 overflow-hidden">
      <div className="bg-black absolute opacity-40 w-full h-full z-1"></div>
      <div className="relative">
        <div className="absolute right-[13rem] top-[8rem] bg-white max-w-[25rem] w-full rounded-lg">
          <div className="p-5">
            {/*  cart header*/}
            <CartHeader />
            {/* cart items */}
            <CartProducts />
            {/* cart total */}
            <CartTotal />
            {/* CHECKOUT */}
            <CartCheckout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
