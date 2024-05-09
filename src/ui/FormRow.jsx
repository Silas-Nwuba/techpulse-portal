import React from "react";

const FormRow = ({ label, children, error }) => {
  return (
<<<<<<< HEAD
    <div className={`mb-5 flex flex-col`}>
=======
    <div className={`mb-5`}>
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
      <label
        htmlFor={`${label}`}
        className="font-medium text-stone-500 dark:text-[#E2E8F0] text-sm"
      >
        {label}
      </label>
      {children}
      <small className="text-red-500 text-sm font-medium dark:text-[#E53E3E]">
        {error}
      </small>
    </div>
  );
};

export default FormRow;
