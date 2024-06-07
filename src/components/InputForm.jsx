import React from "react";

function InputForm({ lebal, name, type, placeholder, size , inputSize }) {
  return (
    <label className={`form-control w-full ${size} `}>
      <div className="label">
        <span className="label-text font-bold">{lebal}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`input input-bordered w-full ${size} ${inputSize} text-sm `}
      />
      <div className="label"></div>
    </label>
  );
}

export default InputForm;
