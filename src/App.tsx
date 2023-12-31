import { Board } from "./components/Board";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Board FEN="r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 w KQkq - 0 1" />
    </div>
  );
}

export default App;
