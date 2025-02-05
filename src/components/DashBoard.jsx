import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashBoard = ({ selectedPokemon, handleRemovePokemon }) => {
  return (
    <DashBoardWrapper>
      <MyPokemonTitle>나만의 포켓몬</MyPokemonTitle>
      <MyPokemonCardContainer>
        {selectedPokemon.map((data, idx) => {
          return (
            <PokemonCard
              key={idx}
              data={data}
              handleRemovePokemon={handleRemovePokemon}
            />
          );
        })}

        {new Array(6 - selectedPokemon.length).fill(null).map((_, idx) => {
          return (
            <MonsterBall key={idx}>
              <img
                style={{
                  width: "40px",
                }}
                src="src/assets/pokeball.png"
                alt="empty slot"
              />
            </MonsterBall>
          );
        })}
      </MyPokemonCardContainer>
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

const MyPokemonCardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  width: 100%;
  justify-items: center;
  margin-bottom: 10px;
`;

const MonsterBall = styled.li`
  width: 90px;
  height: 90px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(209, 209, 209);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

// <MyPokemonCard key={idx}>
//   <img src={data.img_url} alt={data.korean_name} />
//   <h3>{data.korean_name}</h3>
//   <p>no.{data.id}</p>
//   <button onClick={() => handleRemovePokemon(data.id)}>
//     - del
//   </button>
// </MyPokemonCard>
