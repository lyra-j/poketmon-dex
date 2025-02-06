import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const PokemonCard = ({ data }) => {
  const { handleAddPokemon, handleRemovePokemon } = useContext(PokemonContext);

  // ✅ 선택한 포켓몬의 상세페이지로 연결시켜주는 주소
  const navigate = useNavigate();
  const goToPokemonDetail = () => {
    navigate(`/dex/detail?id=${data.id}`);
  };

  return (
    <StPokemonCard onClick={goToPokemonDetail}>
      <PokemonCardImage src={data.img_url} alt={data.korean_name} />
      <PokemonCardName>{data.korean_name}</PokemonCardName>
      <PokemonCardNum>no.{data.id}</PokemonCardNum>
      <ButtonWrapper>
        {/* 추가/삭제 버튼 설정 */}
        {data.isSelected ? (
          <ToggleButton
            onClick={(e) => {
              e.stopPropagation();
              handleRemovePokemon(data);
            }}
          >
            - del
          </ToggleButton>
        ) : (
          <ToggleButton
            onClick={(e) => {
              e.stopPropagation();
              handleAddPokemon(data);
            }}
          >
            + add
          </ToggleButton>
        )}
      </ButtonWrapper>
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
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
  }
  transition: all 0.3s;
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
