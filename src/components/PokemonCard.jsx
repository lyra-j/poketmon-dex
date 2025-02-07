import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeMyPokemon, addMyPokemon } from "../redux/pokemonSlice";

const PokemonCard = ({ data }) => {
  const dispatch = useDispatch();

  // ✅ 선택한 포켓몬의 상세페이지로 연결시켜주는 주소
  const navigate = useNavigate();
  const goToPokemonDetail = () => {
    navigate(`/dex/detail?id=${data.id}`);
  };

  const handleAddPokemon = (e) => {
    e.stopPropagation();
    dispatch(addMyPokemon(data));
  };

  const handleRemovePokemon = (e) => {
    e.stopPropagation();
    dispatch(removeMyPokemon(data));
  };

  return (
    <StPokemonCard onClick={goToPokemonDetail}>
      <PokemonCardImage src={data.img_url} alt={data.korean_name} />
      <PokemonCardName>{data.korean_name}</PokemonCardName>
      <PokemonCardNum>no.{data.id.toString().padStart(3, "0")}</PokemonCardNum>

      {/* 추가/삭제 버튼 설정 */}
      {data.isSelected ? (
        <ToggleButton onClick={handleRemovePokemon}>- del</ToggleButton>
      ) : (
        <ToggleButton onClick={handleAddPokemon}>+ add</ToggleButton>
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
