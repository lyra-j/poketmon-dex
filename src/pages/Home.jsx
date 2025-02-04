import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LogoImage src="src/assets/pokemon-logo.png" alt="PekemonDex" />
      <BigButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </BigButton>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
`;

const LogoImage = styled.img`
  height: 260px;
`;

const BigButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: red;
  color: white;
  margin-top: 50px;
  border: solid 1px;
  border-radius: 8px;
  font-size: 20px;

  &:hover {
    background-color: #d12c2c;
    transition: 0.5s;
    cursor: pointer;
  }
`;
