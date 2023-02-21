import Wrapper from "../Wrappers/Wrapper";
import VuLogo from "../../public/assets/vectors/VU-logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiUser, CiSearch } from "react-icons/ci";
import { FcMenu } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuOpen]);

  return (
    <>
      <Wrapper>
        <nav className="fixed z-30 md:w-full h-[3.75rem] md:h-[4.6875rem] flex items-center md:max-w-[78.1875rem]  justify-between bg-[#fff] shadow-4xl">
          <div className="ml-[1.875rem]">
            <Image src={VuLogo} alt="VuLogo" />
          </div>
          <div className="bg-[#f2efed] px-[1.875rem] gap-[10px] md:gap-[30px] flex items-center h-full text-[]">
            <span className="cursor-pointer text-[1.33rem] font-light">NL</span>
            <span className="cursor-pointer ">
              <CiUser className=" text-2xl" />
            </span>
            <span className="cursor-pointer ">
              <CiSearch className=" text-2xl" />
            </span>
            <span className="cursor-pointer" onClick={handleMenu}>
              <FcMenu className=" text-2xl text-gray-800" />
            </span>
          </div>
        </nav>
      </Wrapper>
      {menuOpen ? (
        <section className="fixed inset-0 z-50 grid h-screen mx-auto bg-white max-w-7xl">
          <div className="overflow-y-auto">
            <div
              onClick={handleMenu}
              className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="30px"
                height="30px"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#000000"
              >
                <line x1="16" y1="16" x2="48" y2="48" />
                <line x1="48" y1="16" x2="16" y2="48" />
              </svg>
            </div>
            <div className="">
              <div className="flex flex-col justify-between space-y-10 cursor-pointer px-10 pt-32 md:pt-52 md:px-36">
                {[
                  "Study at VU Amsterdam",
                  "Research",
                  "About VU Amsterdam",
                  "VU press office",
                  "Alumni",
                  "Student",
                  "Employee",
                ].map((e, i) => {
                  return (
                    <Link key={i} href={e}>
                      <div className="flex justify-between max-w-sm">
                        <p className="text-[1.25rem] md:text-[1.4rem] text-[#333] whitespace-nowrap font-medium md:font-semibold">
                          {" "}
                          {e}
                        </p>
                        {i === 0 || i === 1 ? (
                          <AiOutlinePlus className="text-[25px] font-thin" />
                        ) : (
                         <BsArrowRight className="text-[25px] font-thin" />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Navbar;
