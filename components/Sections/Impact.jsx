import Wrapper from "../Wrappers/Wrapper";
import Man from "../../public/assets/images/man.jpeg";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

const Impact = () => {
  return (
    <Wrapper>
      <div className="relative">
        <div className="bg-[#FAF7F5] shadow-3xl pb-40">
          <div className="mx-auto pt-20 pb-10 px-[20px] ml-[6.9995rem] mr-[112.005px] max-w-[64.25rem]">
            <h1 className="text-[#cc4100] text-[2.375rem] font-light leading-[3.5rem]">
              Impact
            </h1>
          </div>
          <div>
            <Image
              src={Man}
              alt={Man}
              className="w-full object-cover object-center h-[575px]"
            />
          </div>
          <div className="mx-auto mb-16 px-[20px] ml-[6.9995rem] mr-[112.005px] max-w-[64.25rem]">
            <div className="pt-[2.8125rem] absolute -mt-[220px] px-[3.75rem] bg-[#fff] ml-[15.437rem] mr-[15.437rem]">
              <h1 className="mb-10 text-[1.5rem] font-light leading-[2.25rem] text-[#cc4100]">Science to impact</h1>
              <p className="mb-7 text-[18px] leading-[30px] w-[28.5rem]">
                An interview with entrepreneurial scientist Davide Iannuzzi,
                Chief Impact Officer of Vrije Universiteit Amsterdam
              </p>
              <div className="flex items-center gap-4">
                <span>Read more</span>
                <span>
                  <FaArrowRight />
                </span>
              </div>
              <div className="flex items-center justify-end gap-4 -mr-[60px] -mb-[0.3125rem]">
                <div className="flex items-center">
                  <RxDotFilled className="text-[#cc4100] text-[4.375rem]" />
                  <RxDotFilled className="text-[#e8692d] text-[2.1875rem]" />
                  <RxDotFilled className="text-[#e8692d] text-[2.1875rem]" />
                  <RxDotFilled className="text-[#e8692d] text-[2.1875rem]" />
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center justify-end gap-6 bg-[#FCD3B6] p-4">
                    <span>
                      <FaAngleLeft size={28} />
                    </span>
                    <span>
                      <FaAngleRight size={28} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Impact;
