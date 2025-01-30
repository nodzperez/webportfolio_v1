import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function ArchiveCard() {
  return (
    <div className="w-full h-80 rounded-lg bg-[#01242e] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between items-center">
        <FaRegFolder className="text-4xl text-textGreen" />
        <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
      </div>
      <div>
        <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
          Title
        </h2>
        <p className="text-sm mt-3">Description of the thing</p>
      </div>
      <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex:wrap">
        <li>Software</li>
        <li>Software</li>
        <li>Software</li>
      </ul>
    </div>
  );
}
