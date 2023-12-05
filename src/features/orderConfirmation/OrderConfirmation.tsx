import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import OrderedProduct from "./OrderedProduct";
import mark from "/images/shared/desktop/icon-check-mark.svg";
import { setCartPopup } from "../checkout/checkoutSlice";
import { clearCart } from "../cart/cartSlice";
import { useEffect } from "react";
const OrderConfirmation = () => {
  const complete = useAppSelector((store) => store.checkout.complete);
  const dispatch = useAppDispatch();
  // Handle navigation back to home and cleanup
  const handleBackToHome = () => {
    dispatch(setCartPopup(false));
    dispatch(clearCart());
  };
  // handle styling and scrolling based on completion state
  useEffect(() => {
    if (complete) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "visible";
    }
  }, [complete]);
  return (
    <div
      className={`absolute px-5 left-0 top-0 w-screen h-screen z-[999999] ${
        complete ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <div className="fixed left-0 top-0 w-full h-full bg-black opacity-70 z-[-1]"></div>
      <article className=" bg-white p-10 w-[35rem] rounded-lg">
        <img src={mark} alt="mark" className="mb-7" />
        <h1 className="text-[2rem] font-medium text-black mb-7">
          THANK YOU <br /> FOR YOUR ORDER
        </h1>
        <p className="mb-7 text-text text-[.8rem]">
          You will receive an email confirmation shortly.
        </p>
        <OrderedProduct />
        <Link to="/" className="block text-white font-medium text-[.9rem]">
          <button
            onClick={handleBackToHome}
            className="mt-10 w-full py-3 bg-orange-brown uppercase hover:bg-orange-brown-light transition-colors ease-in duration-150"
          >
            Back To Home
          </button>
        </Link>
      </article>
    </div>
  );
};

export default OrderConfirmation;
