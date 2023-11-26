const SumProduct = () => {
  return (
    <div className="flex items-center gap-5 mb-10">
      <img
        src="https://audiophile-ecommerce-mbart13.vercel.app/images/cart/image-yx1-earphones.jpg"
        alt=""
        className="w-[4rem] h-[4rem] rounded-lg"
      />
      <div className="w-full">
        <div className="w-full flex items-start justify-between">
          <p className="text-black font-medium">YX1</p>
          <p className="text-text font-medium">x1</p>
        </div>
        <p className="text-text font-medium">$ 599</p>
      </div>
    </div>
  );
};

export default SumProduct;
