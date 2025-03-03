import { motion } from "framer-motion";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function T4HLLC() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Graphic Artist
        <span className="text-textGreen tracking-wide">
          <a href="https://www.trinity4health.com" target="_blank">
            @ T4H LLC
          </a>
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark font-navFont">
        May - August 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Created captivating visuals for marketing campaigns, contributing to
          cohesive brand engagement across social media channels.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <IoMdArrowDropright />
          </span>
          Worked collaboratively with the marketing team to design materials
          that increased audience interaction.
        </li>
      </ul>
    </motion.div>
  );
}

export default T4HLLC;
