import React from "react";
import { TbBrandGithub, TbBrandCodepen } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";

function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/nodzperez" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-tranlate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://www.linkedin.com/in/nodnyl-perez/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-tranlate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://codepen.io/Nodz-Perez" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-tranlate-y-2 transition-all duration-300">
            <TbBrandCodepen />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
}

export default LeftSide;
