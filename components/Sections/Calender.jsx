import Wrapper from "../Wrappers/Wrapper";
import { FaAngleDown, FaArrowRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Calender = () => {
  return (
    <Wrapper>
      <div className="bg-[#fff] shadow-3xl">
        <div className="max-w-[64.25rem] py-[60px] px-[20px] mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[#0077b3] text-[2.375rem] font-light leading-[3.5rem]">Calendar</h1>
            <div className="flex gap-5">
              <div className="shadow-4xl bg-[#fff] flex items-center gap-16 p-4">
                <h1 className="text-[#333333] text-[1.125rem] font-medium leading-[1.875rem]">All categories</h1>
                <span className="mt-1">
                  <FaAngleDown size={28} />
                </span>
              </div>
              <div className="shadow-4xl bg-[#fff] flex items-center gap-32 p-4">
                <h1 className="text-[#333333] text-[1.125rem] font-medium leading-[1.875rem]">Date</h1>
                <span className="mt-1">
                  <FaAngleDown size={28} />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-20 mt-16">
            <div>
              <h1 className="underline">PhD Defences</h1>
              <p className="text-[#0077b3] text-[18px] font-bold leading-[1.875rem] py-[0.3125rem]">20 February 2023</p>
              <p className="text-[#333333] text-[23.94px] font-light leading-[1.875rem]">PhD defence by T.J.H. Jonkers</p>
            </div>
            <div>
              <h1 className="underline">PhD Defences</h1>
              <p className="text-[#0077b3] text-[18px] font-bold leading-[1.875rem] py-[0.3125rem]">20 February 2023</p>
              <p className="text-[#333333] text-[23.94px] font-light leading-[1.875rem]">PhD defence by T.J.H. Jonkers</p>
            </div>
            <div>
              <h1 className="underline">PhD Defences</h1>
              <p className="text-[#0077b3] text-[18px] font-bold leading-[1.875rem] py-[0.3125rem]">20 February 2023</p>
              <p className="text-[#333333] text-[23.94px] font-light leading-[1.875rem]">PhD defence by T.J.H. Jonkers</p>
            </div>
            <div>
              <h1 className="underline">PhD Defences</h1>
              <p className="text-[#0077b3] text-[18px] font-bold leading-[1.875rem] py-[0.3125rem]">20 February 2023</p>
              <p className="text-[#333333] text-[23.94px] font-light leading-[1.875rem]">PhD defence by T.J.H. Jonkers</p>
            </div>
          </div>
          <div className="border-t border-t-[#333333] mt-20 flex justify-between">
            <div className="flex items-center gap-6">
              <h1>View calendar</h1>
              <span><FaArrowRight /></span>
            </div>
            <div className="flex items-center gap-6 bg-[#dff2fd] p-4">
                <span><FaAngleLeft size={28} /></span>
                <span><FaAngleRight size={28} /></span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Calender;
