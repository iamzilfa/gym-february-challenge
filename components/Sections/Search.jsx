import Wrapper from "../Wrappers/Wrapper";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const Search = () => {
  return (
    <Wrapper>
      <div className="relative px-[20px] -mb-[2.5rem] -mt-[3.3125rem]">
        <div className="max-w-[64.25rem] mx-auto px-[1.25rem] ml-[6.9995rem] mr-[7.0003rem]">
          <div className=" h-full">
            <div className="shadow-4xl grid grid-cols-2 items-stretch">
              <div className="bg-[#0077b3] text-[#fff]">
                <form className="flex items-center justify-between py-[30px] px-[40px]">
                  <input
                    type="text"
                    name=""
                    id="sear"
                    className="bg-transparent text-[1.3725rem] text-[#fff] placeholder:text-[#fff]"
                    placeholder="Search..."
                  />
                  <button>
                    <FaSearch size={28} />
                  </button>
                </form>
              </div>
              <div className="bg-[#ffff] flex items-center justify-between text-[#0077b3] text-[1.3725rem] font-light leading-[1.875rem] py-[30px] px-[40px]">
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
