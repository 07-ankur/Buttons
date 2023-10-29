import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Buttons from "./pages/Buttons";

function App() {

  return (
    <>
      <Routes>
        <Route path="/buttons" element={<Buttons/>}/>
      </Routes>
    </>
  )
}

export default App
