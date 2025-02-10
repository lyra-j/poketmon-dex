import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const PokemonCard = ({ data }) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  // ✅ 선택한 포켓몬의 상세페이지로 연결시켜주는 주소
  const navigate = useNavigate();
  const goToPokemonDetail = () => {
    navigate(`/dex/detail?id=${data.id}`);
  };

  // ✅ 포켓몬 대쉬보드에 추가
  const handleAddPokemon = (e) => {
    e.stopPropagation();

    // ❔이미 대시보드에 등록한 포켓몬인지 확인
    if (
      selectedPokemon.find((item) => {
        return item.id === data.id;
      })
    ) {
      alert(`${data.korean_name}, 이미 보유한 포켓몬입니다.`);
      return;
    }

    // ❕6마리 초과시 알림
    if (selectedPokemon.length >= 6) {
      alert(`포켓몬은 최대 6마리까지 선택 할 수 있어요.`);
      return;
    }

    setSelectedPokemon((prev) => [...prev, { ...data, isSelected: true }]);
    alert(`${data.korean_name}이 추가되었습니다.`);
    return;
  };

  // ✅ 포켓몬 대쉬보드에서 삭제
  const handleRemovePokemon = (e) => {
    e.stopPropagation();

    setSelectedPokemon((prev) => prev.filter((item) => item.id !== data.id));
    alert(`${data.korean_name}이 삭제되었습니다.`);
    return;
  };

  return (
    <StPokemonCard onClick={goToPokemonDetail}>
      <PokemonCardImage src={data.img_url} alt={data.korean_name} />
      <PokemonCardName>{data.korean_name}</PokemonCardName>
      <PokemonCardNum>no.{data.id}</PokemonCardNum>
      <ButtonWrapper>
        {/* 대쉬보드에 선택된 포켓몬인지 확인 후 추가/삭제 버튼 표출 */}
        {data.isSelected ? (
          <ToggleButton onClick={handleRemovePokemon}>- del</ToggleButton>
        ) : (
          <ToggleButton onClick={handleAddPokemon}>+ add</ToggleButton>
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
