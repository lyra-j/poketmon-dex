import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const DashBoard = () => {
  // 대쉬보드에 선택된 포켓몬 state
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);

  return (
    <DashBoardWrapper>
      <MyPokemonTitle>나만의 포켓몬</MyPokemonTitle>
      <MyPokemonCardContainer>
        {selectedPokemon.map((data, idx) => {
          return <PokemonCard key={idx} data={data} />;
        })}

        {/* 1. 전체 길이가 6인 배열을 생성하되 선택된 포켓몬의 길이만큼제외 하고 배열 생성
            2. 빈 카드 슬롯이란 의미로 'null'로 채움
            3. 생성된 'null' 만큼 index기준으로 몬스터몰 이미지로 채움  */}
        {new Array(6 - selectedPokemon.length).fill(null).map((_, idx) => {
          return (
            <MonsterBall key={idx}>
              <img
                style={{
                  width: "40px",
                }}
                src="src/assets/monsterball.png"
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
  align-items: center;
  margin-bottom: 10px;
`;

// 🟩 TODO : img 태그의 크기 지정을 monsterball 안으로 넣어주기
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
