import React from "react";

const InputContact = ({
  placeholder,
  key,
  name,
  value,
  onChange,
  onBlur,
  className,
}: {
  placeholder: string;
  key?: any;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
}) => {
  return (
    <input
      key={key}
      type="text"
      placeholder={placeholder}
      className={`w-full h-14 bg-gray-500/10 px-4 input input-bordered ${className}`}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default InputContact;
