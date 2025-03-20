"use client";
import { TIRAGE_MESSAGE } from "@/enums/tirageMessage";
import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/Button";

export default function Home() {
  const [remainingNumbers, setRemainingNumbers] = useState(
    [...Array(90).keys()].map((i) => i + 1)
  ); // Nombres de 1 à 90
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [saveNumber, setSaveNumber] = useState<number[]>([]);
  const [message, setMessage] = useState("");

  const playSound = (number: number) => {
    const audio = new Audio(`/sounds/${number}.mp3`);
    audio.play();
  };

  const handlePick = () => {
    if (!remainingNumbers.length) return setMessage(TIRAGE_MESSAGE.TERMINATED);

    const randomIndex = Math.floor(Math.random() * remainingNumbers.length); // index aléatoire compris entre 0 et le nombre de nombres restants défini par remainingNumbers
    const pickNumber = remainingNumbers[randomIndex]; // nombre tiré aléatoirement parmi les nombres restants
    const newRemainingNumbers = remainingNumbers.filter(
      (num) => num !== pickNumber
    ); // renvoie un nouveau tableau sans le nombre tiré

    setSaveNumber((prev) => [...prev, pickNumber].sort((a, b) => a - b));

    setRemainingNumbers(newRemainingNumbers);
    setRandomNumber(pickNumber);
    setMessage(
      newRemainingNumbers.length
        ? `${TIRAGE_MESSAGE.REMAINED} ${newRemainingNumbers.length}`
        : TIRAGE_MESSAGE.TERMINATED
    );

    playSound(pickNumber);
  };

  const handleRepeat = () => {
    if (!randomNumber) return;
    playSound(randomNumber);
  };

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
      <Button label={"Retour à l'accueil"} href="/" />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;

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
`;
