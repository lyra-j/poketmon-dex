import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../data/MOCK_DATA";
import Swal from "sweetalert2";

// 초기값 설정
const initialState = {
  pokemonData: MOCK_DATA,
  selectedPokemon: localStorage.getItem("myPokemon")
    ? JSON.parse(localStorage.getItem("myPokemon"))
    : [],
};

// 슬라이스 만들기
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // ✅ 포켓몬 대쉬보드에 추가
    addMyPokemon: (state, action) => {
      const addPokemon = [
        ...state.selectedPokemon,
        { ...action.payload, isSelected: true },
      ];
      // 이미 대시보드에 등록한 포켓몬인지 확인
      if (state.selectedPokemon.find((item) => item.id === action.payload.id)) {
        Swal.fire({
          imageUrl: `${action.payload.img_url}`,
          imageHeight: 150,
          title: `${action.payload.korean_name}`,
          text: `이미 소유한 포켓몬입니다.`,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      // 6마리 초과시 알림
      if (state.selectedPokemon.length >= 6) {
        Swal.fire({
          icon: "error",
          title: `몬스터볼을 모두 소진하였습니다.`,
          text: `다른 포켓몬을 놔주고 다시 선택하세요.`,
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      }

      state.selectedPokemon = addPokemon;
      localStorage.setItem("myPokemon", JSON.stringify(addPokemon));
      Swal.fire({
        imageUrl: `${action.payload.img_url}`,
        imageHeight: 150,
        title: `${action.payload.korean_name}`,
        text: `컬렉션에 추가 완료.`,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    },

    // ✅ 포켓몬 대쉬보드에서 삭제
    removeMyPokemon: (state, action) => {
      const removePokemon = state.selectedPokemon.filter(
        (item) => item.id !== action.payload.id
      );

      state.selectedPokemon = removePokemon;
      localStorage.setItem("myPokemon", JSON.stringify(removePokemon));
      Swal.fire({
        icon: "success",
        title: `${action.payload.korean_name}`,
        text: `컬렉션에서 삭제 완료.`,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    },
  },
});

export default pokemonSlice.reducer;
export const { addMyPokemon, removeMyPokemon } = pokemonSlice.actions;
