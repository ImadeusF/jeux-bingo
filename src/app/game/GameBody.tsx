import { useContext } from "react";
import styled from "styled-components";
import GameContext from "../../context/GameContext";

export default function GameBody() {
  const { saveNumber } = useContext(GameContext);
  
  return (
    <GameBodyStyled>
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
    </GameBodyStyled>
  );
}

const GameBodyStyled = styled.div`
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
`;
