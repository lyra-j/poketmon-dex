import { createSlice } from "@reduxjs/toolkit";

// 초기값 설정
const initialState = {
  // 🟩 TODO : 초기값에 단순 값만 읽어오는 목데이터 필요한지?
  // 🟩 TODO : 로컬스토리지 사용시 초기값 설정도 이곳에서 하는 것이 맞는지?

  // pokemonData: MOCK_DATA,
  selectedPokemon: localStorage.getItem("myPokemon")
    ? JSON.parse(localStorage.getItem("myPokemon"))
    : [],
};

// 🟩 TODO : 추가/삭제 로직 실행 후 로컬스토리지 변동사항도 여기서?
// 🟩 TODO : 유효성검사 또는 알림모달 등은 실 사용되는 부분에서 진행?

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

      state.selectedPokemon = addPokemon;
      localStorage.setItem("myPokemon", JSON.stringify(addPokemon));

      // // ❔ 이미 대시보드에 등록한 포켓몬인지 확인
      // if (state.selectedPokemon.find((item) => item.id === action.payload.id)) {
      //   Swal.fire({
      //     imageUrl: `${action.payload.img_url}`,
      //     imageHeight: 150,
      //     title: `${action.payload.korean_name}`,
      //     text: `이미 소유한 포켓몬입니다.`,
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      //   return;
      // }

      // // ❕ 6마리 초과시 알림
      // if (state.selectedPokemon.length >= 6) {
      //   Swal.fire({
      //     icon: "error",
      //     title: `몬스터볼을 모두 소진하였습니다.`,
      //     text: `다른 포켓몬을 놔주고 다시 선택하세요.`,
      //     showConfirmButton: false,
      //     timer: 2000,
      //   });
      //   return;
      // }

      // Swal.fire({
      //   imageUrl: `${action.payload.img_url}`,
      //   imageHeight: 150,
      //   title: `${action.payload.korean_name}`,
      //   text: `컬렉션에 추가 완료.`,
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
      // return;
    },

    // ✅ 포켓몬 대쉬보드에서 삭제
    removeMyPokemon: (state, action) => {
      const removePokemon = state.selectedPokemon.filter(
        (item) => item.id !== action.payload.id
      );

      state.selectedPokemon = removePokemon;
      localStorage.setItem("myPokemon", JSON.stringify(removePokemon));
      // Swal.fire({
      //   // 🟩 TODO : 몬스터볼 이미지 확인하기
      //   imageUrl: `src/assets/monsterball.png`,
      //   imageHeight: 150,
      //   // icon: "success",
      //   title: `${action.payload.korean_name}`,
      //   text: `컬렉션에서 삭제 완료.`,
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
      // return;
    },
  },
});

export default pokemonSlice.reducer;
export const { addMyPokemon, removeMyPokemon } = pokemonSlice.actions;
