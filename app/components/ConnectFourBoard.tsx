import react from "react";

export default function ConnectFourBoard() {
  const [board, setBoard] = useState<Array<String>>([
    Array(7)
      .fill("")
      .map(() => Array(6).fill("")),
  ]);
  return <div></div>;
}
