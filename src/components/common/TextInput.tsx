import React from "react";

interface Props{
  value: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<Props> = ({value, handleInput}) => {
  return (
    <input
      value={value}
      onChange={handleInput}
      className="border-2 p-3 w-full rounded border-black my-4 font-medium"
    />
  )
};

export default TextInput;