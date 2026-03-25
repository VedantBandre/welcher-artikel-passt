import { useEffect, useState } from "react";

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
    // current word from the currentIndex
    const currentWord = words[currentIndex];

    const randomIndex = Math.floor(Math.randowm() * words.length);
    
    
    // Answer Checker function
    const checkAnswer = (answer) => {
        if (answer === currentWord.article) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }

        // 1 secound timeout till the next word change        
        setTimeout(() => {
            // reset setIsCorrect
            setIsCorrect(null);

            // Randomized new index/word
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * words.length);
            } while (nextIndex === currentIndex); // avoids choosing duplicate indexes

            setCurrentIndex(nextIndex);
        }, 1000);
    };





}