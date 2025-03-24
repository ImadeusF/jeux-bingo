"use client";
import styled from "styled-components";
import { useGameStart } from "../api/hooks/useGameStart";
import { useGameLogs } from "../api/hooks/useGameLogs";
import GameHeader from "./GameHeader";
import GameContext from "../../context/GameContext";
import GameBody from "./GameBody";
import GameFooter from "./GameFooter";

export default function Home() {
  const {
    handlePick,
    handleRepeat,
    remainingNumbers,
    randomNumber,
    saveNumber,
    message,
  } = useGameStart();

  const { handleGameLogs } = useGameLogs();

  const gameContextValue = {
    handlePick,
    handleRepeat,
    handleGameLogs,
    remainingNumbers,
    randomNumber,
    saveNumber,
    message,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <MainStyled>
        <GameHeader />
        <GameBody />
        <GameFooter />
      </MainStyled>
    </GameContext.Provider>
  );
}

const MainStyled = styled.main`
  display: flex;
  height: 100dvh;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 0px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.5) url("/images/background_game.png");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
