import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What&apos;s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get in Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I&apos;m always open to new opportunities, collaborations, or just a
        friendly chat about design and technology. Whether you have a project in
        mind, need a creative hand, or simply want to say hello, feel free to
        reach out!
      </p>
      <a href="mailto:nodnylperez@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
}

export default Contact;
