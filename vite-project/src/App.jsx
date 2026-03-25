import { useEffect, useState } from "react";
import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

// 8 different things, pasted twice
const cardValues = [
  "Brot",
  "Reis",
  "Wasser",
  "Saft",
  "Nudeln",
  "Pizza",
  "Croissant",
  "Suppe",
  "Brot",
  "Reis",
  "Wasser",
  "Saft",
  "Nudeln",
  "Pizza",
  "Croissant",
  "Suppe"
];

function App() {
  const {cards, score, moves, handleCardClick, initializeGame, isGameComplete} = useGameLogic(cardValues)

  return (
  <div className="app">
    <GameHeader score={score} moves={moves} onReset={initializeGame}/>

    {isGameComplete && <WinMessage moves = {moves}/>}

    <div className="cards-grid">
      {cards.map((card) => (
        <Card 
          key = {card.id}  
          card={card} 
          onClick={() => handleCardClick(card)} 
        />
      ))}
    </div>
  </div>
  );

  // return <>Hello World!</>;

}


export default App;