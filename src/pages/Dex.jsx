import React from "react";
import MOCK_DATA from "../data/MOCK_DATA";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // 포켓몬 선택하여 덱에 추가
  const handleAddPokemon = (pokemon) => {
    const isAlreadySelectedOne = selectedPokemon.find((item) => {
      return item.id === pokemon.id;
    });

    if (isAlreadySelectedOne) {
      alert(`이미 보유한 포켓몬입니다.`);
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert(`포켓몬은 최대 여섯마리까지 선택 할 수 있어요.`);
      return;
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  
  return (
    <div>
      {/* 대쉬보드 (6장) */}
      <div>
        <h1>나만의 포켓몬</h1>
        <ul></ul>
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
