import React, { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";
import MOCK_DATA from "../data/MOCK_DATA";

const Detail = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();
  // 선택한 포켓몬의 id와 일치하는지 확인만 필요하기 때문에 setSearchParams는 생략
  const [params] = useSearchParams();
  const pokemonId = params.get("id");

  // 쿼리스트링에서 받아온 값은 기본적으로 String타입으로
  // 선택한 포켓몬 id와 엄격한 비교를 위해 +pokemonId,  숫자타입으로 변경
  const selectPokemon = MOCK_DATA.find((data) => {
    return data.id === +pokemonId;
  });

  // ✅ 포켓몬 대쉬보드에 추가
  const handleAddPokemon = () => {
    // ❔이미 대시보드에 등록한 포켓몬인지 확인
    if (
      selectedPokemon.find((item) => {
        return item.id === selectPokemon.id;
      })
    ) {
      alert(`${selectPokemon.korean_name}, 이미 보유한 포켓몬입니다.`);
      return;
    }

    // ❕6마리 초과시 알림
    if (selectedPokemon.length >= 6) {
      alert(`포켓몬은 최대 6마리까지 선택 할 수 있어요.`);
      return;
    }

    setSelectedPokemon((prev) => [
      ...prev,
      { ...selectPokemon, isSelected: true },
    ]);
    alert(`${selectPokemon.korean_name}이 추가되었습니다.`);
    return;
  };

  // ✅ 포켓몬 대쉬보드에서 삭제
  const handleRemovePokemon = () => {
    setSelectedPokemon((prev) =>
      prev.filter((item) => item.id !== selectPokemon.id)
    );
    alert(`${selectPokemon.korean_name}이 삭제되었습니다.`);
    return;
  };

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
