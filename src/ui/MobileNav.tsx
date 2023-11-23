import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
type MobileTypes = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const MobileNav = ({ isOpen, setOpen }: MobileTypes) => {
  return (
    <div className="block lg:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
    </div>
  );
};

export default MobileNav;
