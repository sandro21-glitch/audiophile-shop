import { useState } from "react";
import CheckoutLeft from "../features/checkout/CheckoutLeft";
import Summary from "../features/checkout/Summary";
import { useAppDispatch } from "../hooks/reduxHooks";
import BackBtn from "../ui/BackBtn";
import { addFormState } from "../features/checkout/formSlice";

const Checkout = () => {
  const [payment, setPayment] = useState("e-money");
  const [emoneyOptions, setEmoneyOptions] = useState({
    emoneyNumber: "",
    pin: "",
  });
  const [billing, setBilling] = useState({ name: "", email: "", number: "" });
  const [shipping, setShipping] = useState({
    address: "",
    zip: "",
    city: "",
    country: "",
  });
  const dispatch = useAppDispatch();
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newForm = {
      billing: {
        name: billing.name,
        email: billing.email,
        number: billing.number,
      },
      shipping: {
        address: shipping.address,
        zip: shipping.zip,
        city: shipping.city,
        country: shipping.country,
      },
      payment: {
        emoney: true,
        cash: false,
      },
      emoneyOptions: {
        emoneyNumber: emoneyOptions.emoneyNumber,
        pin: emoneyOptions.pin,
      },
    };
    dispatch(addFormState(newForm));
    console.log(newForm);
  };
  return (
    <section className="section-center">
      <BackBtn />
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col lg:flex-row gap-7"
      >
        <CheckoutLeft
          billing={billing}
          setBilling={setBilling}
          shipping={shipping}
          setShipping={setShipping}
          payment={payment}
          setPayment={setPayment}
          emoneyOptions={emoneyOptions}
          setEmoneyOptions={setEmoneyOptions}
        />
        <Summary />
      </form>
    </section>
  );
};

export default Checkout;
