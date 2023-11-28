import { useAppSelector } from "../../../hooks/reduxHooks";
import { formatPrice } from "../../../utils/formatPrice";
import { totalSumVat } from "../checkoutSlice";

const TotalVat = () => {
  const totalVat = useAppSelector(totalSumVat);
  return (
    <div className="flex justify-between mb-7">
      <dt className="uppercase text-text">VAT (INCLUDED)</dt>
      <dd className="font-semibold">{formatPrice(totalVat)}</dd>
    </div>
  );
};

export default TotalVat;
