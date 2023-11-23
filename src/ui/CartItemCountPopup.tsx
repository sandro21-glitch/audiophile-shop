import { totalCartAmount } from "../features/cart/cartSlice";
import { useAppSelector } from "../hooks/reduxHooks";

const CartItemCountPopup = () => {
  const totalAmount = useAppSelector(totalCartAmount);
  return (
    <div className="absolute -top-2 -right-[.6rem] bg-orange-brown w-5 h-5 rounded-full flex justify-center items-center">
      <span className="text-[.7rem]">{totalAmount}</span>
    </div>
  );
};

export default CartItemCountPopup;
