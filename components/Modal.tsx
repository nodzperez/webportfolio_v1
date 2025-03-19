import React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

interface ModalProps {
  onClose: () => void;
  title: string;
  description: string;
  imageSrc: string;
  projectUrl: string;
}

function Modal({
  onClose,
  title,
  description,
  imageSrc,
  projectUrl,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-[800px] h-[400px] flex overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <IoClose size={24} />
        </button>

        <div className="w-2/3 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={400}
            className="object-cover rounded-l-lg"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>

          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 py-2 px-6 bg-bodyColor text-white text-lg font-medium rounded-full self-start hover:bg-bodyHover transition"
          >
            Check out the project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
