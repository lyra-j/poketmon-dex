import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const PokemonContext = createContext();

export const PokemonProvier = ({ children }) => {
  // 초기값 불러오기
  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const storedPokemon = localStorage.getItem("myPokemon");
    return storedPokemon ? JSON.parse(storedPokemon) : [];
  });

  // 로컬스토리지 저장
  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvier.propTypes = {
  children: PropTypes.node.isRequired,
};
