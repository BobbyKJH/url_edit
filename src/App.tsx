import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** Jotai */
import { Provider } from "jotai";
/** Component */
import Header from "@/components/common/Header";
/** Page */
import HomePage from "@/page/HomePage";
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
          <Route path="/brand" element={<BrandPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};

export default App;