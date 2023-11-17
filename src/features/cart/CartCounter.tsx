const CartCounter = () => {
  return (
    <div className="w-[5.5rem] h-[2rem] bg-color-gray inline-flex justify-center items-center">
      <button
        // onClick={handleDecreaseAmount}
        className="w-[50%] h-full text-[.7rem] mx-auto p-0 hover:bg-light-gray hover:text-orange-brown transition-colors ease-in duration-150"
      >
        -
      </button>
      <span className="px-2 text-[.7rem] font-medium">1</span>
      <button
        // onClick={handleIncreaseAmount}
        className="w-[50%] h-full text-[.7rem] mx-auto p-0 hover:bg-light-gray hover:text-orange-brown transition-colors ease-in duration-150"
      >
        +
      </button>
    </div>
  );
};

export default CartCounter;
