import InputField from "../../../ui/InputField";

const Shipping = () => {
  return (
    <fieldset className="w-full mb-10">
      <legend className="uppercase text-orange-brown font-medium text-[.9rem] mb-3 tracking-wider">
        SHIPPING INFO
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField
          label="Your Address"
          id="address"
          placeholder="1137 Williams Avenue"
        />
        <InputField label="ZIP Code" id="zip" placeholder="10001" />
        <InputField label="City" id="city" placeholder="New York" />
        <InputField label="Country" id="country" placeholder="United States" />
      </div>
    </fieldset>
  );
};

export default Shipping;
