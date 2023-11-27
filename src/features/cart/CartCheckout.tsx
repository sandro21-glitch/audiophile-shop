import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addCartItems } from "../checkout/checkoutSlice";
import { setOpenCart } from "../cart/cartSlice";
const CartCheckout = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.cart.cart);
  const navigate = useNavigate();
  const handleCheckout = () => {
    dispatch(addCartItems(cart));
    dispatch(setOpenCart(false));
    navigate("/checkout");
  };
  return (
    <div className="mb-5">
      <button
        onClick={() => handleCheckout()}
        className="w-full bg-orange-brown py-3 uppercase text-white text-[.9rem]
       font-medium tracking-wider hover:bg-orange-brown-light transition-colors ease-in duration-150"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartCheckout;
