import OrderedProduct from "./OrderedProduct";
import mark from "/images/shared/desktop/icon-check-mark.svg";
const OrderConfirmation = () => {
  return (
    <div className="absolute px-5 left-0 top-0 w-screen h-screen z-[999999] flex justify-center items-center">
      <div className="fixed left-0 top-0 w-full h-full bg-black opacity-70 z-[-1]"></div>
      <article className=" bg-white p-10 w-[35rem] rounded-lg">
        <img src={mark} alt="mark" className="mb-7" />
        <h1 className="text-[2rem] font-medium text-black mb-7">
          THANK YOU <br /> FOR YOUR ORDER
        </h1>
        <p className="mb-7 text-text text-[.8rem]">
          You will receive an email confirmation shortly.
        </p>
        <OrderedProduct />
      </article>
    </div>
  );
};

export default OrderConfirmation;
