import Wrapper from "../Wrappers/Wrapper";
import Man from "../../public/assets/images/man.jpeg";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

const Impact = () => {
  return (
    <Wrapper>
      <div className="relative">
        <div className="bg-[#FAF7F5] shadow-3xl pb-10 md:pb-40">
          <div className="mx-auto py-5 md:pt-20 md:pb-10 px-5 md:px-[20px] md:ml-[6.9995rem] md:mr-[112.005px] max-w-[64.25rem]">
            <h1 className="text-[#cc4100] text-[1.875rem] md:text-[2.375rem] font-light leading-[2.25rem] md:leading-[3.5rem]">
              Impact
            </h1>
          </div>
          <div className="relative md:static">
            <div>
              <Image
                src={Man}
                alt={Man}
                className="w-full object-cover object-center h-[11.75rem] md:h-[575px]"
              />
            </div>
            <div className="bloc flex items-center justify-end absolute bottom-0 right-0 md:hidden">
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
          <div className="mx-auto md:mb-16 md:px-[20px] md:ml-[6.9995rem] md:mr-[7.0003rem] md:max-w-[64.25rem]">
            <div className="pt-[2.8125rem] pb-[2.8125rem] md:pb-0 md:absolute md:-mt-[13.75rem] md:px-[3.75rem] px-[1.25rem] bg-[#fff] md:ml-[15.437rem] md:mr-[15.437rem] imp">
            <div className="hidden md:border-b md:-mx-[3.75rem] md:-mt-9 md:mb-10 border-b-black h-4"></div>
              <h1 className="mb-10 text-[1.5rem] font-light leading-[2.25rem] text-[#cc4100]">
                Science to impact
              </h1>
              <p className="mb-7 text-[18px] leading-[30px] md:w-[28.5rem]">
                An interview with entrepreneurial scientist Davide Iannuzzi,
                Chief Impact Officer of Vrije Universiteit Amsterdam
              </p>
              <div className="flex items-center gap-4">
                <span className="font-medium text-[1.125rem] leading-[1.875rem]">
                  Read more
                </span>
                <span>
                  <FaArrowRight />
                </span>
              </div>
              <div className="md:flex md:items-center md:justify-end md:gap-4 md:-mr-[60px] md:-mb-[0.3125rem]">
                <div className="hidden  md:flex md:items-center">
                  <RxDotFilled className="text-[#cc4100] text-[4.375rem]" />
                  <RxDotFilled className="text-[#e8692d] text-[2.1875rem]" />
                  <RxDotFilled className="text-[#e8692d] text-[2.1875rem]" />
                  <RxDotFilled className="text-[#e8692d] text-[2.1875rem]" />
                </div>
                <div className="hidden md:flex md:items-center md:justify-end">
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
