import React from "react";
const FormRow = ({ label, children, error }) => {
  // dark:text-[#E2E8F0]
  return (
    <div className={`flex flex-col`}>
      <label
        htmlFor={`${label}`}
        className="font-medium text-stone-600 dark:text-[#e0e0e0] text-sm"
      >
        {label}
      </label>
      {children}
      <small className="text-red-500 text-sm  dark:text-[#E53E3E] py-2">
        {error}
      </small>
    </div>
  );
};

export default FormRow;
