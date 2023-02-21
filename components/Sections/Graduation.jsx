import { FaGraduationCap } from "react-icons/fa";
import Wrapper from "../Wrappers/Wrapper";
import { FaArrowRight, FaMedal } from "react-icons/fa";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { TbPuzzle } from "react-icons/tb";

const Graduation = () => {
  return (
    <Wrapper>
      <div className="relative">
        <div className="bg-[#FDFDFD] shadow-3xl">
          <div className="max-w-[64.25rem] mx-auto pt-10 pb-52">
            <div className="flex justify-between items-center">
              {[
                {
                  icon: FaGraduationCap,
                  title: "31.704 students",
                },
                {
                  icon: HiOutlineGlobeEuropeAfrica,
                  title: "5.190 international students",
                },
                {
                  icon: FaMedal,
                  title: "459 PhD defences",
                },
                {
                  icon: TbPuzzle,
                  title: "9 faculties",
                },
              ].map((e) => {
                return (
                  <div className="flex items-center gap-3">
                    <span>
                      <e.icon className="text-[2.1875rem] text-[#0077b3]" />
                    </span>
                    <span className="text-[1.125rem] leading-[1.2656rem] font-medium">
                      {e.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-[#FAF7F5] shadow-3xl pb-64">
          <div className="max-w-[64.25rem] mx-auto px-[20px] ml-[6.9995rem] mr-[112.005px] grid grid-cols-2 gap-6 absolute -mt-32 w-full">
            <div className="bg-[#fff] shadow-4xl p-[30px]">
              <h1 className="flex items-center justify-between">
                <span className="text-[#0077b3] text-[2.375rem] font-light leading-[3.5rem]">
                  Education
                </span>
                <span className="text-[#0077b3]">
                  <FaArrowRight size={28} />
                </span>
              </h1>
              <div className="mt-10 flex flex-col">
                {[
                  "Bachelor's programmes",
                  "Master's programmes",
                  "Honours programme",
                  "Education for professionals",
                  "Study guide",
                ].map((item) => {
                  return (
                    <div className="flex items-center justify-between">
                      <p className="item-[18px] leading-[1.875rem]">
                        {item}
                      </p>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-[#fff] shadow-4xl p-[30px]">
              <h1 className="flex items-center justify-between">
                <span className="text-[#0077b3] text-[2.375rem] font-light leading-[3.5rem]">
                  Research
                </span>
                <span className="text-[#0077b3]">
                  <FaArrowRight size={28} />
                </span>
              </h1>
              <div className="mt-10 flex flex-col">
                {[
                  "Research highlights",
                  "Valorisation",
                  "Our scientists",
                  "Prizes and distinctions",
                  "Interdisciplinary research institutes",
                ].map((item) => {
                  return (
                    <div className="flex items-center justify-between">
                      <p className="item-[1.125rem] leading-[1.875rem]">
                        {item}
                      </p>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Graduation;
