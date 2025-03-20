"use client";
import Button from "@/components/Button";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeStyled>
      <h1>Accueil</h1>
      <Button label={"Jouer"} href="/game" />
      <Button label={"Historique"} href="/log" />
    </HomeStyled>
  );
}

const HomeStyled = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  gap: 10px;

  &::before {
    content: "";
    position: absolute;
    background: rgba(105, 105, 105, 0.9) url("/images/background_menu.png");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
`;
