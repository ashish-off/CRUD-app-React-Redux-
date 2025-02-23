import React from "react";
import Navbar from "./components/Navbar";
import CreateForm from "./components/CreateForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";

const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>

<Routes>
  <Route  path="/" element={<CreateForm />} />
  <Route  path="/read" element={<Read />} />
</Routes>

</BrowserRouter>
    </>
  );
};

export default App;
