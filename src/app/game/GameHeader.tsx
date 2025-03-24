import Button from "@/components/Button";
import { useContext } from "react";
import styled from "styled-components";
import GameContext from "../context/GameContext";

export default function GameHeader() {
  const { handlePick, handleRepeat, remainingNumbers, randomNumber, message } = useContext(GameContext);

  return (
    <GameHeaderStyled>
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
    </GameHeaderStyled>
  );
}

const GameHeaderStyled = styled.div`
  .board-header {
    height: 50px;
  }
`;
