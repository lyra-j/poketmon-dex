import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({
  data,
  isSelected,
  selectedPokemon,
  setSelectedPokemon,
}) => {
  const navigate = useNavigate();
  const goToPokemonDetail = () => {
    navigate(`/detail?id=${data.id}`);
  };

  // ✅ 포켓몬 대쉬보드에 추가
  const handleAddPokemon = (e) => {
    e.stopPropagation();

    if (
      selectedPokemon.find((selectPokemon) => {
        return selectPokemon.id === data.id;
      })
    ) {
      alert(`${data.korean_name}, 이미 보유한 포켓몬입니다.`);
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert(`포켓몬은 최대 6마리까지 선택 할 수 있어요.`);
      return;
    }

    setSelectedPokemon([...selectedPokemon, { ...data, isSelected: true }]);
    alert(`${data.korean_name}이 추가되었습니다.`);
  };

  // ✅ 포켓몬 대쉬보드에서 삭제
  const handleRemovePokemon = (e) => {
    e.stopPropagation();

    const removePokemon = selectedPokemon.filter(
      (selectPokemon) => selectPokemon.id !== data.id
    );
    setSelectedPokemon(removePokemon);
    isSelected = false;
    alert(`${data.korean_name}이 삭제되었습니다.`);
  };

  return (
    <StPokemonCard onClick={goToPokemonDetail}>
      <PokemonCardImage src={data.img_url} alt={data.korean_name} />
      <PokemonCardName>{data.korean_name}</PokemonCardName>
      <PokemonCardNum>no.{data.id}</PokemonCardNum>
      {isSelected ? (
        <ToggleButton onClick={handleAddPokemon}>+ add</ToggleButton>
      ) : (
        <ToggleButton onClick={handleRemovePokemon}>- del</ToggleButton>
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
