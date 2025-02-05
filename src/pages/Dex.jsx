import styled from "styled-components";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";

const Dex = ({ selectedPokemon, handleAddPokemon, handleRemovePokemon }) => {
  return (
    <DexWrapper>
      {/* 대쉬보드 (6장) */}
      <DashBoard
        selectedPokemon={selectedPokemon}
        handleRemovePokemon={handleRemovePokemon}
      />

      {/* 포켓몬 리스트 mockdata*/}
      <PokemonList handleAddPokemon={handleAddPokemon} />
    </DexWrapper>
  );
};

export default Dex;

const DexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
