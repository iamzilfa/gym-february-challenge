const { default: Wrapper } = require("../Wrappers/Wrapper");

const Master = () => {
  return (
    <Wrapper>
      <div className="bg-[#FDFDFD] shadow-3xl py-[60px] px-[20px]">
        <div className="max-w-[64.25rem] mx-auto">
          <div className="bg-[#0077B3] w-full flex items-center gap-20 py-[2.8125rem] px-[3.75rem]">
            <div className="text-[#fff]">
              <h1 className="text-[1.4963rem] font-medium leading-[2.25rem]">Do you also want to change your world?</h1>
            </div>
            <div className="bg-[#FFFFFF] py-[0.9375rem] px-[30px]">
              <h2 className="text-[1.5rem] font-medium leading-[1.875rem]">Visit the VU Master's Event</h2>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Master;
