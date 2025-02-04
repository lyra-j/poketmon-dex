import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/MOCK_DATA";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const storedPokemon = localStorage.getItem("myPokemon");
    return storedPokemon ? JSON.parse(storedPokemon) : [];
  });

  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  const pokemonData = MOCK_DATA;

  // ✅ 포켓몬 대쉬보드에서 삭제
  const handleRemovePokemon = (id) => {
    setSelectedPokemon((prevList) =>
      prevList.filter((pokemon) => pokemon.id !== id)
    );
  };

  return (
    <DexWrapper>
      {/* 대쉬보드 (6장) */}
      <DashBoard
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={selectedPokemon}
        handleRemovePokemon={handleRemovePokemon}
      />

      {/* 포켓몬 리스트 */}
      <PokemonList
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </DexWrapper>
  );
};

export default Dex;

const DexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
