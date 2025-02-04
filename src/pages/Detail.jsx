import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";

const Detail = () => {
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
