import InputField from "../../../ui/InputField";
type BillingProps = {
  billing: { name: string; email: string; number: string };
  setBilling: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; number: string }>
  >;
};
const Billing = ({ billing, setBilling }: BillingProps) => {
  const handleInputChange = (field: string, value: string) => {
    setBilling((prevBilling) => ({
      ...prevBilling,
      [field]: value,
    }));
  };
  return (
    <fieldset className="w-full mb-10">
      <legend className="uppercase text-orange-brown font-medium text-[.9rem] mb-3 tracking-wider">
        BILLING DETAILS
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Name"
          id="name1"
          placeholder="Alexei Ward"
          value={billing.name}
          event={(value) => handleInputChange("name", value)}
        />
        <InputField
          label="Email Address"
          id="email"
          placeholder="example@example.com"
          value={billing.email}
          event={(value) => handleInputChange("email", value)}
        />
        <InputField
          label="Phone Number"
          id="number"
          placeholder="555-555-5555"
          value={billing.number}
          event={(value) => handleInputChange("number", value)}
        />
      </div>
    </fieldset>
  );
};

export default Billing;
