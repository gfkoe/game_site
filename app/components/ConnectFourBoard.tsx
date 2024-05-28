import react from "react";
import { useState } from "react";

export default function ConnectFourBoard() {
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 7 }, () => Array.from({ length: 6 }, () => " "))
  );
  return <div></div>;
}
