import React from "react";
import Wrapper from "../Wrappers/Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <div className="bg-[#fff] shadow-3xl">
        <div className="md:max-w-[64.25rem] mx-auto px-5 py-20">
          <h1 className="md:pt-[1.875rem] md:pb-[3.75rem] py-5 md:ml-[5.8748rem] md:mr-[0.625rem] text-[2.0625rem] leading-[2.5rem] md:text-[2.8125rem] font-light">
            You don’t just become something, you become someone
          </h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
