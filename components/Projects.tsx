import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import {
  project1,
  project2,
  project3,
  mockup1,
  mockup2,
  mockup3,
} from "@/public/assets";
import Modal from "./Modal";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    imageSrc: "",
    projectUrl: "",
  });

  const projects = [
    {
      id: 1,
      image: project1,
      mockup: mockup1,
      title: "Web Portfolio Version 1",
      description:
        "Built with HTML, Bootstrap, and AOS, this portfolio features smooth animations and a responsive design. It served as a starting point for showcasing my work.",
      url: "https://v1.nodzperez.com",
    },
    {
      id: 2,
      image: project2,
      mockup: mockup2,
      title: "Pool5.JS",
      description:
        "A pool game developed using p5.js for a school project. It simulates real-world physics, focusing on collision detection and user interaction.",
      url: "https://editor.p5js.org/nodzperez/full/mRrvpkEDb",
    },
    {
      id: 3,
      image: project3,
      mockup: mockup3,
      title: "Current Web Portfolio",
      description:
        "A modern portfolio created with Next.js, TypeScript, and React. It offers improved interactivity, performance, and a sleek design for a seamless user experience.",
      url: "https://nodzperez.com",
    },
  ];

  const openModal = (
    title: string,
    description: string,
    imageSrc: string,
    projectUrl: string
  ) => {
    setModalContent({ title, description, imageSrc, projectUrl });
    setShowModal(true);
  };

  return (
    <section id="project" className="max-w-container mx-auto px-6 py-24">
      <SectionTitle title="Recent Projects" titleNo="03" />
      <div className="w-full flex flex-col gap-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() =>
                openModal(
                  project.title,
                  project.description,
                  project.mockup.src,
                  project.url
                )
              }
              className="cursor-pointer hover:-translate-y-2 transition-transform duration-300 group"
            >
              <Image
                className="w-full h-full rounded-lg shadow-md"
                src={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          title={modalContent.title}
          description={modalContent.description}
          imageSrc={modalContent.imageSrc}
          projectUrl={modalContent.projectUrl}
        />
      )}
    </section>
  );
}

export default Projects;
