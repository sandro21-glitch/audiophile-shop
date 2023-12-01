type EmoneyTypes = {
  emoneyOptions: { emoneyNumber: string; pin: string };
  setEmoneyOptions: React.Dispatch<
    React.SetStateAction<{
      emoneyNumber: string;
      pin: string;
    }>
  >;
};
const EmoneyPay = ({ emoneyOptions, setEmoneyOptions }: EmoneyTypes) => {
  return (
    <div className="flex gap-5">
      <label
        htmlFor="e-number"
        className="w-full text-[.7rem] text-black font-medium"
      >
        e-Money Number
        <input
          id="e-number"
          type="text"
          value={emoneyOptions.emoneyNumber}
          onChange={(e) =>
            setEmoneyOptions((prev) => ({
              ...prev,
              emoneyNumber: e.target.value,
            }))
          }
          className="w-full border p-4 rounded-lg outline-none mt-2 font-medium"
          placeholder="231242442"
        />
      </label>
      <label
        htmlFor="pin"
        className="w-full text-[.7rem] text-black font-medium"
      >
        e-Money PIN
        <input
          id="pin"
          type="text"
          value={emoneyOptions.pin}
          onChange={(e) =>
            setEmoneyOptions((prev) => ({
              ...prev,
              pin: e.target.value,
            }))
          }
          className="w-full border p-4 rounded-lg outline-none mt-2 font-medium"
          placeholder="3424"
        />
      </label>
    </div>
  );
};

export default EmoneyPay;
