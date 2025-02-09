import styled from "styled-components";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <DexWrapper>
      {/* 대쉬보드 (6장) */}
      <DashBoard />

      {/* 포켓몬 리스트 import MOCK_DATA */}
      <PokemonList />
    </DexWrapper>
  );
};

export default Dex;

const DexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
