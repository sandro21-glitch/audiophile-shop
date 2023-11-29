interface InputFieldProps {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  event: (value: string) => void;
}

const InputField = ({
  label,
  id,
  placeholder,
  value,
  event,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-[.7rem] font-medium capitalize mb-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => event(e.target.value)}
        className="w-full border p-3 rounded-lg border-text outline-none focus:border-orange-brown transition-all ease-in duration-150"
      />
    </div>
  );
};

export default InputField;
