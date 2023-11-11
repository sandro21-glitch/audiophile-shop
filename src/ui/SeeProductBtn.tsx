import { Link, useLocation } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  colorClass?: string;
  bgClass?: string;
  hoverClass?: string;
  text?: string;
  prodId: number;
}

const Button = ({
  children,
  colorClass,
  bgClass,
  hoverClass,
  text,
  prodId,
}: ButtonProps) => {
  const { pathname } = useLocation();

  return (
    <button
      className={`mb-5 px-8 py-3 font-semibold uppercase transition ease-in duration-150 text-[.9rem] ${bgClass} text-${text} ${colorClass} ${hoverClass}`}
    >
      <Link
        to={`${pathname}/${encodeURIComponent(prodId)
          .replace(/%/g, "-")
          .replace(/20/g, "")
          .toLowerCase()}`}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
