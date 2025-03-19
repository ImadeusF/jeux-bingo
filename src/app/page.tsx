"use client";
import { TIRAGE_MESSAGE } from "@/enums/tirageMessage";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [remainingNumbers, setRemainingNumbers] = useState([...Array(91).keys()]); // Nombres de 0 à 9 pour test
  const [randomNumber, setRandomNumber] = useState<number | null>(null); // soit un nombre soit null
  const [saveNumber, setSaveNumber] = useState<number[]>([]);
  const [message, setMessage] = useState("");

  const handlePick = () => {
    if (!remainingNumbers.length) return setMessage(TIRAGE_MESSAGE.TERMINATED);

    const randomIndex = Math.floor(Math.random() * remainingNumbers.length); // index aléatoire compris entre 0 et le nombre de nombres restants défini par remainingNumbers
    const pickNumber = remainingNumbers[randomIndex]; // nombre tiré aléatoirement parmi les nombres restants
    const newRemainingNumbers = remainingNumbers.filter((num) => num !== pickNumber); // renvoie un nouveau tableau sans le nombre tiré

    setSaveNumber((prev) => [...prev, pickNumber].sort((a, b) => a - b));

    setRemainingNumbers(newRemainingNumbers);
    setRandomNumber(pickNumber);
    setMessage(newRemainingNumbers.length ? `${TIRAGE_MESSAGE.REMAINED} ${newRemainingNumbers.length}` : TIRAGE_MESSAGE.TERMINATED);
  };

  return (
    <MainStyled>
      <p>Nombre tiré : {randomNumber ?? "Aucun encore"}</p>
      <p>{message}</p>
      <input type="submit" value="Nouveau tirage" onClick={handlePick} disabled={!remainingNumbers.length} />

      <div className="board-number">
        {[...Array(91).keys()].map((num) => (
          <div key={num} className={saveNumber.includes(num) ? "selected" : ""}>
            {num}
          </div>
        ))}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .board-number {
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* 7 colonnes */
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  .board-number div {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid black;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
  }

  .selected {
    background: green !important; /* Numéros déjà tirés */
    color: black;
  }
`;