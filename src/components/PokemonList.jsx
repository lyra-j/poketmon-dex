import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <PokemonListWrapper>
      {MOCK_DATA.map((data) => (
        <PokemonCard key={data.id} data={data} />
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
