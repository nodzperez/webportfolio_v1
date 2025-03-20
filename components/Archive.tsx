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
          des="Redesigned the Tropezón website to improve usability, aesthetics, and brand consistency. Focused on enhancing user experience and responsiveness."
          listItem={["Figma", "", ""]}
          link="#"
        />
        <ArchiveCard
          title="Blender Animation"
          des="Recreated Key & Peele’s Substitute Teacher sketch in Blender, focusing on character animation, expressions, and comedic timing to bring the scene to life."
          listItem={["Blender", "Premiere Pro", ""]}
          link="https://youtu.be/csUpaok8I8A"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Binge Branding"
          des="Designed a brand identity for Binge, developing a logo, color scheme, and visual assets to establish a strong, recognizable presence."
          listItem={["Photoshop", "Illustrator", ""]}
          link="https://www.behance.net/gallery/219805507/Binge-Brand-Guidelines"
        />
        <ArchiveCard
          title="Binge Social Media Guidelines"
          des="Developed a comprehensive social media style guide for Binge, ensuring a consistent look, tone, and strategy across platforms."
          listItem={["Photoshop", "Illustrator", ""]}
          link="https://www.behance.net/gallery/219805211/Binge-Social-Media-Guidelines"
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
