import Wrapper from "../Wrappers/Wrapper";
import VuLogo from "../../public/assets/vectors/VU-logo.svg";
import Image from "next/image";
import { FaRegUser, FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="fixed z-30 w-full h-[4.6875rem] flex items-center max-w-[78.1875rem]  justify-between bg-[#fff] shadow-4xl">
        <div className="ml-[1.875rem]">
          <Image src={VuLogo} alt="VuLogo" />
        </div>
        <div className="bg-[#f2efed] px-[1.875rem] flex items-center h-full text-[]">
          <span className="cursor-pointer pr-[30px] text-[1.33rem]">NL</span>
          <span className="cursor-pointer pr-[30px]">
            <FaRegUser size={20} />
          </span>
          <span className="cursor-pointer pr-[30px]">
            <FaSearch size={20} />
          </span>
          <span className="cursor-pointer pr-[30px] "><FaBars size={20} /></span>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
