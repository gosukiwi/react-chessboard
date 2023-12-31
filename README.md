# React Chessboard

A minimal chessboard so easily embed chess boards into any React app.

```tsx
import { Board } from "./components/Board";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Board FEN="r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 w KQkq - 0 1" />
    </div>
  );
}

export default App;
```
