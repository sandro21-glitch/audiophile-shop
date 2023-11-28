import { useAppSelector } from "../../hooks/reduxHooks";
import GrandTotal from "./summary/GrandTotal";
import ShippingSum from "./summary/ShippingSum";
import SumProduct from "./summary/SumProduct";
import TotalPrice from "./summary/TotalPrice";
import TotalVat from "./summary/TotalVat";

const Summary = () => {
  const checkout = useAppSelector((store) => store.checkout.checkout);
  return (
    <section className="bg-white flex-1 p-10">
      <h2 className="uppercase text-[1.3rem] font-medium tracking-wider mb-5">
        Summary
      </h2>
      <ul>
        {checkout.map((product) => {
          return <SumProduct key={product.id} product={product} />;
        })}
      </ul>
      <TotalPrice />
      <ShippingSum />
      <TotalVat />
      <GrandTotal />
    </section>
  );
};

export default Summary;
