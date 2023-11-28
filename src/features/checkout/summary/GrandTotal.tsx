import { useAppSelector } from "../../../hooks/reduxHooks";
import { formatPrice } from "../../../utils/formatPrice";
import { grandTotalSum } from "../checkoutSlice";

const GrandTotal = () => {
  const grandTotal = useAppSelector(grandTotalSum);
  return (
    <div className="flex justify-between">
      <dt className="uppercase text-text">GRAND TOTAL</dt>
      <dd className="font-semibold text-orange-brown">{formatPrice(grandTotal)}</dd>
    </div>
  );
};

export default GrandTotal;
