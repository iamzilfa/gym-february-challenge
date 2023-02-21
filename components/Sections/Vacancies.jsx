import Wrapper from "../Wrappers/Wrapper";

const Vacancies = () => {
  return (
    <Wrapper>
      <div className="bg-[#faf7f5] shadow-3xl py-[60px] px-[20px]">
        <div className="max-w-[64.25rem] mx-auto">
          <div className="bg-[#0077B3] w-full flex items-center justify-between py-[2.8125rem] px-[3.75rem]">
            <div className="text-[#fff]">
              <h1 className="text-[1.4963rem] font-medium leading-[2.25rem]">
              Working at VU Amsterdam?
              </h1>
            </div>
            <div className="bg-[#FFFFFF] py-[0.9375rem] px-[30px]">
              <h2 className="text-[1.5rem] font-medium leading-[1.875rem]">
                Take a look at our vacancies!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Vacancies;
