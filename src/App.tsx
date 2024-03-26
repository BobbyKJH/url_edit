import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** Jotai */
import { Provider } from "jotai";
/** Component */
import Header from "@/components/header/Header";
/** Page */
import HomePage from "@/page/HomePage";
import QueryPage from "@/page/QueryPage";
import BrandPage from "@/page/BrandPage";
/** Style */
import "@/App.css";

const App: React.FC = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/query" element={<QueryPage/>}/>
          <Route path="/brand" element={<BrandPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};

export default App;