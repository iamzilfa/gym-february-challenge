const { default: Wrapper } = require("../Wrappers/Wrapper");
import { FaArrowRight } from "react-icons/fa";

const Look = () => {
  return (
    <Wrapper>
      <div className="bg-[#faf7f5] shadow-3xl pt-20 pb-10"> 
        <div className="max-w-[64.25rem] mx-auto px-[20px]">
          <h2 className="mb-[1.5625rem] text-[#008053]">Take a look</h2>
          <div className="grid grid-cols-3">
            <div className="bg-[#fff] p-10 ">
                <h1 className="mb-24">VU Campas Tour</h1>
                <p className="flex justify-end"><FaArrowRight /></p>
            </div>
            <div className="bg-transparent col-span-2">

            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Look;
