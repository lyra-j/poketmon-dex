import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../components/Detail";
import { PokemonProvier } from "../context/PokemonContext";

const Router = () => {
  return (
    <PokemonProvier>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvier>
  );
};

export default Router;
