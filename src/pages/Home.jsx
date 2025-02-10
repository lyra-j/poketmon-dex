import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pokemonlogo from "../assets/pokemonlogo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LogoImage src={pokemonlogo} alt="PekemonDex" />
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LogoImage = styled.img`
  height: 260px;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: red;
  color: white;
  margin-top: 50px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #d12c2c;
    transition: 0.3s;
  }
`;
