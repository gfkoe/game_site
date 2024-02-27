// components/Typewriter.js
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import Link from "next/link";

interface TypewriterProps {
  lines: (string | ReactNode)[];
  speed: number;
}

const TypewriterComponent = ({ lines, speed }: TypewriterProps) => {
  const [displayLines, setDisplayLines] = useState<ReactNode[]>([]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        const line = lines[lineIndex];
        if (typeof line === "string") {
          setDisplayLines((prevLines) => [
            ...prevLines.slice(0, lineIndex),
            line.substring(0, charIndex),
            ...prevLines.slice(lineIndex + 1),
          ]);
        } else {
          // Handle JSX elements
          setDisplayLines((prevLines) => [
            ...prevLines.slice(0, lineIndex),
            line,
            ...prevLines.slice(lineIndex + 1),
          ]);
          charIndex = line.props.children.length;
        }
        charIndex++;
        if (
          charIndex >
          (typeof line === "string" ? line.length : line.props.children.length)
        ) {
          lineIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [lines, speed]);

  return (
    <div className="text">
      {displayLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

export default TypewriterComponent;
