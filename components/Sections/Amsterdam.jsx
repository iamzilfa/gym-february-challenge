import React from "react";
import Wrapper from "../Wrappers/Wrapper";
import Black from "../../public/assets/images/black.webp";
import Red from "../../public/assets/images/red.webp";
import Image from "next/image";
import {
  FaAngleDown,
  FaArrowRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const Amsterdam = () => {
  return (
    <Wrapper>
      <div className="bg-[#fff] shadow-3xl py-[3.75rem]">
        <div className="max-w-[64.25rem] mx-auto px-[20px]">
          <h2 className="text-[#cc4100] text-[2.375rem] font-light leading-[3.5rem] pb-10">We are VU Amsterdam</h2>
        </div>
        <div>
          <div className="overflow-hidden">
            <div className="grid grid-cols-5 justify-center items-stretch gap-12 w-[2000px] overflow-hidden">
              <div className="">
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className=" object-cover object-center"
                />
                <div className="flex">
                  <div>
                    <h1 className="text-[#cc4100] text-[1.5rem] font-light leading-[2.25rem] ">
                      Vrije Schrijver (Writer in Residence)
                    </h1>
                    <p>Read more</p>
                  </div>
                  <p className="flex flex-col justify-end">
                    <FaArrowRight />
                  </p>
                </div>
              </div>

              <div>
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className="object-cover object-center pb-10"
                />
                <div className="flex">
                  <div>
                    <h1 className="text-[#cc4100] text-[1.5rem] font-light leading-[2.25rem] ">
                      Vrije Schrijver (Writer in Residence)
                    </h1>
                    <p>Read more</p>
                  </div>
                  <p className="flex flex-col justify-end">
                    <FaArrowRight />
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className="object-cover object-center pb-10"
                />
                <div className="flex">
                  <div>
                    <h1 className="text-[#cc4100] text-[1.5rem] font-light leading-[2.25rem] ">
                      Vrije Schrijver (Writer in Residence)
                    </h1>
                    <p>Read more</p>
                  </div>
                  <p className="flex flex-col justify-end pb-10">
                    <FaArrowRight />
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className="object-cover object-center pb-10"
                />
                <div className="flex">
                  <div>
                    <h1 className="text-[#cc4100] text-[1.5rem] font-light leading-[2.25rem] ">
                      Vrije Schrijver (Writer in Residence)
                    </h1>
                    <p>Read more</p>
                  </div>
                  <p className="flex flex-col justify-end pb-10">
                    <FaArrowRight />
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className="object-cover object-center pb-10"
                />
                <div className="flex">
                  <div>
                    <h1 className="text-[#cc4100] text-[1.5rem] font-light leading-[2.25rem] ">
                      Vrije Schrijver (Writer in Residence)
                    </h1>
                    <p>Read more</p>
                  </div>
                  <p className="flex flex-col justify-end">
                    <FaArrowRight />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-20">
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
    </Wrapper>
  );
};

export default Amsterdam;
