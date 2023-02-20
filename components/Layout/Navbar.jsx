import Wrapper from "../Wrappers/Wrapper";
import VuLogo from "../../public/assets/vectors/VU-logo.svg";
import Image from "next/image";
import { FaRegUser, FaSearch, FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.body.style.overflow = menuOpen? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuOpen]);

  return (
    <>
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
            <span className="cursor-pointer pr-[30px] " onClick={handleMenu}>
              <FaBars size={20} />
            </span>
          </div>
        </nav>
      </Wrapper>
      {menuOpen ? (
        <section className="fixed inset-0 z-50 grid h-screen mx-auto bg-white max-w-7xl">
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
            <div className="flex flex-col justify-between space-y-10 cursor-pointer pt-52 px-36">
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
                      <p className="text-[1.4rem] whitespace-nowrap font-semibold">
                        {" "}
                        {e}
                      </p>
                      {i === 0 || i === 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-plus"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg
                          className="ml-36"
                          Name="fill-[#000000]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          fill="#000000"
                        >
                          <path
                            d="M20 12L4 12M20 12L14 18M20 12L14 6"
                            stroke="#000000"
                            stroke-width="1.1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Navbar;
