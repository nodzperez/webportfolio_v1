import { motion } from "framer-motion";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function SHS() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Lead Multimedia Editor
        <span className="text-textGreen tracking-wide">
          @ Summit Horizon Solutions
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
          Produced multimedia content for clients, consistently meeting
          deadlines and maintaining high standards.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Developed client proposals and whitepapers, communicating technical
          concepts clearly and effectively.
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

export default SHS;
