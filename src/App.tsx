import React from "react";
import Navbar from "./components/Navbar";
import CreateForm from "./components/CreateForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>

<Routes>
  <Route  path="/" element={<CreateForm />} />
</Routes>

</BrowserRouter>
    </>
  );
};

export default App;
