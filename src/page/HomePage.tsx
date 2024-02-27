import React, { useState } from "react";
/** Style */
import { Button, TextField } from "@mui/material";
import { HomaPagePaper, HomePageButtonGroup } from "@/page/HomePage.styled";

const HomePage: React.FC = () => {
  const [url, setUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setUrl(value);
  };

  /** URL Includes 조건 */
  const urlEdit = (string: string) => {
    return url.includes(string);
  }

  /** URL Query 제거 기능 */
  const handleUrlEdit = (event: React.FormEvent) => {
    event.preventDefault();
    if(urlEdit("?")){
      setUrl(url.substring(0, url.indexOf("?", 0)))
    }
    if(urlEdit("#")){
      setUrl(url.substring(0, url.indexOf("#", 0)))
    }
    if(!urlEdit("#") && !urlEdit("?")) {
      alert("query가 존재하지 않습니다.")
    }
  }

  const handleLink = (event: React.FormEvent) => {
    event.preventDefault();
    if(!urlEdit("?")){
      /** URL Query 제거 후 복사 기능 */
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

        <HomePageButtonGroup>
          <Button type={urlEdit("?") || urlEdit("#") ? "submit" : "button"} variant="contained" onClick={handleUrlEdit}>Edit</Button>
          <Button type={!urlEdit("?") || !urlEdit("#") ? "button" : "button"} onClick={handleLink}>OPEN</Button>
        </HomePageButtonGroup>

      </form>
    </HomaPagePaper>
  )
};

export default HomePage;