import cash from "/images/checkout/icon-cash-on-delivery.svg";

const CashPay = () => {
  return (
    <div className="flex items-center gap-10">
      <img src={cash} alt="" className="w-[3rem] h-[3rem]" />
      <p className="text-text text-[.9rem]">
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
};

export default CashPay;
