import InputField from "../../../ui/InputField";

const Billing = () => {
  return (
    <fieldset className="w-full mb-10">
      <legend className="uppercase text-orange-brown font-medium text-[.9rem] mb-3 tracking-wider">
        BILLING DETAILS
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField label="Name" id="name1" placeholder="Alexei Ward" />
        <InputField
          label="Email"
          id="email"
          placeholder="example@example.com"
        />
        <InputField label="Phone" id="phone" placeholder="555-555-5555" />
      </div>
    </fieldset>
  );
};

export default Billing;
