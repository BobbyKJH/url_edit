import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** Jotai */
import { Provider } from "jotai";
/** Page */
import HomePage from "@/page/HomePage";
import BrandPage from "@/page/BrandPage";
/** Style */
import { StyledEngineProvider } from "@mui/styled-engine";

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/brand" element={<BrandPage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </StyledEngineProvider>
  )
};

export default App;