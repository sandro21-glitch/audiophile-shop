import { useAppSelector } from "../../../hooks/reduxHooks";
import { formatPrice } from "../../../utils/formatPrice";
import { totalSumPrice } from "../checkoutSlice";

const TotalPrice = () => {
  const totalPrice = useAppSelector(totalSumPrice);
  return (
    <div className="flex justify-between mb-1">
      <dt className="uppercase text-text">TOTAL</dt>
      <dd className="font-semibold">{formatPrice(totalPrice)}</dd>
    </div>
  );
};

export default TotalPrice;
