const { default: Wrapper } = require("../Wrappers/Wrapper");

const Master = () => {
  return (
    <Wrapper>
      <div className="bg-[#FDFDFD] shadow-3xl py-[60px] px-[20px]">
        <div className="max-w-[64.25rem] mx-auto">
          <div className="bg-[#0077B3] w-full flex flex-col md:flex-row items-center justify-between pt-[1.875rem] py-[2.8125rem] px-5 md:py-[2.8125rem] md:px-[3.75rem]">
            <div className="text-[#fff]">
              <h1 className="text-[1.3725rem] leading-[2.0587rem] pb-[2.1875rem] md:pb-0 md:text-[1.4963rem] font-medium md:leading-[2.25rem] text-center md:text-start">Do you also want to change your world?</h1>
            </div>
            <div className="bg-[#FFFFFF] py-[0.9375rem] px-[30px]">
              <h2 className="text-[1.5rem] md:text-[1.5rem] font-medium leading-[1.875rem] text-center md:text-start">Visit the VU Master's Event</h2>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Master;
