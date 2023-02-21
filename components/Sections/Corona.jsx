
import { FaArrowRight } from "react-icons/fa";
import Wrapper from "../Wrappers/Wrapper";

const Corona = () => {
  return (
    <Wrapper>
      <div className="bg-[#FDFDFD] shadow-3xl">
        <div className="max-w-[64.25rem] mx-auto py-[60px] px-[20px] md:ml-[6.9995rem] md:mr-[7.0003rem]">
          <div className="-m-[10px] grid md:grid-cols-2">
            <div className="m-[10px] shadow-4xl p-6 flex flex-col gap-7">
              <h1 className="text-[#008053] text-[1.5rem] leading-[2.25rem] font-light">UKraine</h1>
              <p className="text-[1.125rem] font-light leading-[1.875rem]">Information and support</p>
              <p className="flex justify-end">
                <FaArrowRight />
              </p>
            </div>
            <div className="m-[10px] shadow-4xl p-6 flex flex-col gap-20">
              <h1 className="text-[#3b2171] text-[1.5rem] leading-[2.25rem] font-light">VU & Corona</h1>
              <p className="flex justify-end">
                <FaArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Corona;
