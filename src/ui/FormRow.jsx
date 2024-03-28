import React from "react";

const FormRow = ({ label, children, error }) => {
  return (
    <div className={`mb-5`}>
      <label htmlFor={`${label}`} className="font-medium text-stone-500">
        {label}
      </label>
      {children}
      <small className="text-red-500 text-sm">{error}</small>
    </div>
  );
};

export default FormRow;
