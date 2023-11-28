import { useAppSelector } from "../../../hooks/reduxHooks";
import { formatPrice } from "../../../utils/formatPrice";

const ShippingSum = () => {
  const shipping = useAppSelector((store) => store.checkout.shipping);
  return (
    <div className="flex justify-between mb-1">
      <dt className="uppercase text-text">shipping</dt>
      <dd className="font-semibold">{formatPrice(shipping)}</dd>
    </div>
  );
};

export default ShippingSum;
