import React, { useState } from "react";
import MOCK_DATA from "../data/MOCK_DATA";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // 포켓몬 대쉬보드에 추가
  const handleAddPokemon = (pokemon) => {
    const isSelected = selectedPokemon.find((item) => {
      return item.id === pokemon.id;
    });

    if (isSelected) {
      alert(`이미 보유한 포켓몬입니다.`);
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert(`포켓몬은 최대 6마리까지 선택 할 수 있어요.`);
      return;
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  // 포켓몬 대쉬보드에서 삭제
  const handleRemovePokemon = (id) => {
    setSelectedPokemon((prevList) =>
      prevList.filter((pokemon) => pokemon.id !== id)
    );
  };

  return (
    <div>
      {/* 대쉬보드 (6장) */}
      <div>
        <h1>나만의 포켓몬</h1>
        <ul>
          {selectedPokemon.map((item, idx) => {
            return (
              <li key={idx}>
                <img src={item.img_url} alt={item.korean_name} />
                <h3>{item.korean_name}</h3>
                <p>no.{item.id}</p>
                <button onClick={() => handleRemovePokemon(item.id)}>
                  - del
                </button>
              </li>
            );
          })}

          {new Array(6 - selectedPokemon.length).fill(null).map((_, idx) => {
            return (
              <li key={idx}>
                <img
                  style={{
                    width: "50px",
                  }}
                  src="src/assets/pokeball.png"
                  alt="empty slot"
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* 포켓몬 리스트 */}
      <div>
        <ul>
          {MOCK_DATA.map((data) => {
            return (
              <li key={data.id}>
                <img src={data.img_url} alt={data.korean_name} />
                <h3>{data.korean_name}</h3>
                <p>no.{data.id}</p>
                <button onClick={() => handleAddPokemon(data)}>+ add</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dex;
