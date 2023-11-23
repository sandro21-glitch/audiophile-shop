import emptyCart from "/images/cart/empty-cart.png";
const EmptyCart = () => {
  return (
    <div className="relative ">
      <div className="absolute scale-up-center right-[3.5rem] lg:right-[13rem] top-[8rem] bg-white max-w-[25rem] w-full rounded-lg">
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
