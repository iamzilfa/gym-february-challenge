const { default: Wrapper } = require("../Wrappers/Wrapper");
import { FaArrowRight } from "react-icons/fa";

const Look = () => {
  return (
    <Wrapper>
      <div className="bg-[#faf7f5] shadow-3xl pt-20 pb-10"> 
        <div className="max-w-[64.25rem] mx-auto px-[20px]">
          <h2 className="mb-[1.5625rem] text-[#008053] md:text-[2.375rem] font-light md:leading-[3.5rem] text-[1.875rem] leading-[2.25rem]">Take a look</h2>
          <div className="md:grid md:grid-cols-3">
            <div className="bg-[#fff] p-5 md:p-10 ">
                <h1 className="mb-24 text-[#008053] text-[1.5rem] leading-[2.25rem] font-light">VU Campus Tour</h1>
                <p className="flex justify-end"><FaArrowRight /></p>
            </div>
            <div className="hidden md:bg-transparent md:col-span-2">

            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Look;
