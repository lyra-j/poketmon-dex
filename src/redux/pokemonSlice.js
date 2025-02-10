import { createSlice } from "@reduxjs/toolkit";

// 초기값 설정
const initialState = {
  selectedPokemon: localStorage.getItem("myPokemon")
    ? JSON.parse(localStorage.getItem("myPokemon"))
    : [],
};

// 슬라이스 만들기
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // ✅ 포켓몬 대쉬보드에 추가, 대쉬보드 등록 여부 판단을 위한 isSelected추가
    addMyPokemon: (state, action) => {
      const addPokemon = [
        ...state.selectedPokemon,
        { ...action.payload, isSelected: true },
      ];

      state.selectedPokemon = addPokemon;
      localStorage.setItem("myPokemon", JSON.stringify(addPokemon));
    },

    // ✅ 포켓몬 대쉬보드에서 삭제
    removeMyPokemon: (state, action) => {
      const removePokemon = state.selectedPokemon.filter(
        (item) => item.id !== action.payload.id
      );

      state.selectedPokemon = removePokemon;
      localStorage.setItem("myPokemon", JSON.stringify(removePokemon));
    },
  },
});

export default pokemonSlice.reducer;
export const { addMyPokemon, removeMyPokemon } = pokemonSlice.actions;
