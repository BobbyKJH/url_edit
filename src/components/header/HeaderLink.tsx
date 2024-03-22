import React from "react";
import { Link } from "react-router-dom";
/** Libs */
import pagePath from "@/libs/pagePath";

interface Props {
  path: string;
  pathName: string;
}

const HeaderLink: React.FC<Props> = ({ path, pathName }) => {
  return (
    <Link 
      to={path}
      className={
        `${pagePath(path) ? 'border-black text-indigo-600' : 'border-transparent text-gray-700 hover:border-black hover:text-indigo-600'} 
        relative z-10 w-40 flex items-center border-b-2 text-xs font-black transition-colors duration-300 ease-out justify-center uppercase`
      }
    >
      {pathName}
    </Link>
  )
};

export default HeaderLink;