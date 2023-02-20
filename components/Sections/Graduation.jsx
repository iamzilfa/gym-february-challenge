import { FaGraduationCap } from "react-icons/fa";
import Wrapper from "../Wrappers/Wrapper";
import { FaArrowRight } from "react-icons/fa";

const Graduation = () => {
  return (
    <Wrapper>
      <div className="relative">
        <div className="bg-[#FDFDFD] shadow-3xl">
          <div className="max-w-[64.25rem] mx-auto pt-10 pb-52">
            <div className="grid grid-cols-4 items-center">
              <div className="flex items-center">
                <span className="pr-9 text-[#0077b3]">
                  <FaGraduationCap size={28} />
                </span>
                <span>31.704 students</span>
              </div>
              <div className="flex items-center">
              <span className="pr-9 text-[#0077b3]">
                  <FaGraduationCap size={28} />
                </span>
                <span>31.704 students</span>
              </div>
              <div className="flex items-center">
              <span className="pr-9 text-[#0077b3]">
                  <FaGraduationCap size={28} />
                </span>
                <span>31.704 students</span>
              </div>
              <div className="flex items-center">
              <span className="pr-9 text-[#0077b3]">
                  <FaGraduationCap size={28} />
                </span>
                <span>31.704 students</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FAF7F5] shadow-3xl pb-64">
          <div className="max-w-[64.25rem] mx-auto px-[20px] ml-[6.9995rem] mr-[112.005px] grid grid-cols-2 gap-6 absolute -mt-32 w-full">
            <div className="bg-[#fff] shadow-4xl p-[30px]">
              <h1 className="flex items-center justify-between">
                <span className="text-[#0077b3] text-[2.375rem] font-light leading-[3.5rem]">Education</span>
                <span className="text-[#0077b3]">
                  <FaArrowRight size={28} />
                </span>
              </h1>
              <div className="mt-10 flex flex-col gap-2">
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
              </div>
            </div>
            <div className="bg-[#fff] shadow-4xl p-[30px]">
              <h1 className="flex items-center justify-between">
              <span className="text-[#0077b3] text-[2.375rem] font-light leading-[3.5rem]">Education</span>
                <span className="text-[#0077b3]">
                  <FaArrowRight size={28} />
                </span>
              </h1>
              <div className="mt-10 flex flex-col gap-2">
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
                <h1 className="flex items-center justify-between">
                  <span>Education</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Graduation;
