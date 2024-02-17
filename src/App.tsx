import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** Page */
import HomePage from "@/page/HomePage";
/** Style */
import { StyledEngineProvider } from "@mui/styled-engine";

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  )
};

export default App;