import { useGenderGame } from "../hooks/GameLogic";

const Game = () => {
    const { currentWord, score, checkAnswer, isCorrect } = useGenderGame();

    if(!currentWord) {
        return <div>Game over! Your Score: {score}</div>;
    }

    return (
        <div>
            <h1>Artikel raten</h1>

            <h2>{currentWord.word}</h2>

            <button onClick={() => checkAnswer("der")}>der</button>
            <button onClick={() => checkAnswer("die")}>die</button>
            <button onClick={() => checkAnswer("das")}>das</button>

            {isCorrect === true && <p>Richtig!</p>}
            {isCorrect === false && <p>Falsch!</p>}

            <p>Score: {score}</p>
        </div>
    );
};

export default Game;