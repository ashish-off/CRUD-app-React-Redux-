import React from "react";
import Navbar from "./components/Navbar";
import CreateForm from "./pages/CreateForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./pages/Read";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/create" element={<CreateForm />} />
          <Route path="/" element={<Read />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
