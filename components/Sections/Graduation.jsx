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
          <div className="md:max-w-[64.25rem] mx-auto pt-5 md:pt-10 pb-40 md:pb-52">
            <div className="flex justify-between md:items-center gap-3">
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
                  <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                    <span>
                      <e.icon className="text-[1.125rem] md:text-[2.1875rem] text-[#0077b3]" />
                    </span>
                    <span className="text-[16px] leading-[1.2656rem] md:text-[1.125rem] text-center md:leading-[1.2656rem] font-medium md:font-normal">
                      {e.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-[#FAF7F5] shadow-3xl pb-64">
          <div className="md:max-w-[64.25rem] mx-auto px-[20px] md:ml-[6.9995rem] md:mr-[112.005px] grid md:grid-cols-2 gap-4 md:gap-6 absolute -mt-32 w-full">
            <div className="bg-[#fff] shadow-4xl p-[30px]">
              <h1 className="flex items-center justify-between">
                <span className="text-[#0077b3] text-[2.375rem] font-light leading-[3.5rem]">
                  Education
                </span>
                <span className="text-[#0077b3]">
                  <FaArrowRight size={28} />
                </span>
              </h1>
              <div className="md:mt-10 flex flex-col">
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
              <div className="md:mt-10 flex flex-col">
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
