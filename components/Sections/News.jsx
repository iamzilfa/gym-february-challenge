import Wrapper from "../Wrappers/Wrapper";
import War from "../../public/assets/images/war.jpg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const News = () => {
  return (
    <Wrapper>
      <div className="bg-[#FAF7F5] shadow-3xl">
        <div className="mx-auto py-[3.75rem] px-[1.25rem] max-w-[64.25rem]">
          <h1 className="mb-[1.5625rem] text-[#3b2171] text-[2.375rem] font-light leading-[3.5rem]">News</h1>
          <div className="flex gap-40 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex space-x-4">
                <Image src={War} alt="war" className="w-[284px] h-[216px] object-cover object-center" />
                <div className="relative">
                  <div>
                    <h1 className="text-[#3b2171] text-[18px] font-bold leading-[30px]">08 Feb 2023</h1>
                    <p className="text-[1.4963rem] font-light leading-[1.875rem] mt-2">Earth quarkes Turkey and Syria</p>
                    <p className="absolute bottom-0">
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Image src={War} alt="war"  className="w-[284px] h-[216px] object-cover object-center"/>
                <div>
                  <div>
                    <h1>08 Feb 2023</h1>
                    <p>Earth quarkes Turkey</p>
                    <p>
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-24">
              <div className="flex space-x-4">
                <Image src={War} alt="war"  className="w-[113px] h-[86px] object-cover object-center" />
                <div>
                  <div>
                    <h1 className="text-[#3b2171] text-[18px] font-bold leading-[30px]">08 Feb 2023</h1>
                    <p>Earth quarkes Turkey</p>
                    <p>
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Image src={War} alt="war" className="w-[113px] h-[86px] object-cover object-center" />
                <div>
                  <div>
                    <h1>08 Feb 2023</h1>
                    <p>Earth quarkes Turkey</p>
                    <p>
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Image src={War} alt="war" className="w-[113px] h-[86px] object-cover object-center" />
                <div>
                  <div>
                    <h1>08 Feb 2023</h1>
                    <p>Earth quarkes Turkey</p>
                    <p>
                      <FaArrowRight />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 gap-3">
            <h1>News overview</h1>
            <span><FaArrowRight /></span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
