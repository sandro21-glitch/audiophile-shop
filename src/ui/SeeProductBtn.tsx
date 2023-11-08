interface ButtonProps {
  children: React.ReactNode;
  colorClass?: string;
  bgClass?: string;
  hoverClass?: string;
  text?: string;
}
const Button = ({
  children,
  colorClass,
  bgClass,
  hoverClass,
  text,
}: ButtonProps) => {
  const buttonClasses = `
    mb-5 px-8 py-3
     font-semibold uppercase transition ease-in duration-150
    text-[.9rem] ${bgClass} text-${text} ${colorClass} ${hoverClass}`;

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
