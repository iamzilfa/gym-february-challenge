import Wrapper from "../Wrappers/Wrapper";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const Search = () => {
  return (
    <Wrapper>
      <div className="relative md:px-[20px] md:-mb-[2.5rem] -mt-[3.3125rem]">
        <div className="max-w-[64.25rem] mx-auto md:px-[1.25rem] md:ml-[6.9995rem] md:mr-[7.0003rem]">
          <div className=" h-full">
            <div className="shadow-4xl grid grid-cols-1 md:grid-cols-2 items-stretch">
              <div className="bg-[#0077b3] text-[#fff]">
                <form className="p-5 md:py-[30px] md:px-[40px]">
                  <span className="flex items-center justify-between border-b border-white">
                    <input
                      type="text"
                      name=""
                      id="sear"
                      className="bg-transparent text-[1.3725rem] text-[#fff] focus:outline-none placeholder:text-[#fff]"
                      placeholder="Search..."
                    />
                    <button>
                      <FaSearch size={28} />
                    </button>
                  </span>
                </form>
              </div>
              <div className="bg-[#ffff] flex items-center justify-between text-[#0077b3] text-[1.3725rem] font-light leading-[1.875rem] p-5 md:py-[1.875rem] md:px-[2.5rem]">
                <span>About VU Amsterdam</span>
                <span>
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Search;
