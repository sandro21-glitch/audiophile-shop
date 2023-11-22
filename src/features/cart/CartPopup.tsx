import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setOpenCart } from "./cartSlice";
import CartBody from "./CartBody";
import EmptyCart from "./EmptyCart";

const CartPopup = () => {
  const openCart = useAppSelector((store) => store.cart.openCart);
  const cart = useAppSelector((store) => store.cart.cart);
  const dispatch = useAppDispatch();
  if (!openCart) return null;
  return (
    <div className="w-screen h-screen fixed z-[9999] left-0 right-0 top-0 bottom-0 overflow-hidden">
      <div
        className="bg-black absolute opacity-40 w-full h-full z-1"
        onClick={() => dispatch(setOpenCart(false))}
      ></div>
      {cart.length < 1 ? <EmptyCart /> : <CartBody />}
    </div>
  );
};

export default CartPopup;
