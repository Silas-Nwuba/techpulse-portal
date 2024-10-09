import React from "react";
const FormRow = ({ label, children, error }) => {
  return (
    <div className={`flex flex-col`}>
      <div className="flex items-center gap-1">
        <label
          htmlFor={`${label}`}
          className="font-medium flex text-stone-[#000000] dark:text-[#d0d6e1] text-[16px] mb-1"
        >
          {label}
        </label>
        <span className="text-red-600  dark:text-[#d0d6e1]">*</span>
      </div>

      {children}
      <small className="text-red-500 text-sm  dark:text-[#E53E3E] py-2">
        {error}
      </small>
    </div>
  );
};

export default FormRow;
