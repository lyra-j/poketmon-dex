import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../components/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/dex/detail" element={<Detail />} />
        {/* detail페이지로 넘어가는 방식은 queryString(?id=${포켓몬 id})
            '?'부터 시작을 하기 때문에 '/detail'뒤에 '/'는 기재하지 않는다.  */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
