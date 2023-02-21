import React, { useState } from "react";
import Wrapper from "../Wrappers/Wrapper";
import Black from "../../public/assets/images/black.webp";
import Red from "../../public/assets/images/red.webp";
import Image from "next/image";
import ManRed from "../../public/assets/images/manred.webp";
import WomanRed from "../../public/assets/images/womanred.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  FaAngleDown,
  FaArrowRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const Amsterdam = () => {
  const [slide, setSlide] = useState();
  return (
    <Wrapper>
      <div className="bg-[#fff] shadow-3xl py-[3.75rem]">
        <div className="max-w-[64.25rem] mx-auto px-[20px]">
          <h2 className="text-[#cc4100] text-[1.875rem] md:text-[2.375rem] font-light leading-[2.25rem] md:leading-[3.5rem] pb-10">
            We are VU Amsterdam
          </h2>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={3.5}
            onSwiper={(slide) => setSlide(slide)}
            loop={true}
          >
            <div className="overflow-hidden">
              <div className="flex justify-center gap-4 items-stretch w-[2000px] -ml-[300px]">
                <SwiperSlide className="w-[300px]">
                  {" "}
                  <Image
                    src={Black}
                    alt="black"
                    className="object-cover pb-10 object-center w-[16.8125rem] h-[22.4375rem]"
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
                </SwiperSlide>

                <SwiperSlide className="w-[300px]">
                  {" "}
                  <Image
                    src={Red}
                    alt="Red"
                    className="object-cover object-center pb-10 w-[16.8125rem] h-[22.4375rem]"
                  />
                  <div className="flex">
                    <div>
                      <h1 className="text-[#cc4100] text-[1.5rem] font-light leading-[2.25rem] ">
                        VU Dream Teams
                      </h1>
                      <p>Read more</p>
                    </div>
                    <p className="flex flex-col justify-end">
                      <FaArrowRight />
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="w-[300px]">
                  {" "}
                  <Image
                    src={ManRed}
                    alt="ManRed"
                    className="object-cover object-center pb-10 w-[16.8125rem] h-[22.4375rem]"
                  />
                  <div className="flex">
                    <div>
                      <h1 className="text-[#cc4100] text-[1.5rem] font-light leading-[2.25rem] ">
                        Gravitation Grant recipient Frank van Harmelen
                      </h1>
                      <p>Read more</p>
                    </div>
                    <p className="flex flex-col justify-end pb-10">
                      <FaArrowRight />
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="w-[300px]">
                  {" "}
                  <Image
                    src={WomanRed}
                    alt="WomanRed"
                    className="object-cover object-center pb-10 w-[16.8125rem] h-[22.4375rem]"
                  />
                  <div className="flex">
                    <div>
                      <h1 className="text-[#cc4100] text-[1.5rem] font-light leading-[2.25rem] ">
                        NWO Spinoza Prize winner Yvette van Kooyk
                      </h1>
                      <p>Read more</p>
                    </div>
                    <p className="flex flex-col justify-end pb-10">
                      <FaArrowRight />
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="w-[300px] hover:bg-white">
                  {" "}
                  <Image
                    src={Black}
                    alt="black"
                    className="object-cover object-center pb-10 w-[16.8125rem] h-[22.4375rem]"
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
                </SwiperSlide>
              </div>
            </div>
          </Swiper>

          <div className="flex items-center justify-end mt-20">
            <div className="flex items-center justify-end gap-6 bg-[#FCD3B6] p-4">
              <span>
                <FaAngleLeft onClick={() => slide.slidePrev()} size={28} />
              </span>
              <span>
                <FaAngleRight onClick={() => slide.slideNext()} size={28} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Amsterdam;
