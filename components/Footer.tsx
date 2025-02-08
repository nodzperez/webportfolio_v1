import React from "react";
import { TbBrandGithub, TbBrandCodepen, TbBrandFigma } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialBehance } from "react-icons/sl";

const Footer = () => {
  return (
    <div>
      <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
        <a href="https://github.com/nodzperez" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>

        <a href="https://www.linkedin.com/in/nodnyl-perez/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://codepen.io/Nodz-Perez" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <TbBrandCodepen />
          </span>
        </a>
        <a href="https://behance.net/nodzperez" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <SlSocialBehance />
          </span>
        </a>
        <a
          href="https://www.figma.com/team_invite/redeem/8hxlfqxeANQ23XLKndXHbo"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <TbBrandFigma />
          </span>
        </a>
      </div>
      <div className="mdl:inline-flex sml:hidden items-center justify-center w-full py-6 gap-1 text-textDark font-navFont font-medium text-[12px] -mb-5">
        Website inspired by{" "}
        <a
          href="https://v4.brittanychiang.com"
          target="_blank"
          className=" hover:text-textGreen cursor-pointer duration-300"
        >
          Britanny Chiang.
        </a>
      </div>
      <div className="mdl:inline-flex sml:hidden items-center justify-center w-full gap-1 text-textDark font-navFont font-medium text-[12px] mb-8">
        Built with
        <a
          href="https://nextjs.org"
          target="_blank"
          className=" hover:text-textGreen cursor-pointer duration-300"
        >
          Next.JS
        </a>
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          className=" hover:text-textGreen cursor-pointer duration-300"
        >
          Tailwind CSS.{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
