import React from "react";
import EmoneyPay from "./EmoneyPay";
import CashPay from "./CashPay";

type PaymentTypes = {
  payment: string;
  setPayment: (payment: string) => void;
};

const Payment = ({ payment, setPayment }: PaymentTypes) => {
  return (
    <fieldset className="w-full mb-10">
      {/* Payment details legend */}
      <legend className="uppercase text-orange-brown font-medium text-[.9rem] mb-3 tracking-wider">
        PAYMENT DETAILS
      </legend>
      <div className="flex justify-between mb-7">
        {/* Payment method label */}
        <p className="text-black text-[.7rem] font-medium flex-1">
          Payment Method
        </p>
        <div className="flex-1">
          {/* Render e-Money and Cash on Delivery payment options */}
          <div className="flex flex-col gap-5">
            <label
              htmlFor="e-money"
              className={`${
                payment === "e-money"
                  ? "border-orange-brown"
                  : "border-gray-200"
              } border p-4 rounded-lg flex text-sm font-medium cursor-pointer`}
            >
              <input
                type="radio"
                id="e-money"
                value="e-money"
                checked={payment === "e-money"}
                onChange={(e) => setPayment(e.target.value)}
                className="mr-5"
              />
              e-Money
            </label>
            <label
              htmlFor="cash"
              className={`${
                payment === "cash" ? "border-orange-brown" : "border-gray-200"
              } border p-4 rounded-lg flex text-sm font-medium cursor-pointer`}
            >
              <input
                type="radio"
                value="cash"
                id="cash"
                checked={payment === "cash"}
                onChange={(e) => setPayment(e.target.value)}
                className="mr-5"
              />
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>
      {payment === "e-money" ? <EmoneyPay /> : <CashPay />}
    </fieldset>
  );
};

export default Payment;
