import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/MOCK_DATA";

const Detail = () => {
  const [params, setParams] = useSearchParams();
  const pokemonId = params.get("id");
  // const param = useParams();
  const navigate = useNavigate();

  const selectPokemon = MOCK_DATA.find((data) => {
    return data.id === +pokemonId;
  });

  return (
    <div>
      <img src={selectPokemon.img_url} alt={selectPokemon.korean_name} />
      <h2>{selectPokemon.korean_name}</h2>
      <p>타입 : {selectPokemon.types}</p>
      <p>{selectPokemon.description}</p>
      <button onClick={() => navigate("/dex")}>돌아가기</button>
    </div>
  );
};

export default Detail;
