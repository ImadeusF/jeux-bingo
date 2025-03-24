import Button from "@/components/Button";
import { useContext } from "react";
import styled from "styled-components";
import GameContext from "../context/GameContext";

export default function GameFooter() {
  const { handleGameLogs } = useContext(GameContext);

  return (
    <GameFooterStyled>
      <div className="game-footer">
        <Button label={"Retour"} href="/" className="footer-btn-left" />
        <Button
          label={"Jeux Terminé"}
          href="/logs"
          onClick={handleGameLogs}
          className="footer-btn-right"
        />
      </div>
    </GameFooterStyled>
  );
}

const GameFooterStyled = styled.div`
  .game-footer {
    flex-direction: row;
  }

  .footer-btn-left,
  .footer-btn-right {
    min-width: 120px;
    padding: 10px;
    margin: 10px;
  }

  .footer-btn-right {
    background-color: #5c46d6;
    &:hover {
      background-color: #3b2f8c;
    }
  }
`;
