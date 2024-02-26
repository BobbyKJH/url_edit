import React from "react";
/** Style */
import { TextField } from "@mui/material";

interface Props{
  input: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<Props> = ({input, handleInput}) => {
  return (
    <TextField
      value={input}
      onChange={handleInput}
      sx={{ width: "500px" }}
    />
  )
};

export default TextInput;