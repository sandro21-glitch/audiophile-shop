import Billing from "./CheckoutLeft/Billing";
import Payment from "./CheckoutLeft/Payment";
import Shipping from "./CheckoutLeft/Shipping";

const CheckoutLeft = () => {
  return (
    <section className="max-w-[45rem] p-10 bg-[#fff]">
      <form className="w-full ">
        <h1 className="text-[1.8rem] font-medium uppercase mb-10">CHECKOUT</h1>
        <Billing />
        <Shipping />
        <Payment />
      </form>
    </section>
  );
};

export default CheckoutLeft;
