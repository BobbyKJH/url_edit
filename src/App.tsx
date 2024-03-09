import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** Page */
import HomePage from "@/page/HomePage";
/** Style */
import { StyledEngineProvider } from "@mui/styled-engine";
import { Provider } from "jotai";

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </StyledEngineProvider>
  )
};

export default App;