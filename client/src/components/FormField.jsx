import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  isSurpriseMe,
  handleSurpriseMe,
  handleChange,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm fornt-medium text-gray-900"
        >
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue=""
        onChange={handleChange}
        required
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  outline-none focus:border-[#4649ff] focus:ring-[#4649ff] w-full p-3"
        }
      />
    </div>
  );
};

export default FormField;
