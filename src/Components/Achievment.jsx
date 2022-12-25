import React, { useRef, useState } from "react";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { RiAwardFill } from "react-icons/ri";
import CountUp from "react-countup";
import ScroolTrigger from "react-scroll-trigger";

const Achievment = () => {
  const [viewPort, setViewPort] = useState(false);
  const customerLogo = useRef(null);

  return (
    <section className="md:py-[5rem] py-[2rem]  w-full bg-slate-900">
      <div className="md:mx-[14rem] px-6 text-white ">
        <div className="md:text-center">
          <h1 data-aos='fade-right' className="text-5xl font-bold py-4">
            Our <span className="text-green-500">Achievement</span>
          </h1>
          <p data-aos='fade-right' data-aos-delay='100' className=" font-sans">
            Quibusdam veritatis qui omnis totam laboriosam harum magnam, ex
            quaerat cupiditate dicta. <br /> veritatis qui omnis totam
            laboriosam harum magnam, ex quaerat cupiditate
          </p>
        </div>
        <ScroolTrigger
          onEnter={() => setViewPort(true)}
          onExit={() => setViewPort(false)}
        >
          <div data-aos='fade-up' className="grid md:grid-cols-4 justify-between py-14">
            
            <div className="flex items-center p-4 justify-center">
              <FaGraduationCap size={50} />
              <div className="pl-4 ">
                <h1 className="text-5xl font-bold text-green-500">
                  {viewPort && <CountUp start={0} end={200} duration={2.75} />}+
                </h1>
                <p>STUDENTS</p>
              </div>
            </div>

            <div className="flex items-center p-4 justify-center">
              <RiAwardFill size={50} />
              <div className="pl-4">
                <h1 className="text-5xl font-bold text-green-500">
                  {viewPort && <CountUp start={0} end={165} duration={2.75} />}+
                </h1>
                <p>GRADUATE</p>
              </div>
            </div>

            <div className="flex items-center p-4 justify-center">
              <FaAward size={50} />
              <div className="pl-4 ">
                <h1 className="text-5xl font-bold text-green-500">
                  {viewPort && <CountUp start={0} end={158} duration={2.75} />}
                </h1>
                <p>AWARD WINNIG</p>
              </div>
            </div>

            <div className="flex items-center p-4 justify-center">
              <BsBookHalf size={50} />
              <div className="pl-4">
                <h1 className="text-5xl font-bold text-green-500">
                  {viewPort && <CountUp start={0} end={100} duration={2.75} />}
                </h1>
                <p>FACULTIES</p>
              </div>
            </div>
          </div>
        </ScroolTrigger>
      </div>
    </section>
  );
};

export default Achievment;
