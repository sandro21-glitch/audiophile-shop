import { useAppSelector } from "../hooks/reduxHooks";

const CartItemCountPopup = () => {
  const cart = useAppSelector((store) => store.cart.cart);
  return (
    <div className="absolute -top-2 -right-[.6rem] bg-orange-brown w-5 h-5 rounded-full flex justify-center items-center">
      <span className="text-[.7rem]">{cart.length}</span>
    </div>
  );
};

export default CartItemCountPopup;
