import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../components/Detail";

const Router = () => {
  // 초기값 불러오기
  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const storedPokemon = localStorage.getItem("myPokemon");
    return storedPokemon ? JSON.parse(storedPokemon) : [];
  });

  // 로컬스토리지 저장
  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  // ✅ 포켓몬 대쉬보드에 추가
  const handleAddPokemon = (pokemon) => {
    // 이미 대시보드에 등록한 포켓몬인지 확인
    if (
      selectedPokemon.find((item) => {
        return item.id === pokemon.id;
      })
    ) {
      alert(`${pokemon.korean_name}, 이미 보유한 포켓몬입니다.`);
      return;
    }

    // 6마리 초과시 알림
    if (selectedPokemon.length >= 6) {
      alert(`포켓몬은 최대 6마리까지 선택 할 수 있어요.`);
      return;
    }

    setSelectedPokemon((prev) => [...prev, { ...pokemon, isSelected: true }]);
    alert(`${pokemon.korean_name}이 추가되었습니다.`);
    return;
  };

  // ✅ 포켓몬 대쉬보드에서 삭제
  const handleRemovePokemon = (pokemon) => {
    setSelectedPokemon((prev) => prev.filter((item) => item.id !== pokemon.id));
    alert(`${pokemon.korean_name}이 삭제되었습니다.`);
    return;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex"
          element={
            <Dex
              selectedPokemon={selectedPokemon}
              handleAddPokemon={handleAddPokemon}
              handleRemovePokemon={handleRemovePokemon}
            />
          }
        />
        <Route
          path="/detail/*"
          element={
            <Detail
              selectedPokemon={selectedPokemon}
              handleAddPokemon={handleAddPokemon}
              handleRemovePokemon={handleRemovePokemon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
