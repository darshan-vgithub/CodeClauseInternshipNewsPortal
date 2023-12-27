import React from "react";


import News from "./components/News";
import "./app.css";
import { NewsContextProvider } from "./NextContext";

function App() {
  return (
    <NewsContextProvider>
     <News/>
    </NewsContextProvider>
  );
}

export default App;
