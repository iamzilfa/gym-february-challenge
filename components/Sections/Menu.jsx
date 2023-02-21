import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const { default: Wrapper } = require("../Wrappers/Wrapper");

const Menu = () => {
  return (
    <Wrapper>
      <div className="bg-[#fff] shadow-3xl pt-20 pb-10">
        <div className="max-w-[64.25rem] mx-auto px-[20px]">
          <div className="grid md:grid-cols-3 gap-10 md:gap-5">
            <div>
              <h1 className="text-[#0077b3] text-[1.875rem] leading-[2.25rem] md:text-[2.375rem] font-light md:leading-[3.5rem] mb-7 md:mb-5">
                VU main menu
              </h1>
              <div className="bg-[#fff] md:shadow-4xl md:p-[30px] flex flex-col gap-3">
                {[
                  "Home",
                  "Education",
                  ,
                  "Research",
                  "About VU Amsterdam",
                  "University Library",
                  "VU Press Office",
                  "Alumni",
                ].map((e) => {
                  return (
                    <div className="flex items-center justify-between">
                      <span>{e}</span>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className="text-[#cc4100] text-[1.875rem] leading-[2.25rem] md:text-[2.375rem] font-light md:leading-[3.5rem] mb-5">
                Most searched
              </h1>
              <div className="bg-[#fff] md:shadow-4xl md:p-[30px] flex flex-col gap-3">
                {[
                  " Contact us",
                  "People finder",
                  "Bachelor's degree programmes",
                  "Master's degree programmes",
                  "Faculties",
                  "Professionals",
                  "Working at VU Amsterdam",
                ].map((e) => {
                  return (
                    <div className="flex items-center justify-between">
                      <span>{e}</span>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h1 className="text-[#008053] text-[1.875rem] leading-[2.25rem] md:text-[2.375rem] font-light md:leading-[3.5rem] mb-7 md:mb-5">
                Featured
              </h1>
              <div className="bg-[#fff] md:shadow-4xl md:p-[30px] flex flex-col gap-3">
                {["Campus tour", "Study guide", "VU Magazine"].map((item) => {
                  return (
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                      <span>
                        <FaArrowRight />
                      </span>
                    </div>
                  );
                })}
                <div className="flex items-center gap-2 mt-[85px]">
                  <span className="bg-[#0077b3] text-[#fff] p-[2px]">
                    <FaInstagram size={42} />
                  </span>
                  <span className="bg-[#0077b3] text-[#fff] p-[2px]">
                    <FaLinkedinIn size={42} />
                  </span>
                  <span className="bg-[#0077b3] text-[#fff] p-[2px]">
                    <FaFacebookF size={42} />
                  </span>
                  <span className="bg-[#0077b3] text-[#fff] p-[2px]">
                    <FaTwitter size={42} />
                  </span>
                  <span className="bg-[#0077b3] text-[#fff] p-[2px]">
                    <FaYoutube size={42} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Menu;
