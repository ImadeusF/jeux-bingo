"use client";
import styled from "styled-components";
import Button from "@/components/Button";
import { useGame } from "../api/hooks/useGame";

export default function Home() {
  const { handlePick, handleRepeat, handleStartGame, remainingNumbers, randomNumber, saveNumber, message } = useGame();
 
  return (
    <MainStyled>
      <div className="board-header">
        <p>Nombre tiré : {randomNumber ?? "Aucun encore"}</p>
        <p>{message}</p>
      </div>
      <Button
        label={"Nouveau Tirage"}
        onClick={handlePick}
        disabled={!remainingNumbers.length}
      />
      <Button label={"Répéter le chiffre"} onClick={handleRepeat} />

      <div className="board-number">
        {[...Array(90).keys()].map((num) => (
          <div
            key={num}
            className={saveNumber.includes(num + 1) ? "selected" : ""}
          >
            {num + 1}
          </div>
        ))}
      </div>
      <div className="game-footer">
        <Button label={"Retour"} href="/" className="footer-btn-left"/>
        <Button label={"Jeux Terminé"} href="/logs" onClick={handleStartGame} className="footer-btn-right"/>
      </div>
    </MainStyled>
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

  .board-header {
    height: 50px;
  }

  .board-number {
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* 7 colonnes */
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  .board-number div {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid black;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
  }

  .selected {
    background: #579c57 !important; /* Numéros déjà tirés */
    color: #ffffff;
  }

  .game-footer {
    flex-direction: row;
  }

  .footer-btn-left, .footer-btn-right {
    min-width: 120px;
    padding:10px;
    margin:10px;
  }

  .footer-btn-right {
    background-color: #5c46d6;
    &:hover{
      background-color: #3b2f8c;
    }
  }
`;
