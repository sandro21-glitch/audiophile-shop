import CartCheckout from "./CartCheckout";
import CartHeader from "./CartHeader";
import CartProducts from "./CartProducts";
import CartTotal from "./CartTotal";

const CartBody = () => {
  return (
    <div className="relative mx-5 lg:mx-0">
      <div
        className="absolute scale-up-center
        left-0 right-0 md:left-1/2 top-[8rem] bg-white min-w-[20rem] max-w-[25rem] mx-auto rounded-lg"
      >
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
