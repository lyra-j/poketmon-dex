import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Swal from "sweetalert2";
import { removeMyPokemon, addMyPokemon } from "../redux/pokemonSlice";
import monsterball from "../assets/monsterball.png";

const PokemonCard = ({ data }) => {
  // 🔸 { data } : 상위컴포넌트에서 MOCK_DATA.map((data))로 넘겨 받은 값

  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const dispatch = useDispatch();

  // ✅ 포켓몬 대쉬보드에 추가
  const handleAddPokemon = (e) => {
    e.preventDefault(); // Link to 방지용

    // ❔ 이미 대시보드에 등록한 포켓몬인지 확인
    if (selectedPokemon.find((item) => item.id === data.id)) {
      Swal.fire({
        icon: "warning",
        imageHeight: 150,
        title: `${data.korean_name}`,
        text: `이미 소유한 포켓몬입니다.`,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // ❕ 6마리 초과시 알림
    if (selectedPokemon.length >= 6) {
      Swal.fire({
        icon: "error",
        title: `몬스터볼을 모두 소진하였습니다.`,
        text: `다른 포켓몬을 놔주고 다시 선택하세요.`,
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    dispatch(addMyPokemon(data));
    Swal.fire({
      imageUrl: `${data.img_url}`,
      imageHeight: 150,
      title: `${data.korean_name}`,
      text: `컬렉션에 추가 완료.`,
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  };

  // ✅ 포켓몬 대쉬보드에서 삭제
  const handleRemovePokemon = (e) => {
    e.preventDefault(); // Link to 방지용

    dispatch(removeMyPokemon(data));
    Swal.fire({
      imageUrl: `${monsterball}`,
      imageHeight: 100,
      title: `${data.korean_name}`,
      text: `컬렉션에서 삭제 완료.`,
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  };

  return (
    <CardContainerLink to={`/dex/detail?id=${data.id}`}>
      <PokemonCardImage src={data.img_url} alt={data.korean_name} />
      <PokemonCardName>{data.korean_name}</PokemonCardName>

      {/* 숫자형식 000 3자리로 맞추기 */}
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
