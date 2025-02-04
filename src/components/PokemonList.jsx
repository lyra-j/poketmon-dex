import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ selectedPokemon, setSelectedPokemon }) => {
  // ✅ 포켓몬 대쉬보드에 추가
  const handleAddPokemon = (pokemon) => {
    // e.stopPropagation();

    const isSelected = selectedPokemon.find((item) => {
      return item.id === pokemon.id; // true
    });

    if (isSelected) {
      alert(`이미 보유한 포켓몬입니다.`);
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert(`포켓몬은 최대 6마리까지 선택 할 수 있어요.`);
      return;
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  return (
    <PokemonListWrapper>
      {MOCK_DATA.map((data) => (
        <PokemonCard
          data={data}
          key={data.id}
          handleAddPokemon={handleAddPokemon}
        />
      ))}
    </PokemonListWrapper>
  );
};

export default PokemonList;

const PokemonListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;
