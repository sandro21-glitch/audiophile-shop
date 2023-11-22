import { totalCartPrice } from "./cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import { useAppSelector } from "../../hooks/reduxHooks";

const CartTotal = () => {
  const totalPrice = useAppSelector(totalCartPrice) ?? 0;
  return (
    <div className="flex justify-between mb-5">
      <p className="text-text font-normal">TOTAL</p>
      <p className="text-black font-semibold">{formatPrice(totalPrice)}</p>
    </div>
  );
};

export default CartTotal;
