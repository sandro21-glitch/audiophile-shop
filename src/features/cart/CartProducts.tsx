import CartCounter from "./CartCounter";
import CartSingleProduct from "./CartSingleProduct";

const CartProducts = () => {
  return (
    <div className="mb-6 w-full flex items-center justify-between ">
      {/* single product */}
      <CartSingleProduct />
      {/* single product counter */}
      <CartCounter />
    </div>
  );
};

export default CartProducts;
