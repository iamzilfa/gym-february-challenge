import Wrapper from "../Wrappers/Wrapper"

const Vacancies = () => {
  return (
    <Wrapper>
      <div className="bg-[#faf7f5] shadow-3xl py-[60px] px-[20px]">
        <div className="max-w-[64.25rem] mx-auto">
          <div className="bg-[#0077B3] w-full grid grid-cols-2 py-[2.8125rem] px-[3.75rem]">
            <div className="text-[#fff]">
              <h1>Working at VU Amsterdam?</h1>
            </div>
            <div className="bg-[#FFFFFF]">
              <h2>Take a look at our vacancies!</h2>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Vacancies