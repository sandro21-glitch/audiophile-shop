import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { clearCart, totalCartAmount } from "./cartSlice";

const CartHeader = () => {
  const dispatch = useAppDispatch();
  const totalAmount = useAppSelector(totalCartAmount);
  return (
    <header className="flex justify-between w-full mb-10">
      <h6 className="text-black mb-0 uppercase font-medium text-[1.1rem]">
        Cart <span>({totalAmount})</span>
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
