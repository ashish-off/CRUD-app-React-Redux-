import React from "react";
import Navbar from "./components/Navbar";
import CreateForm from "./pages/CreateForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./pages/Read";

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
