import { useState } from "react";
import Billing from "./CheckoutLeft/Billing";
import Payment from "./CheckoutLeft/Payment";
import Shipping from "./CheckoutLeft/Shipping";

const CheckoutLeft = () => {
  const [payment, setPayment] = useState("e-money");
  const [billing, setBilling] = useState({ name: "", email: "", number: "" });
  const [shipping, setShipping] = useState({
    address: "",
    zip: "",
    city: "",
    country: "",
  });
  return (
    <section className="w-full max-w-[45rem] p-10 bg-[#fff]">
      <form className="w-full ">
        <h1 className="text-[1.8rem] font-medium uppercase mb-10">CHECKOUT</h1>
        <Billing billing={billing} setBilling={setBilling} />
        <Shipping shipping={shipping} setShipping={setShipping} />
        <Payment payment={payment} setPayment={setPayment} />
      </form>
    </section>
  );
};

export default CheckoutLeft;
