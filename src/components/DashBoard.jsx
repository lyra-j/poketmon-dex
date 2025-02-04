import React from "react";
import styled from "styled-components";

const DashBoard = ({
  selectedPokemon,
  setSelectedPokemon,
  handleRemovePokemon,
}) => {
  return (
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
  );
};

export default DashBoard;

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
