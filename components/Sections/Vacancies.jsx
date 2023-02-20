import Wrapper from "../Wrappers/Wrapper";

const Vacancies = () => {
  return (
    <Wrapper>
      <div className="bg-[#faf7f5] shadow-3xl py-[60px] px-[20px]">
        <div className="max-w-[64.25rem] mx-auto">
          <div className="bg-[#0077B3] w-full flex items-center gap-20 py-[2.8125rem] px-[3.75rem]">
            <div className="text-[#fff]">
              <h1 className="text-[1.4963rem] font-normal leading-[2.25rem]">
              Working at VU Amsterdam?
              </h1>
            </div>
            <div className="bg-[#FFFFFF] py-[0.9375rem] px-[30px]">
              <h2 className="text-[1.5rem] font-normal leading-[1.875rem]">
                Visit the VU Master's Event
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Vacancies;
