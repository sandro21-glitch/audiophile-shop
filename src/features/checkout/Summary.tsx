import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import GrandTotal from "./summary/GrandTotal";
import ShippingSum from "./summary/ShippingSum";
import SumProduct from "./summary/SumProduct";
import TotalPrice from "./summary/TotalPrice";
import TotalVat from "./summary/TotalVat";
import { addCartItems } from "./checkoutSlice";

const Summary = () => {
  const dispatch = useAppDispatch();
  const checkout = useAppSelector((store) => store.checkout.checkout);
  const cart = useAppSelector((store) => store.cart.cart);
  useEffect(() => {
    dispatch(addCartItems(cart));
  }, [cart]);

  return (
    <section className="bg-white flex-1 p-10">
      <h2 className="uppercase text-[1.3rem] font-medium tracking-wider mb-5">
        Summary
      </h2>
      {checkout && (
        <ul>
          {checkout.map((product) => {
            return <SumProduct key={product.id} product={product} />;
          })}
        </ul>
      )}
      <TotalPrice />
      <ShippingSum />
      <TotalVat />
      <GrandTotal />
      <button
        type="submit"
        className="mt-10 w-full bg-orange-brown hover:bg-orange-brown-light py-3 text-white font-medium uppercase transition-colors ease-in duration-150"
      >
        Continue & Pay
      </button>
    </section>
  );
};

export default Summary;
