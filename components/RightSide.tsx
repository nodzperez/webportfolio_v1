import React from "react";

function RightSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:nodnylperez@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">
          nodnylperez@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
}

export default RightSide;
