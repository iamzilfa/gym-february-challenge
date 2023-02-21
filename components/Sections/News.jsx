import Wrapper from "../Wrappers/Wrapper";
import { FaArrowRight } from "react-icons/fa";

const News = () => {
  return (
    <Wrapper>
      <div className="bg-[#FAF7F5] shadow-3xl">
        <div className="mx-auto py-[3.75rem] px-[1.25rem] max-w-[64.25rem]">
          <h1 className="mb-[1.5625rem] text-[#3b2171] text-[2.375rem] font-light leading-[3.5rem]">
            News
          </h1>
          <div className="flex items-center md:gap-[140px]">
            <div className="flex flex-col md:flex-1 gap-6">
              {[
                {
                  image: "/assets/images/war.jpg",
                  date: "08 Feb 2023",
                  note: "Earth quarkes Turkey and Syria",
                },
                {
                  image: "/assets/images/birds.png",
                  date: "15 Feb 2023",
                  note: "Robot bird gives singing lessons to zebra finches",
                },
              ].map((item) => {
                return (
                  <div className="flex flex-col gap-6">
                    <div className="flex space-x-4">
                      <img
                        src={item.image}
                        alt="war"
                        className="w-[284px] h-[216px] object-cover object-center"
                      />
                      <div className="relative">
                        <h1 className="text-[#3b2171] text-[18px] font-bold leading-[30px]">
                          {item.date}
                        </h1>
                        <p className="text-[1.4963rem] font-light leading-[1.875rem] mt-2">
                          {item.note}
                        </p>
                        <p className="absolute bottom-0 right-0">
                          <FaArrowRight />
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-24 md:w-[20.125rem]">
              {[
                {
                  image: "/assets/images/blue.jpeg",
                  date: "06 Feb 2023",
                  note: "EU grant to improve mental well-being of...",
                },
                {
                  image: "/assets/images/flats.jpeg",
                  date: "03 Feb 2023",
                  note: "'Sapiens' partnership ended",
                },
                {
                  image: "/assets/images/boss.png",
                  date: "31 Jan 2023",
                  note: "ERC Consolidator Grant for Wouter...",
                },
              ].map((item) => {
                return (
                  <div className="flex space-x-4">
                    <img
                      src={item.image}
                      alt="blue"
                      className="w-[113px] h-[86px] object-cover object-center"
                    />
                    <div className="relative">
                      <h1 className="text-[#3b2171] text-[18px] font-medium leading-[30px]">
                        {item.date}
                      </h1>
                      <p className="text-[1.125rem] font-light leading-[1.875rem] md:w-[]">
                        {item.note}
                      </p>
                      <p className="absolute bottom-0 right-0">
                        <FaArrowRight />
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 gap-3">
            <h1 className="text-[1.125rem] font-medium leading-[30px]">
              News overview
            </h1>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
