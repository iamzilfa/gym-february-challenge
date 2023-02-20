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
          <h2 className="mb-[1.5625rem] text-[#CC4100]">We are VU Amsterdam</h2>
        </div>
        <div>
          <div className="max-w-[64.25rem] mx-auto px-[20px]">
            <div className="flex -translate-x-[30px] justify-center items-stretch gap-10">
              <div className="">
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className=" object-cover object-center"
                />
                <h1>VU Dream Teams</h1>
                <p>
                  <FaArrowRight />
                </p>
              </div>

              <div>
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className="object-cover object-center"
                />
                <h1>VU Dream Teams</h1>
                <p>
                  <FaArrowRight />
                </p>
              </div>
              <div>
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className="object-cover object-center"
                />
                <h1>VU Dream Teams</h1>
                <p>
                  <FaArrowRight />
                </p>
              </div>
              <div>
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className="object-cover object-center"
                />
                <h1>VU Dream Teams</h1>
                <p>
                  <FaArrowRight />
                </p>
              </div>
              <div>
                {" "}
                <Image
                  src={Black}
                  alt="black"
                  className="object-cover object-center"
                />
                <h1>VU Dream Teams</h1>
                <p>
                  <FaArrowRight />
                </p>
              </div>
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
    </Wrapper>
  );
};

export default Amsterdam;
