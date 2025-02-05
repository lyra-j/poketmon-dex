import React, { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";
import MOCK_DATA from "../data/MOCK_DATA";

const Detail = () => {
  const { selectedPokemon, handleAddPokemon, handleRemovePokemon } =
    useContext(PokemonContext);
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const pokemonId = params.get("id");

  const selectPokemon = MOCK_DATA.find((data) => {
    return data.id === +pokemonId;
  });

  return (
    <DetailWrapper>
      <DetailImage
        src={selectPokemon.img_url}
        alt={selectPokemon.korean_name}
      />
      <DetailTitle>{selectPokemon.korean_name}</DetailTitle>
      <DetailDscription>타입 : {selectPokemon.types}</DetailDscription>
      <DetailDscription>{selectPokemon.description}</DetailDscription>
      <StButton onClick={() => navigate("/dex")}>돌아가기</StButton>

      {selectedPokemon.find((pokemon) => pokemon.id === selectPokemon.id) ? (
        <ToggleButton onClick={() => handleRemovePokemon(selectPokemon)}>
          - del
        </ToggleButton>
      ) : (
        <ToggleButton onClick={() => handleAddPokemon(selectPokemon)}>
          + add
        </ToggleButton>
      )}
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const DetailImage = styled.img`
  width: 200px;
`;
const DetailTitle = styled.h3`
  font-size: 24px;
  color: red;
  font-weight: 700;
  margin: 20px;
`;
const DetailDscription = styled.p`
  margin: 14px;
`;
const StButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #181818;
  color: white;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  font-size: 20px;

  &:hover {
    background-color: #474747;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div``;
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
