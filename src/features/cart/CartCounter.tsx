import { useAppDispatch } from "../../hooks/reduxHooks";
import { decreaseAmount, increasAmount } from "./cartSlice";

type CounterTyps = {
  amount: number;
  id: number;
};
const CartCounter = ({ amount, id }: CounterTyps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-[5.5rem] h-[2rem] bg-color-gray inline-flex justify-center items-center">
      <button
        onClick={() => dispatch(decreaseAmount(id))}
        className="w-[50%] h-full text-[.7rem] mx-auto p-0 hover:bg-light-gray hover:text-orange-brown transition-colors ease-in duration-150"
      >
        -
      </button>
      <span className="px-2 text-[.7rem] font-medium">{amount}</span>
      <button
        onClick={() => dispatch(increasAmount(id))}
        className="w-[50%] h-full text-[.7rem] mx-auto p-0 hover:bg-light-gray hover:text-orange-brown transition-colors ease-in duration-150"
      >
        +
      </button>
    </div>
  );
};

export default CartCounter;
