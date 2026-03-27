import { useGenderGame } from "../hooks/GameLogic";

const Game = () => {
    const { currentWord, score, checkAnswer, isCorrect } = useGenderGame();

    if(!currentWord) {
        return <div>Game over! Your Score: {score}</div>;
    }

    return (
        <div style={{ paddingTop:'3.5rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem', fontSize: '1.25rem'}}>
            <h1>Welcher Artikel passt?</h1>

            <h2 style={{ fontSize: '3rem' }}>{currentWord.word}</h2>

            <div style={{ display:'flex', gap:'1rem' }}>
                <button style={{ background:'#00bbff' }} onClick={() => checkAnswer("der")}>der</button>
                <button style={{ background:'#ff4a4a' }} onClick={() => checkAnswer("die")}>die</button>
                <button style={{ background:'#3ef78e' }} onClick={() => checkAnswer("das")}>das</button>
            </div>

            <div style={{ height:'1.5rem' }}>
                {isCorrect === true && <p style={{ color:'green' }}>Richtig!</p>}
                {isCorrect === false && <p style={{ color:'red' }}>Falsch!</p>}
            </div>

            <p style={{ fontSize: '2rem' }}>Score: {score}</p>
        </div>
    );
};

export default Game;