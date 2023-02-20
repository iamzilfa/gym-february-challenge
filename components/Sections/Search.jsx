import Wrapper from "../Wrappers/Wrapper";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const Search = () => {
  return (
    <Wrapper>
      <div className="bg-[#fff] shadow-3xl relative px-[20px] -mb-[2.5rem]">
        <div className="max-w-[64.25rem] mx-auto px-[1.25rem] ml-[6.9995rem] mr-[7.0003rem]">
          <div className="shadow-5xl h-full">
            <div className="grid grid-cols-2 items-stretch">
              <div className="bg-[#0077b3] text-[#fff]">
                <form className="flex items-center justify-between py-[30px] px-[40px]">
                  <input type="text" name="" id="" className="bg-transparent text-[#fff]"  placeholder="Search..." />
                  <button>
                    <FaSearch />
                  </button>
                </form>
              </div>
              <div className="bg-[#ffff] flex items-center justify-between">
                <span>About VU Amsterdam</span>
                <span><FaArrowRight /></span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Search;
