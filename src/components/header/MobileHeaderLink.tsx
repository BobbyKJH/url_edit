import React from "react";
import { Link } from "react-router-dom";
/** Libs */
import pagePath from "@/libs/pagePath";
/** Hook */
import useHeader from "@/hook/useHeader";

interface Props {
  path: string;
  pathName: string;
}

const MobileHeaderLink: React.FC<Props> = ({ path, pathName }) => {
  const { handleCloseHeader } = useHeader();

  return (
    <Link 
      to={path} 
      className={`uppercase -m-2 block p-4 text-gray-500 hover:bg-gray-200 transition duration-500 ease-in-out
      ${pagePath(path) ? "bg-gray-200 text-black" : "bg-white"}`}
      onClick={handleCloseHeader}
    >
      {pathName}
    </Link>
  )
};

export default MobileHeaderLink;