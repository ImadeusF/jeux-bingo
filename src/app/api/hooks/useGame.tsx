import { TIRAGE_MESSAGE } from "@/enums/tirageMessage";
import { useState } from "react";

export const useGame = () => {
  const [remainingNumbers, setRemainingNumbers] = useState(
    [...Array(90).keys()].map((i) => i + 1)
  ); // Nombres de 1 à 90
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [saveNumber, setSaveNumber] = useState<number[]>([]);
  const [message, setMessage] = useState("");

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

  const handleStartGame = async () => {
    try {
      const response = await fetch("/api/logs", {
        method: "POST",
      });
      if (!response.ok)
        throw new Error("Erreur lors de l'enregistrement du log");

      console.log("Log enregistré avec succès");
    } catch (error) {
      console.error(error);
    }
  };

  const playSound = (number: number) => {
    const audio = new Audio(`/sounds/${number}.mp3`);
    audio.play();
  };

  return {
    handlePick,
    handleRepeat,
    handleStartGame,
    playSound,
    remainingNumbers,
    randomNumber,
    saveNumber,
    message,
  };
};
