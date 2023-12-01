import Billing from "./CheckoutLeft/Billing";
import Payment from "./CheckoutLeft/Payment";
import Shipping from "./CheckoutLeft/Shipping";

type CheckoutTypes = {
  billing: { name: string; email: string; number: string };
  setBilling: React.Dispatch<React.SetStateAction<{ name: string; email: string; number: string }>>;
  shipping: { address: string; zip: string; city: string; country: string };
  setShipping: React.Dispatch<React.SetStateAction<{ address: string; zip: string; city: string; country: string }>>;
  payment: string;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
  emoneyOptions: { emoneyNumber: string; pin: string };
  setEmoneyOptions: React.Dispatch<React.SetStateAction<{ emoneyNumber: string; pin: string }>>;
};

const CheckoutLeft = ({
  billing,
  setBilling,
  shipping,
  setShipping,
  payment,
  setPayment,
  emoneyOptions,
  setEmoneyOptions,
}: CheckoutTypes) => {
  return (
    <section className="w-full max-w-[45rem] p-10 bg-[#fff]">
      <div className="w-full">
        <h1 className="text-[1.8rem] font-medium uppercase mb-10">CHECKOUT</h1>
        <Billing billing={billing} setBilling={setBilling} />
        <Shipping shipping={shipping} setShipping={setShipping} />
        <Payment
          payment={payment}
          setPayment={setPayment}
          emoneyOptions={emoneyOptions}
          setEmoneyOptions={setEmoneyOptions}
        />
      </div>
    </section>
  );
};

export default CheckoutLeft;
