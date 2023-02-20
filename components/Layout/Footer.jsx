import { FaArrowRight } from "react-icons/fa";
import Wrapper from "../Wrappers/Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div className="bg-[#0077b3] text-[#fff] shadow-3xl">
        <div className="max-w-[64.25rem] mx-auto px-[20px] flex flex-col gap-7 py-[30px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <h1>Privacy Statement</h1>
              <p>
                <FaArrowRight />
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h1>Privacy Statement</h1>
              <p>
                <FaArrowRight />
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h1>Privacy Statement</h1>
              <p>
                <FaArrowRight />
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h1>Privacy Statement</h1>
              <p>
                <FaArrowRight />
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h1>Privacy Statement</h1>
              <p>
                <FaArrowRight />
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h1>Privacy Statement</h1>
              <p>
                <FaArrowRight />
              </p>
            </div>
          </div>
          <div>
            <h1>Copyright © 2023 - Vrije Universiteit Amsterdam</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
