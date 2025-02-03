import React from "react";
import MOCK_DATA from "../data/MOCK_DATA";

const Dex = () => {
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
