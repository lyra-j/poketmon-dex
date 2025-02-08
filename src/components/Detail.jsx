import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { removeMyPokemon, addMyPokemon } from "../redux/pokemonSlice";

const Detail = () => {
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const pokemonId = params.get("id");

  const selectPokemon = pokemonData.find((data) => {
    return data.id === +pokemonId;
  });

  return (
    <DetailWrapper>
      <DetailImage
        src={selectPokemon.img_url}
        alt={selectPokemon.korean_name}
      />
      <DetailTitle>{selectPokemon.korean_name}</DetailTitle>
      <DetailDscription>
        타입 : {selectPokemon.types.join(", ")}
      </DetailDscription>
      <DetailDscription>{selectPokemon.description}</DetailDscription>
      <StButton onClick={() => navigate("/dex")}>돌아가기</StButton>

      {selectedPokemon.find((pokemon) => pokemon.id === selectPokemon.id) ? (
        <ToggleButton onClick={() => dispatch(removeMyPokemon(selectPokemon))}>
          - del
        </ToggleButton>
      ) : (
        <ToggleButton onClick={() => dispatch(addMyPokemon(selectPokemon))}>
          + add
        </ToggleButton>
      )}
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  width: 100%;
  height: 100vh;
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
