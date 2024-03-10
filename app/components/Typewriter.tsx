import React, { useState, useEffect } from "react";

const useTypewriter = (text: string, speed: number): string => {
  const [output, setOutput] = useState<string>("");
  let index = 0;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        // Check if the next character is a space or a letter
        const nextChar = text.charAt(i);
        const isSpaceOrLetter = /^[a-zA-Z\s]+$/.test(nextChar);

        // Only update output if it's a space or a letter
        if (isSpaceOrLetter) {
          setOutput((prevText) => prevText + nextChar);
        }
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return output;
};

const Typewriter = ({ text, speed = 100 }: { text: string; speed: number }) => {
  const output = useTypewriter(text, speed);
  return <p>{output}</p>;
};

export default Typewriter;
