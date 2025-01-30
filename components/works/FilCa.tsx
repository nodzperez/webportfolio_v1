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
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2023 - August 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Something here, description of the job
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Something here, description of the job
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Something here, description of the job
        </li>
      </ul>
    </motion.div>
  );
}

export default FilCa;
