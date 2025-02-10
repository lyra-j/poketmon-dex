import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { removeMyPokemon, addMyPokemon } from "../redux/pokemonSlice";

const Detail = () => {
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // 선택한 포켓몬의 id와 일치하는지 확인만 필요하기 때문에 setSearchParams는 생략
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");

  // 쿼리스트링에서 받아온 값은 기본적으로 String타입으로
  // 선택한 포켓몬 id와 엄격한 비교를 위해 +pokemonId,  숫자타입으로 변경
  const selectPokemon = pokemonData.find((data) => {
    return data.id === +pokemonId;
  });

  return (
    <DetailWrapper>
      <img src={selectPokemon.img_url} alt={selectPokemon.korean_name} />
      <h3>{selectPokemon.korean_name}</h3>
      <p>타입 : {selectPokemon.types.join(", ")}</p>
      <p>{selectPokemon.description}</p>

      <ButtonWrapper>
        <StButton $back onClick={() => navigate("/dex")}>
          back
        </StButton>

        {/* 대쉬보드에 선택된 포켓몬인지 판단 후 추가/제거 버튼 표출 */}
        {selectedPokemon.find((pokemon) => pokemon.id === selectPokemon.id) ? (
          <StButton
            $remove
            onClick={() => dispatch(removeMyPokemon(selectPokemon))}
          >
            - del
          </StButton>
        ) : (
          <StButton $add onClick={() => dispatch(addMyPokemon(selectPokemon))}>
            + add
          </StButton>
        )}
      </ButtonWrapper>
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  img {
    width: 200px;
  }

  h3 {
    font-size: 24px;
    color: red;
    font-weight: 700;
    margin: 20px;
  }

  p {
    margin: 14px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StButton = styled.button`
  color: white;
  margin: 20px auto;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 16px;
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
    props.$back &&
    css`
      background-color: #171717;

      &:hover {
        background-color: #565656;
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
