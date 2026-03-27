import { useEffect, useState, useRef } from "react";

const words = [
    { word: "Tisch", article: "der", level: "A1" },
    { word: "Lampe", article: "die", level: "A1" },
    { word: "Möglichkeit", article: "die", level: "B2" },
    { word: "Gedanke", article: "der", level: "B1" },
    { word: "Ergebnis", article: "das", level: "B1" }
];

export const useGenderGame = () => {
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    // used for retrieving current word by index
    const [currentIndex, setCurrentIndex] = useState(0);
    const [level, setLevel] = useState("A1");    
    const [remainingWords, setRemainingWords] = useState(words);
    const [skipNextWord, setSkipNextWord] = useState(null);
    const timeoutRef = useRef(null);

    // Word Level Filter
    const filteredWords = words.filter((word) => word.level === level);
    
    const currentWord = remainingWords[currentIndex] || null;
    
    
    // Answer Checker function
    const checkAnswer = (answer) => {
        // clear existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        const correct = answer === currentWord.article;
        if (correct) {
            setScore(score + 1);
            
            // remove the current correctly guessed word from the list
            setRemainingWords(prev => prev.filter((_, idx) => idx !== currentIndex)
        );  
        } else {
            // remember the falsely guessed word, so its not immediately repeated
            setSkipNextWord(currentWord);
        }

        setIsCorrect(correct); // passes if article selected is correct or not for further use

        // 1 secound timeout till the next word change        
        timeoutRef.current = setTimeout(() => {
            // reset setIsCorrect
            setIsCorrect(null);

            setRemainingWords(prevWords => {
                // False choice filter
                let available = prevWords;

                if (skipNextWord) {
                    available = prevWords.filter(w => w.word !== skipNextWord.word);
                }

                // Check if the game is over
                if (available.length === 0) {
                    setCurrentIndex(null);
                    alert('Game Over!');
                    return [];
                }

                // set new Index
                const nextIndex = Math.floor(Math.random() * available.length);
                setCurrentIndex(nextIndex);
                
                setSkipNextWord(null);

                return available;
            }); 

            timeoutRef.current = null; // reset ref
        }, 1000);
    };
    return {
        currentWord,
        score,
        isCorrect,
        checkAnswer,
        level,
        setLevel
    };
};