import SectionTitle from "./SectionTitle";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";
import { profileImg } from "@/public/assets";

function About() {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hi! My name is Nodz, and I’m passionate about web development and
            graphic design. With a background in civil engineering, I bring a
            unique perspective to my creative projects, combining technical
            precision with artistic expression to create engaging and impactful
            designs.
          </p>
          <p>
            Fast-forward to today, and I’ve had the opportunity to gain
            experience in graphic design, civil engineering, and video editing
            across different roles. My main focus these days is creating
            impactful designs and developing engaging digital experiences that
            blend functionality with creativity.
          </p>
          <p>
            I’m also passionate about learning and exploring new ways to combine
            design and technology, recently diving into advanced vector
            techniques and experimenting with tools like p5.js for interactive
            projects.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoMdArrowDropright />
              </span>
              Javascript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoMdArrowDropright />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoMdArrowDropright />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoMdArrowDropright />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoMdArrowDropright />
              </span>
              Wordpress
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoMdArrowDropright />
              </span>
              Node.js
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImage"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
