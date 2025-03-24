// api/context/GameContext.tsx
import { createContext } from "react";

export interface GameContextType {
  handlePick: () => void;
  handleRepeat: () => void;
  handleStartGame: () => void;
  remainingNumbers: number[];
  randomNumber: number | null;
  saveNumber: number[];
  message: string;
}

const GameContext = createContext<GameContextType>({
  handlePick: () => {},
  handleRepeat: () => {},
  handleStartGame: () => {},
  remainingNumbers: [],
  randomNumber: null,
  saveNumber: [],
  message: "",
});

export default GameContext;



