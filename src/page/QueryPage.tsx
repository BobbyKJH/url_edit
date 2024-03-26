import React, { useState } from "react";
/** Jotai */
import { useSetAtom } from "jotai";
import { SnackAtom, severityEnum } from "@/atom/SnackAtom";
/** Component */
import Snack from "@/components/common/Snack";
import TextInput from "@/components/common/TextInput";
/** Libs */
import urlEdit from "@/libs/urlEdit";

const QueryPage: React.FC = () => {
  const [url, setUrl] = useState("");
  const setSnack = useSetAtom(SnackAtom);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setUrl(value);
  };

  /** URL Query 제거 기능 */
  const handleUrlEdit = (event: React.FormEvent) => {
    event.preventDefault();
    if(urlEdit(url, "?")){
      setUrl(url.substring(0, url.indexOf("?", 0)));
      setSnack({
        state: true,
        severity: severityEnum.SUCCESS,
        message: "Query 제거를 성공하였습니다."
      });
    }
    if(urlEdit(url, "#")){
      setUrl(url.substring(0, url.indexOf("#", 0)));
      setSnack({
        state: true,
        severity: severityEnum.SUCCESS,
        message: "Query 제거를 성공하였습니다."
      });
    }
    if(!urlEdit(url, "#") && !urlEdit(url, "?")) {
      setSnack({
        state: true,
        severity: severityEnum.ERROR,
        message: "Query가 존재하지 않습니다."
      });
    }
  };

  const handleLink = (event: React.FormEvent) => {
    event.preventDefault();
    if(!urlEdit(url, "?") && !urlEdit(url, "#")){
      /** URL Query 제거 후 복사 기능 */
      window.navigator.clipboard.writeText(url)
      setSnack({
        state: true,
        severity: severityEnum.SUCCESS,
        message: "URL 복사에 성공하였습니다."
      });
      /** URL OPEN */
      setTimeout(() => {
        window.open(url);
      }, 0);
    } else {
      setSnack({
        state: true,
        severity: severityEnum.ERROR,
        message: "Query를 제거해주시기 바랍니다."
      });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-5 uppercase">URL Query 제거</h1>
      
      <form defaultValue={url} onSubmit={url.includes("?") ? handleUrlEdit : handleLink}>
        <TextInput value={url} handleInput={handleChange}/>

        <button 
          type={urlEdit(url, "?") || urlEdit(url, "#") ? "submit" : "button"} 
          onClick={handleUrlEdit}
          disabled={!urlEdit(url, "?") && !urlEdit(url, "#")}
          className="w-6/12 absolute bottom-0 left-0 p-5 cursor-pointer bg-lime-400 text-white"
        >
          수정
        </button>
        <button 
          type={!urlEdit(url, "?") || !urlEdit(url, "#") ? "submit" : "button"}
          onClick={handleLink}
          disabled={urlEdit(url, "?") || urlEdit(url, "#") || url === ""}
          className="w-6/12 absolute bottom-0 right-0 p-5 cursor-pointer bg-blue-500 text-white hover:bg-blue-400 transition duration-500 ease-in-out"
        >
          열기
        </button>
      </form>
      <Snack />
    </div>
  )
};

export default QueryPage;