import Wrapper from "../Wrappers/Wrapper";
import Man from "../../public/assets/images/man.jpeg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Impact = () => {
  return (
    <Wrapper>
      <div className="relative">
        <div className="bg-[#FAF7F5] shadow-3xl pb-16">
          <div className="mx-auto pt-20 pb-10 px-[20px] ml-[6.9995rem] mr-[112.005px] max-w-[64.25rem]">
            <h1>Impact</h1>
          </div>
          <div>
            <Image
              src={Man}
              alt={Man}
              className="w-full object-cover object-center h-[575px]"
            />
          </div>
          <div className="mx-auto mb-16 px-[20px] ml-[6.9995rem] mr-[112.005px] max-w-[64.25rem]">
            <div className="pt-[2.8125rem] absolute -mt-[220px] py-[3.75rem] px-[3.75rem] bg-[#fff] ml-[15.437rem] mr-[15.437rem]">
              <h1 className="mb-10">Science to impact</h1>
              <p className="mb-10">
                An interview with entrepreneurial scientist Davide Iannuzzi,
                Chief Impact Officer of Vrije Universiteit Amsterdam
              </p>
              <div className="flex items-center">
                <span>Read more</span>
                <span>
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Impact;
