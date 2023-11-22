import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { clearCart } from "./cartSlice";

const CartHeader = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.cart.cart);
  return (
    <header className="flex justify-between w-full mb-10">
      <h6 className="text-black mb-0 uppercase font-medium text-[1.1rem]">
        Cart <span>({cart.length})</span>
      </h6>
      <button
        onClick={() => dispatch(clearCart())}
        className="underline text-text text-[.9rem] hover:text-orange-brown transition-colors ease-in duration-150"
      >
        Remove All
      </button>
    </header>
  );
};

export default CartHeader;
