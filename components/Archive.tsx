import React from "react";
import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Projects
        </h2>
        <p className="text-sm font-navFont mt-2 text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Personal Branding"
          des="A cohesive visual identity reflecting my design style, including a custom logo, color palette, and typography for both digital and print."
          listItem={["Illustrator", "Photoshop", "InDesign"]}
          link="https://www.behance.net/gallery/219805835/Nodz-Personal-Branding"
        />
        <ArchiveCard
          title="Tropezon's Website Redesign"
          des="Lorem ipsum ipsum something"
          listItem={["Figma", "", ""]}
          link="#"
        />
        <ArchiveCard
          title="Blender Animation"
          des="Lorem ipsum ipsum something"
          listItem={["Blender", "Premiere Pro", ""]}
          link="#"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Binge Branding"
          des="Lorem ipsum ipsum something"
          listItem={["Photoshop", "Illustrator", ""]}
          link="https://www.behance.net/gallery/219805507/Binge-Brand-Guidelines"
        />
        <ArchiveCard
          title="Binge Social Media Guidelines"
          des="Lorem ipsum ipsum something"
          listItem={["Photoshop", "Illustrator", ""]}
          link="#"
        />
        <ArchiveCard
          title="Title Here"
          des="Lorem ipsum ipsum something"
          listItem={["Software", "Software", "Software"]}
          link="#"
        />
      </div>
    </div>
  );
};

export default Archive;
