import React from "react";

type PaymentTypes = {
  payment: string;
  setPayment: (payment: string) => void;
};

const Payment = ({ payment, setPayment }: PaymentTypes) => {
  const handleUpdatePaymentMethod = (method: string) => {
    setPayment(method);
  };

  // PaymentOption component for individual payment options
  const PaymentOption: React.FC<{ id: string; label: string }> = ({
    id,
    label,
  }) => (
    <div
      onChange={() => handleUpdatePaymentMethod(label)}
      className="p-4 border flex items-center gap-3 cursor-pointer mb-5 rounded-lg"
    >
      <input
        type="checkbox"
        name={id}
        id={id}
        className="cursor-pointer"
        checked={payment === label}
      />
      <label htmlFor={id} className="cursor-pointer font-medium text-[.9rem]">
        {label}
      </label>
    </div>
  );

  return (
    <fieldset className="w-full mb-10">
      {/* Payment details legend */}
      <legend className="uppercase text-orange-brown font-medium text-[.9rem] mb-3 tracking-wider">
        PAYMENT DETAILS
      </legend>
      <div className="flex justify-between">
        {/* Payment method label */}
        <p className="text-black text-[.7rem] font-medium flex-1">
          Payment Method
        </p>
        <div className="flex-1">
          {/* Render e-Money and Cash on Delivery payment options */}
          <PaymentOption id="e-money" label="e-Money" />
          <PaymentOption id="cash" label="Cash on Delivery" />
        </div>
      </div>
    </fieldset>
  );
};

export default Payment;
