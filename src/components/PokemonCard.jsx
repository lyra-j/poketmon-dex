import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({
  data,
  handleAddPokemon,
  isSelected,
  handleRemovePokemon,
}) => {
  const navigate = useNavigate();

  return (
    <StPokemonCard onClick={() => navigate(`/detail?id=${data.id}`)}>
      <PokemonCardImage src={data.img_url} alt={data.korean_name} />
      <PokemonCardName>{data.korean_name}</PokemonCardName>
      <PokemonCardNum>no.{data.id}</PokemonCardNum>
      {isSelected ? (
        <ToggleButton
          onClick={(e) => {
            e.stopPropagation();
            handleAddPokemon(data);
          }}
        >
          + add
        </ToggleButton>
      ) : (
        <ToggleButton
          onClick={(e) => {
            e.stopPropagation();
            handleRemovePokemon(data.id);
          }}
        >
          - del
        </ToggleButton>
      )}
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
  border-radius: 10px;
  padding: 20px;
`;

const PokemonCardImage = styled.img`
  margin-bottom: 15px;
`;

const PokemonCardName = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PokemonCardNum = styled.p`
  font-size: 12px;
  color: grey;
  margin: 10px 0px;
`;
const ToggleButton = styled.button`
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 6px 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
