import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { project1, project2, projectHolder } from "@/public/assets";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Projects() {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects" titleNo="03" />
      <div className="w-full flex flex-col justify-end gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          {/* https://editor.p5js.org/nodzperez/full/mRrvpkEDb */}
          <div data-fancybox data-src="#" className="cursor-pointer">
            <Image className="w-full h-full" src={project2} alt="proj2" />
          </div>
          <div data-fancybox data-src="#" className="cursor-pointer">
            <Image className="w-full h-full" src={project1} alt="proj1" />
          </div>
          <div data-fancybox data-src="#" className="cursor-pointer">
            <Image className="w-full h-full" src={projectHolder} alt="proj1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
