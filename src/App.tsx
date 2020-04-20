import "./App.css";

import React from "react";

import { Home } from "./components/Home/Home";
import { ThemeProvider } from "./context/theme/ThemeContext";




function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
