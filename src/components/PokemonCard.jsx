import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ data, handleAddPokemon }) => {
  const navigate = useNavigate();

  return (
    <StPokemonCard onClick={() => navigate(`/detail?id=${data.id}`)}>
      <img src={data.img_url} alt={data.korean_name} />
      <h3>{data.korean_name}</h3>
      <p>no.{data.id}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleAddPokemon(data);
        }}
      >
        + add
      </button>
    </StPokemonCard>
  );
};

export default PokemonCard;

const StPokemonCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  width: 170px;
  height: 250px;
`;
