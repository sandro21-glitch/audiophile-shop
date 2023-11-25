import CheckoutLeft from "../features/checkout/CheckoutLeft";
import Summary from "../features/checkout/Summary";
import BackBtn from "../ui/BackBtn";

const Checkout = () => {
  return (
    <section className="section-center">
      <BackBtn />
      <article className="flex flex-col lg:flex-row">
        
        <CheckoutLeft />
        <Summary />
      </article>
    </section>
  );
};

export default Checkout;
