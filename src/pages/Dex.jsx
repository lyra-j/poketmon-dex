import React, { useState } from "react";
import styled from "styled-components";
import MOCK_DATA from "../data/MOCK_DATA";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // ✅ 포켓몬 대쉬보드에 추가
  const handleAddPokemon = (pokemon) => {
    const isSelected = selectedPokemon.find((item) => {
      return item.id === pokemon.id;
    });

    if (isSelected) {
      alert(`이미 보유한 포켓몬입니다.`);
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert(`포켓몬은 최대 6마리까지 선택 할 수 있어요.`);
      return;
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  // ✅ 포켓몬 대쉬보드에서 삭제
  const handleRemovePokemon = (id) => {
    setSelectedPokemon((prevList) =>
      prevList.filter((pokemon) => pokemon.id !== id)
    );
  };

  return (
    <DexWrapper>
      {/* 대쉬보드 (6장) */}
      <DashBoardWrapper>
        <MyPokemonTitle>나만의 포켓몬</MyPokemonTitle>
        <MyPokemonCardBox>
          {selectedPokemon.map((item, idx) => {
            return (
              <MyPokemonCard key={idx}>
                <img src={item.img_url} alt={item.korean_name} />
                <h3>{item.korean_name}</h3>
                <p>no.{item.id}</p>
                <button onClick={() => handleRemovePokemon(item.id)}>
                  - del
                </button>
              </MyPokemonCard>
            );
          })}

          {new Array(6 - selectedPokemon.length).fill(null).map((_, idx) => {
            return (
              <MonsterBall key={idx}>
                <img
                  style={{
                    width: "50px",
                  }}
                  src="src/assets/pokeball.png"
                  alt="empty slot"
                />
              </MonsterBall>
            );
          })}
        </MyPokemonCardBox>
      </DashBoardWrapper>

      {/* 포켓몬 리스트 */}
      <PokemonListWrapper>
        {MOCK_DATA.map((data) => {
          return (
            <PokemonCard key={data.id}>
              <img src={data.img_url} alt={data.korean_name} />
              <h3>{data.korean_name}</h3>
              <p>no.{data.id}</p>
              <button onClick={() => handleAddPokemon(data)}>+ add</button>
            </PokemonCard>
          );
        })}
      </PokemonListWrapper>
    </DexWrapper>
  );
};

export default Dex;

const DexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const PokemonListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

const PokemonCard = styled.li`
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

const DashBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const MyPokemonTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #ff0000da;
  margin: 40px;
`;

const MyPokemonCardBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  width: 100%;
  justify-items: center;
  margin-bottom: 10px;
`;

const MyPokemonCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  width: 150px;
  height: 200px;
`;

const MonsterBall = styled.li`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
