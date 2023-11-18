import { useAppSelector } from "../../hooks/reduxHooks";
import CartCounter from "./CartCounter";
import CartSingleProduct from "./CartSingleProduct";

const CartProducts = () => {
  const cart = useAppSelector((store) => store.cart.cart);
  return (
    <div className="mb-6 w-full flex items-center justify-between ">
      {/* single product */}
      {cart.map((cartItem) => {
        return <CartSingleProduct cartItem={cartItem} />;
      })}
      {/* single product counter */}
      <CartCounter />
    </div>
  );
};

export default CartProducts;
