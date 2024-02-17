import React, { useState } from "react";
import { HomaPagePaper } from "@/page/HomePage.styled"
import { Button, TextField } from "@mui/material";

const HomePage: React.FC = () => {
  const [url, setUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setUrl(value);
  };

  const handleUrlEdit = (event: React.FormEvent) => {
    event.preventDefault();
    if(url.includes("?")){
      setUrl(url.substring(0, url.indexOf("?", 0)))
    } else {
      console.log("hello")
    }
  }

  const handleLink = (event: React.FormEvent) => {
    event.preventDefault();
    window.open(url);

  };

  const editDisabled = !url.includes("?")

  const openDisabled = url.includes("?")

  return (
    <HomaPagePaper elevation={3}>
      <form defaultValue={url} onSubmit={url.includes("?") ? handleUrlEdit : handleLink}>
        <TextField
          value={url}
          onChange={handleChange}
          sx={{ width: "500px" }}
        />

        <Button type={url.includes("?") ? "submit" : "button"} onClick={handleUrlEdit}>Edit</Button>
        <Button type={!url.includes("?") ? "button" : "button"} onClick={handleLink}>OPEN</Button>
      </form>
    </HomaPagePaper>
  )
};

export default HomePage;