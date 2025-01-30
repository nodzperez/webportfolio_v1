import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import T4HLLC from "./works/T4HLLC";
import SHS from "./works/SHS";
import FilCa from "./works/FilCa";

const Experience = () => {
  const [workT4HLLC, setWorkT4HLLC] = useState(true);
  const [workfilCa, setWorkfilCa] = useState(false);
  const [workSHS, setWorkSHS] = useState(false);

  const handleT4HLLC = () => {
    setWorkT4HLLC(true);
    setWorkfilCa(false);
    setWorkSHS(false);
  };

  const handlefilCa = () => {
    setWorkT4HLLC(false);
    setWorkfilCa(true);
    setWorkSHS(false);
  };
  const handleSHS = () => {
    setWorkT4HLLC(false);
    setWorkfilCa(false);
    setWorkSHS(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:x-32 flex flex-col">
          <li
            onClick={handleT4HLLC}
            className={`${
              workT4HLLC
                ? "border-l-textGreen text-textGreen"
                : "border-l-textDark text-textDark"
            }  border-l-2 bg-transparent hover:bg-[#01242e] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            T4H
          </li>
          <li
            onClick={handlefilCa}
            className={`${
              workfilCa
                ? "border-l-textGreen text-textGreen"
                : "border-l-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#01242e] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            FilCa
          </li>
          <li
            onClick={handleSHS}
            className={`${
              workSHS
                ? "border-l-textGreen text-textGreen"
                : "border-l-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#01242e] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            SHS
          </li>
        </ul>
        {workT4HLLC && <T4HLLC />}
        {workfilCa && <FilCa />}
        {workSHS && <SHS />}
      </div>
    </section>
  );
};

export default Experience;
