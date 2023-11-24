import emptyCart from "/images/cart/empty-cart.png";
const EmptyCart = () => {
  return (
    <div className="relative mx-5 lg:mx-0">
      <div
        className="absolute scale-up-center
        left-0 right-0 md:left-1/2 top-[8rem] bg-white min-w-[20rem] max-w-[25rem] mx-auto rounded-lg"
      >
        <div className="p-5">
          <h6 className="py-10 text-center font-medium text-text">
            Your cart is empty
          </h6>
          <div className="flex justify-center mb-5">
            <img
              src={emptyCart}
              alt="empty cart"
              className="w-[6rem] h-[6rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
