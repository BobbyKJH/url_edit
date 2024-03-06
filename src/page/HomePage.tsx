import React, { useState } from "react";
/** Libs */
import urlEdit from "@/libs/urlEdit";
/** Style */
import { TextField } from "@mui/material";
import { HomaPagePaper, HomePageButtonGroup, HomePageUrlButton } from "@/page/HomePage.styled";

const HomePage: React.FC = () => {
  const [url, setUrl] = useState("");
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setUrl(value);
  };

  /** URL Query 제거 기능 */
  const handleUrlEdit = (event: React.FormEvent) => {
    event.preventDefault();
    if(urlEdit(url, "?")){
      setUrl(url.substring(0, url.indexOf("?", 0)))
    };
    if(urlEdit(url, "#")){
      setUrl(url.substring(0, url.indexOf("#", 0)))
    };
    if(!urlEdit(url, "#") && !urlEdit(url, "?")) {
      alert("query가 존재하지 않습니다.")
    };
  };

  const handleLink = (event: React.FormEvent) => {
    event.preventDefault();
    if(!urlEdit(url, "?")){
      /** URL Query 제거 후 복사 기능 */
      window.navigator.clipboard.writeText(url)
      /** URL OPEN */
      setTimeout(() => {
        window.open(url);
      }, 0);
    } else {
      alert("Query를 제거해주시기 바랍니다.")
    };
  };

  return (
    <HomaPagePaper maxWidth="lg">
      <h1>URL Query 제거</h1>
      
      <form defaultValue={url} onSubmit={url.includes("?") ? handleUrlEdit : handleLink}>
        <TextField
          value={url}
          onChange={handleChange}
          sx={{ width: "500px" }}
        />

        <HomePageButtonGroup>
          <HomePageUrlButton 
            type={urlEdit(url, "?") || urlEdit(url, "#") ? "submit" : "button"} 
            variant="contained" 
            onClick={handleUrlEdit}
            disabled={!urlEdit(url, "?") && !urlEdit(url, "#")}
          >
            수정
          </HomePageUrlButton>
          <HomePageUrlButton 
            type={!urlEdit(url, "?") || !urlEdit(url, "#") ? "submit" : "button"}
            variant="contained"
            color="success"
            onClick={handleLink}
            disabled={urlEdit(url, "?") || urlEdit(url, "#")}
          >
            열기
          </HomePageUrlButton>
        </HomePageButtonGroup>
      </form>
          </HomaPagePaper>
  )
};

export default HomePage;