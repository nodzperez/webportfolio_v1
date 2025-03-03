import { motion } from "framer-motion";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function FilCa() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Head Technical Engineer
        <span className="text-textGreen tracking-wide">
          @ FilCa Admixture Corp.
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium font-navFont text-textDark">
        May - August 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Developed and customized concrete mix designs, ensuring compliance
          with client requirements and quality standards.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Led a technical team to enhance production processes, improving
          product consistency and quality.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Worked closely with clients, providing technical support and
          recommendations to optimize their construction projects’ efficiency
          and longevity.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Developed reports and technical documentation for internal and client
          use, ensuring clear communication of product specifications and
          performance data.
        </li>
      </ul>
    </motion.div>
  );
}

export default FilCa;
