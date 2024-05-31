import React from "react";
const FormRow = ({ label, children, error }) => {
  return (
    <div className={`mb-2 flex flex-col`}>
      <label
        htmlFor={`${label}`}
        className="font-medium text-stone-500 dark:text-[#E2E8F0] text-sm"
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
