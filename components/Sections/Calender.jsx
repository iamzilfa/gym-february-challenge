import Wrapper from "../Wrappers/Wrapper";
import { FaAngleDown, FaArrowRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Calender = () => {
  return (
    <Wrapper>
      <div className="bg-[#fff] shadow-3xl">
        <div className="max-w-[64.25rem] py-[60px] px-[20px] mx-auto">
          <div className="flex justify-between items-center">
            <h1>Calendar</h1>
            <div className="flex gap-5">
              <div className="shadow-5xl bg-[#fff] flex items-center gap-16 p-4">
                <h1>All categories</h1>
                <span className="mt-1">
                  <FaAngleDown />
                </span>
              </div>
              <div className="shadow-5xl bg-[#fff] flex items-center gap-40 p-4">
                <h1>Date</h1>
                <span className="mt-1">
                  <FaAngleDown />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-20 mt-16">
            <div>
              <h1 className="border-b">PhD Defences</h1>

              <p>20 February 2023</p>
              <p>PhD defence by T.J.H.</p>
              <p>Jonkers</p>
            </div>
            <div>
              <h1>PhD Defences</h1>
              <hr />
              <p>20 February 2023</p>
              <p>PhD defence by T.J.H.</p>
              <p>Jonkers</p>
            </div>
            <div>
              <h1>PhD Defences</h1>
              <hr />
              <p>20 February 2023</p>
              <p>PhD defence by T.J.H.</p>
              <p>Jonkers</p>
            </div>
            <div>
              <h1>PhD Defences</h1>
              <hr />
              <p>20 February 2023</p>
              <p>PhD defence by T.J.H.</p>
              <p>Jonkers</p>
            </div>
          </div>
          <div className="border-t mt-20 flex justify-between">
            <div className="flex items-center gap-6">
              <h1>View calendar</h1>
              <span><FaArrowRight /></span>
            </div>
            <div className="flex items-center gap-6 bg-[#dff2fd] p-4">
                <span><FaAngleLeft size={28} /></span>
                <span><FaAngleRight size={28} /></span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Calender;
