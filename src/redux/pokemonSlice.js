import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPokemon: localStorage.getItem("myPokemon")
    ? JSON.parse(storedPokemon)
    : [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // ✅ 포켓몬 대쉬보드에 추가
    handleAddPokemon: (state, action) => {
      const addPokemon = [
        ...state.selectedPokemon,
        { ...payload, isSelected: true },
      ];

      // 이미 대시보드에 등록한 포켓몬인지 확인
      if (state.selectedPokemon.find((item) => item.id === action.payload.id)) {
        alert(`${payload.korean_name}, 이미 보유한 포켓몬입니다.`);
        return;
      }

      // 6마리 초과시 알림
      if (state.selectedPokemon.length >= 6) {
        alert(`포켓몬은 최대 6마리까지 선택 할 수 있어요.`);
        return;
      }

      state.selectedPokemon = addPokemon;

      alert(`${payload.korean_name}이 추가되었습니다.`);
      return;
    },

    // ✅ 포켓몬 대쉬보드에서 삭제
    handleRemovePokemon: (state, action) => {
      const removePokemon = state.selectedPokemon.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedPokemon = removePokemon;
      alert(`${action.payload.korean_name}이 삭제되었습니다.`);
      return;
    },
  },
});

export default pokemonSlice.reducer;
export const { handleAddPokemon, handleRemovePokemon } = pokemonSlice.actions;
