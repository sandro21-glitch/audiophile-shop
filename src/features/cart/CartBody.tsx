import CartCheckout from "./CartCheckout";
import CartHeader from "./CartHeader";
import CartProducts from "./CartProducts";
import CartTotal from "./CartTotal";

const CartBody = () => {
  return (
    <div className="relative">
      <div className="absolute scale-up-center right-[3.5rem] lg:right-[13rem] top-[8rem] bg-white max-w-[25rem] w-full rounded-lg">
        <div className="p-5">
          {/*  cart header*/}
          <CartHeader />
          {/* cart items */}
          <CartProducts />
          {/* cart total */}
          <CartTotal />
          {/* CHECKOUT */}
          <CartCheckout />
        </div>
      </div>
    </div>
  );
};

export default CartBody;
