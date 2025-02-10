import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Swal from "sweetalert2";
import MOCK_DATA from "../data/MOCK_DATA";
import { removeMyPokemon, addMyPokemon } from "../redux/pokemonSlice";

const Detail = () => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // 선택한 포켓몬의 id와 일치하는지 확인만 필요하기 때문에 setSearchParams는 생략
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");

  // 쿼리스트링에서 받아온 값은 기본적으로 String타입으로
  // 선택한 포켓몬 id와 엄격한 비교를 위해 +pokemonId,  숫자타입으로 변경
  const selectPokemon = MOCK_DATA.find((data) => {
    return data.id === +pokemonId;
  });

  const handleAddPokemon = () => {
    // ❔ 이미 대시보드에 등록한 포켓몬인지 확인
    if (selectedPokemon.find((item) => item.id === selectPokemon.id)) {
      Swal.fire({
        imageUrl: `${selectPokemon.img_url}`,
        imageHeight: 150,
        title: `${selectPokemon.korean_name}`,
        text: `이미 소유한 포켓몬입니다.`,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // ❕ 6마리 초과시 알림
    if (selectPokemon.length >= 6) {
      Swal.fire({
        icon: "error",
        title: `몬스터볼을 모두 소진하였습니다.`,
        text: `다른 포켓몬을 놔주고 다시 선택하세요.`,
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    dispatch(addMyPokemon(selectPokemon));
    Swal.fire({
      imageUrl: `${selectPokemon.img_url}`,
      imageHeight: 150,
      title: `${selectPokemon.korean_name}`,
      text: `컬렉션에 추가 완료.`,
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  };

  const handleRemovePokemon = () => {
    dispatch(removeMyPokemon(selectPokemon));
    Swal.fire({
      imageUrl: `src/assets/monsterball.png`,
      imageHeight: 100,
      title: `${selectPokemon.korean_name}`,
      text: `컬렉션에서 삭제 완료.`,
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  };

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
          <StButton $remove onClick={handleRemovePokemon}>
            - del
          </StButton>
        ) : (
          <StButton $add onClick={handleAddPokemon}>
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
