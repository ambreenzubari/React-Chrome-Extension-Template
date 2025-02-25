import React from "react";
import "../assets/tailwind.css";

const Popup = () => {
  return (
    <div className="doc-ai-prefix">
      <div className="w-[200px] p-4 bg-blue-400 rounded-lg shadow-lg">
        <p className="text-[15px] text-white font-poppins">
          Please click the <b>BLA BLA</b> icon to get access to the features.
        </p>
      </div>
    </div>
  );
};

export default Popup;
