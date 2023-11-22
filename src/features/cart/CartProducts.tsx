import { useAppSelector } from "../../hooks/reduxHooks";
import CartSingleProduct from "./CartSingleProduct";

const CartProducts = () => {
  const cart = useAppSelector((store) => store.cart.cart);
  if (!cart) return null;
  return (
    <div className="mb-6 w-full flex items-center justify-between ">
      {/* single product */}
      <div className="w-full flex flex-col gap-5">
        {cart.map((cartItem) => {
          return <CartSingleProduct key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
    </div>
  );
};

export default CartProducts;
