import React, { useState } from "react";
/** Style */
import { Button, TextField } from "@mui/material";
import { HomaPagePaper } from "@/page/HomePage.styled"

const HomePage: React.FC = () => {
  const [url, setUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setUrl(value);
  };

  /** URL Query 제거 기능 */
  const handleUrlEdit = (event: React.FormEvent) => {
    event.preventDefault();
    if(url.includes("?")){
      setUrl(url.substring(0, url.indexOf("?", 0)))
    } else {
      alert("query가 존재하지 않습니다.")
    }
  }

  const handleLink = (event: React.FormEvent) => {
    event.preventDefault();
    if(!url.includes("?")){
      /** URL Query 복사 기능 */
      window.navigator.clipboard.writeText(url)
      /** URL OPEN */
      setTimeout(() => {
        window.open(url);
      }, 0)
    } else {
      alert("Query를 제거해주시기 바랍니다.")
    }
  };

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