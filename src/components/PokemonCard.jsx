import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { removeMyPokemon, addMyPokemon } from "../redux/pokemonSlice";

const PokemonCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddPokemon = (e) => {
    e.preventDefault(); // Link to 방지용
    dispatch(addMyPokemon(data));
  };

  const handleRemovePokemon = (e) => {
    e.preventDefault(); // Link to 방지용
    dispatch(removeMyPokemon(data));
  };

  return (
    <CardContainerLink to={`/dex/detail?id=${data.id}`}>
      <PokemonCardImage src={data.img_url} alt={data.korean_name} />
      <PokemonCardName>{data.korean_name}</PokemonCardName>
      <PokemonCardNum>no.{data.id.toString().padStart(3, "0")}</PokemonCardNum>

      {/* 대쉬보드에 선택된 포켓몬인지 isSelected로 확인 후 추가/삭제 버튼 표출 */}
      {data.isSelected ? (
        <ToggleButton $remove onClick={handleRemovePokemon}>
          - del
        </ToggleButton>
      ) : (
        <ToggleButton $add onClick={handleAddPokemon}>
          + add
        </ToggleButton>
      )}
    </CardContainerLink>
  );
};

export default PokemonCard;

const CardContainerLink = styled(Link)`
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
  color: #333;
  margin-bottom: 10px;
`;

const PokemonCardNum = styled.p`
  font-size: 12px;
  color: grey;
  margin: 10px 0px;
`;

const ToggleButton = styled.button`
  color: white;
  font-size: 12px;
  padding: 6px 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.$remove &&
    css`
      background-color: red;

      &:hover {
        background-color: #d12c2c;
      }
    `}

  ${(props) =>
    props.$add &&
    css`
      background-color: #42ac67;

      &:hover {
        background-color: #317e4c;
      }
    `}
`;
