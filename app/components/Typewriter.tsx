import React, { useState, useEffect, use } from "react";

const useTypewriter = (text: string, speed: number = 100): string => {
  const [output, setOutput] = useState<string>("");
  let index = 0;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setOutput((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  }, [text, speed]);

  return output;
};

const Typewriter = ({ text, speed = 100 }: { text: string; speed: number }) => {
  const output = useTypewriter(text, speed);
  return <p>{output}</p>;
};
export default Typewriter;
