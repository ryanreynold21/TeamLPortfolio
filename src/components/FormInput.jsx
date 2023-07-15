import React, { useState } from "react";

const FormInput = ({ name }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="w-full relative overflow-hidden">
      <input
        type="text"
        placeholder={`${name} *`}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={`w-full outline-none  py-2 border-b focus:border-b-0 border-slate-600 focus:border-[#d9832e] ${
          isFocus ? "" : ""
        } `}
      />
      <div
        className={`h-[2px] w-full bg-[#d9832e] duration-500 ${
          isFocus ? "ml-0" : "-ml-[690px]"
        }`}
      ></div>
    </div>
  );
};

export default FormInput;
