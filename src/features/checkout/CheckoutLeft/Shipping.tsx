import InputField from "../../../ui/InputField";
type ShippingTypes = {
  shipping: { address: string; zip: string; city: string; country: string };
  setShipping: React.Dispatch<
    React.SetStateAction<{
      address: string;
      zip: string;
      city: string;
      country: string;
    }>
  >;
};
const Shipping = ({ shipping, setShipping }: ShippingTypes) => {
  const handleInputChange = (field: string, value: string) => {
    setShipping((prevShipping) => ({
      ...prevShipping,
      [field]: value,
    }));
  };

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
          value={shipping.address}
          event={(value) => handleInputChange("address", value)}
        />
        <InputField
          label="ZIP Code"
          id="zip"
          placeholder="10001"
          value={shipping.zip}
          event={(value) => handleInputChange("zip", value)}
        />
        <InputField
          label="City"
          id="city"
          placeholder="New York"
          value={shipping.city}
          event={(value) => handleInputChange("city", value)}
        />
        <InputField
          label="Country"
          id="country"
          placeholder="United States"
          value={shipping.country}
          event={(value) => handleInputChange("country", value)}
        />
      </div>
    </fieldset>
  );
};

export default Shipping;
